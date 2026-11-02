import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';
import { SERVICES_LIST } from '../data/servicesData.ts';

interface ContactProps {
  selectedServicePreset?: string;
  onClearServicePreset?: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({
  selectedServicePreset,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: selectedServicePreset || 'Branding',
    budget: '',
    message: '',
    preferredContact: 'WhatsApp',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    status: 'idle' | 'success' | 'config_notice' | 'error';
    message: string;
    whatsappUrl?: string;
    mailtoUrl?: string;
  }>({
    status: 'idle',
    message: '',
  });

  // Keep service dropdown in sync if user clicked "Request This Service" from Services/Portfolio
  useEffect(() => {
    if (selectedServicePreset) {
      const matched = SERVICES_LIST.find(
        (s) =>
          s.title.toLowerCase().includes(selectedServicePreset.toLowerCase()) ||
          selectedServicePreset.toLowerCase().includes(s.title.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      }
    }
  }, [selectedServicePreset]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a required service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description/message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResult({ status: 'idle', message: '' });

    try {
      // Direct delivery to Formspree endpoint: https://formspree.io/f/xvkkwewd
      const response = await fetch(BRAND_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget || 'Not specified',
          message: formData.message,
          preferredContact: formData.preferredContact,
          _subject: `New Design Project Enquiry: ${formData.service} from ${formData.fullName}`,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitResult({
          status: 'success',
          message:
            'Thank you! Your enquiry has been delivered directly to our studio inbox via Formspree. We will review your project and get back to you promptly.',
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'Branding',
          budget: '',
          message: '',
          preferredContact: 'WhatsApp',
        });
      } else {
        const errorMsg =
          data && data.errors
            ? data.errors.map((err: any) => err.message).join(', ')
            : 'Enquiry submission failed. Please try again or send your message directly via WhatsApp.';

        const fallbackWhatsApp = getWhatsAppUrl(
          formData.service,
          `*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`
        );

        setSubmitResult({
          status: 'error',
          message: errorMsg,
          whatsappUrl: fallbackWhatsApp,
        });
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      const fallbackWhatsApp = getWhatsAppUrl(
        formData.service,
        `*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`
      );
      setSubmitResult({
        status: 'error',
        message: 'Could not connect to the form service. You can send your enquiry directly via WhatsApp.',
        whatsappUrl: fallbackWhatsApp,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const liveWhatsAppUrl = getWhatsAppUrl(
    formData.service,
    formData.message
      ? `From: ${formData.fullName || 'Client'} (${formData.phone || 'Phone not set'})\n${formData.message}`
      : undefined
  );

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F7F7FA] dark:bg-[#070A2D] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] dark:text-blue-400 mb-2">
            <span className="w-2.5 h-0.5 bg-[#1119A8] dark:bg-blue-400" />
            <span>Get a Quote / Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080B63] dark:text-white font-display tracking-tight">
            Let's Bring Your Creative Vision to Life
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Fill in the details below to request a service quotation or send an enquiry directly to our studio.
            We typically respond within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Contact Form Column (Left/Main) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#0B0F3E] rounded-2xl p-5 sm:p-8 md:p-9 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <form
              action={BRAND_CONFIG.formspreeEndpoint}
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 sm:space-y-5"
            >
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Kwame Mensah"
                    className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                        : 'border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] hover:border-slate-400 dark:hover:border-white/25'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@example.com"
                    className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all ${
                      errors.email
                        ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                        : 'border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] hover:border-slate-400 dark:hover:border-white/25'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +233 599 086 738"
                    className={`min-h-[44px] w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all ${
                      errors.phone
                        ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                        : 'border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] hover:border-slate-400 dark:hover:border-white/25'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all hover:border-slate-400 dark:hover:border-white/25"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title} className="bg-white dark:bg-[#070A2D] text-slate-900 dark:text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Budget Range & Preferred Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Budget Range <span className="text-slate-400 dark:text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="min-h-[44px] w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all hover:border-slate-400 dark:hover:border-white/25"
                  >
                    <option value="" className="bg-white dark:bg-[#070A2D]">Select an estimated budget</option>
                    <option value="Under $100 / GHS 1,500" className="bg-white dark:bg-[#070A2D]">Under $100 / GHS 1,500</option>
                    <option value="$100 - $250 / GHS 1,500 - 3,500" className="bg-white dark:bg-[#070A2D]">$100 - $250 / GHS 1,500 - 3,500</option>
                    <option value="$250 - $500 / GHS 3,500 - 7,000" className="bg-white dark:bg-[#070A2D]">$250 - $500 / GHS 3,500 - 7,000</option>
                    <option value="$500+ / GHS 7,000+" className="bg-white dark:bg-[#070A2D]">$500+ / GHS 7,000+</option>
                    <option value="Flexible / To be discussed" className="bg-white dark:bg-[#070A2D]">Flexible / To be discussed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData((prev) => ({ ...prev, preferredContact: method }))}
                        className={`min-h-[44px] py-2 px-1 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          formData.preferredContact === method
                            ? 'bg-[#080B63] dark:bg-[#1119A8] text-white border-[#080B63] dark:border-[#1119A8] shadow-xs'
                            : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Project Description / Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1.5">
                  Project Description / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your design project, brand goals, target audience, dimensions, or deadlines..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1119A8] dark:focus:ring-blue-400 transition-all resize-y ${
                    errors.message
                      ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                      : 'border-slate-300 dark:border-white/15 bg-white dark:bg-[#070A2D] hover:border-slate-400 dark:hover:border-white/25'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Status & Feedback Banners */}
              {submitResult.status === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 rounded-xl space-y-2.5 text-emerald-900 dark:text-emerald-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold">Enquiry Sent Successfully!</p>
                      <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">{submitResult.message}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-emerald-800 dark:text-emerald-300 font-medium">Delivered directly to studio inbox via Formspree</span>
                    <a
                      href={getWhatsAppUrl(formData.service, 'Hi, I just submitted an enquiry through your website form and wanted to touch base!')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100 flex items-center gap-1 underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Also notify on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {submitResult.status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl space-y-2">
                  <div className="flex items-start gap-2 text-red-800 dark:text-red-300">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold">Submission Notice</p>
                      <p className="text-xs text-red-700 dark:text-red-300 mt-0.5">{submitResult.message}</p>
                    </div>
                  </div>
                  {submitResult.whatsappUrl && (
                    <a
                      href={submitResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Forward to WhatsApp instead</span>
                    </a>
                  )}
                </div>
              )}

              {/* Submit Button & Fast WhatsApp Option */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[46px] flex-1 py-3 px-6 bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={liveWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] py-3 px-5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 active:scale-95 font-bold text-xs sm:text-sm rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </motion.div>

          {/* Business Contact Cards (Right Column) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Primary Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#0B0F3E] rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-white/10 shadow-xs"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#080B63] dark:text-white mb-4 font-display">
                Direct Contact & Support
              </h3>

              <div className="space-y-3.5 sm:space-y-4 text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">WhatsApp (Recommended)</p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-extrabold text-[#080B63] dark:text-white hover:text-[#1119A8] dark:hover:text-blue-300 flex items-center gap-1 mt-0.5"
                    >
                      <span>{BRAND_CONFIG.phoneDisplay}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Direct instant chat for quick quotes and briefs.</p>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#080B63] dark:bg-[#1119A8] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Phone Line</p>
                    <a
                      href={`tel:${BRAND_CONFIG.phoneRaw}`}
                      className="text-sm sm:text-base font-bold text-[#080B63] dark:text-white hover:text-[#1119A8] dark:hover:text-blue-300 block mt-0.5"
                    >
                      {BRAND_CONFIG.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Available for voice consultations and briefs.</p>
                  </div>
                </div>

                {/* Mock Studio Email */}
                <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#1119A8] dark:bg-[#2E3AFF] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Studio Inquiries</p>
                    <a
                      href={`mailto:${BRAND_CONFIG.ownerEmail}`}
                      className="text-xs sm:text-sm font-bold text-[#080B63] dark:text-white hover:text-[#1119A8] dark:hover:text-blue-300 block mt-0.5 break-all"
                    >
                      {BRAND_CONFIG.ownerEmail}
                    </a>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Official studio desk for contracts and asset transfers.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Studio Hours & Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#080B63] dark:bg-[#070A38] text-white rounded-2xl p-5 sm:p-7 shadow-md border dark:border-white/10"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-blue-200 mb-2">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Working Hours & Availability</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-display">Prompt Project Turnaround</h4>
              <p className="text-xs text-blue-100 dark:text-slate-300 mt-1 mb-4 leading-relaxed">
                We respect your deadlines and provide prompt updates throughout the design process.
              </p>

              <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-blue-200">Monday – Friday</span>
                  <span className="font-bold">8:00 AM – 6:00 PM GMT</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-blue-200">Saturday</span>
                  <span className="font-bold">9:00 AM – 4:00 PM GMT</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-blue-200">Sunday</span>
                  <span className="font-bold text-amber-300">By Special Request</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
