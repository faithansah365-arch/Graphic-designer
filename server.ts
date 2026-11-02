import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API: Contact Form Enquiry
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message, contactMethod } = req.body;

    // Strict validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return res.status(400).json({ success: false, error: 'Phone number is required.' });
    }
    if (!service || typeof service !== 'string' || !service.trim()) {
      return res.status(400).json({ success: false, error: 'Please select a required service.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Project description/message is required.' });
    }

    const preferredMethod = contactMethod || 'WhatsApp';
    const budgetRange = budget || 'Not specified';
    const recipientEmail = process.env.OWNER_EMAIL || 'contact@graphicdesignerstudio.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // Build WhatsApp fallback URL
    const whatsappText = `*NEW DESIGN ENQUIRY*\n\n` +
      `*Name:* ${name.trim()}\n` +
      `*Email:* ${email.trim()}\n` +
      `*Phone:* ${phone.trim()}\n` +
      `*Service:* ${service.trim()}\n` +
      `*Budget:* ${budgetRange}\n` +
      `*Preferred Contact:* ${preferredMethod}\n\n` +
      `*Project Description:*\n${message.trim()}`;
    const whatsappUrl = `https://wa.me/233599086738?text=${encodeURIComponent(whatsappText)}`;

    // Build mailto fallback URL
    const mailtoSubject = `Design Enquiry: ${service} - ${name}`;
    const mailtoBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budgetRange}\nPreferred Contact: ${preferredMethod}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvkkwewd';

    // If RESEND_API_KEY is not configured, dispatch to the configured Formspree endpoint
    if (!resendApiKey || !resendApiKey.trim() || resendApiKey === 'MY_RESEND_API_KEY') {
      try {
        const fsResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            service: service.trim(),
            budget: budgetRange,
            message: message.trim(),
            preferredContact: preferredMethod,
            _subject: `New Design Enquiry: ${service} from ${name}`,
          }),
        });

        if (fsResponse.ok) {
          return res.status(200).json({
            success: true,
            message: 'Your enquiry has been successfully delivered to the designer via Formspree!',
          });
        }
      } catch (fsErr) {
        console.error('Formspree dispatch error:', fsErr);
      }

      return res.status(200).json({
        success: false,
        code: 'DELIVERY_NOTICE',
        message:
          'Could not reach email services. Please use the direct WhatsApp enquiry button below to send your request instantly.',
        whatsappUrl,
        mailtoUrl,
        enquiryData: { name, email, phone, service, budget: budgetRange, message, preferredMethod }
      });
    }

    // Call Resend REST API
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #080B63; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">New Client Design Enquiry</h1>
          <p style="margin: 8px 0 0; color: #cbd5e1; font-size: 14px;">Kein Graphics – Creative Design & Branding Studio</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 35%;">Client Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; color: #1119A8;"><a href="mailto:${email}" style="color: #1119A8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; color: #0f172a;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Service Requested:</td>
              <td style="padding: 10px 0; color: #080B63; font-weight: bold;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Budget Range:</td>
              <td style="padding: 10px 0; color: #0f172a;">${budgetRange}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Preferred Contact:</td>
              <td style="padding: 10px 0; color: #0f172a;">${preferredMethod}</td>
            </tr>
          </table>

          <div style="background-color: #F7F7FA; border-left: 4px solid #1119A8; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #080B63; font-size: 13px; text-transform: uppercase;">Project Description / Message:</p>
            <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 8px;">Reply via WhatsApp</a>
            <a href="mailto:${email}" style="display: inline-block; background-color: #080B63; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Reply via Email</a>
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey.trim()}`,
      },
      body: JSON.stringify({
        from: 'Graphic Designer Studio <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject: `New Design Enquiry: ${service} from ${name}`,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendData);
      return res.status(200).json({
        success: false,
        code: 'RESEND_DELIVERY_ERROR',
        message: `Email provider error: ${resendData?.message || 'Failed to dispatch email'}. You can still forward your enquiry immediately via WhatsApp.`,
        whatsappUrl,
        mailtoUrl,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been successfully delivered to the designer! We will review your project and get back to you promptly.',
    });
  } catch (error: any) {
    console.error('Server error processing contact enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request. Please reach out via WhatsApp at +233 599 086 738.',
      whatsappUrl: 'https://wa.me/233599086738',
    });
  }
});

// App delivery (Vite in dev, static dist in prod)
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Graphic Designer server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
