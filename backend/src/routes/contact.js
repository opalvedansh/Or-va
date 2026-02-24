const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, service, message } = req.body;

    // validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    try {
        // structured response
        // In a real app, you would use environment variables for email credentials
        // const transporter = nodemailer.createTransport({
        //   host: process.env.SMTP_HOST,
        //   port: process.env.SMTP_PORT,
        //   secure: false, // true for 465, false for other ports
        //   auth: {
        //     user: process.env.SMTP_USER,
        //     pass: process.env.SMTP_PASS,
        //   },
        // });

        // await transporter.sendMail({
        //   from: `"${name}" <${email}>`, // sender address
        //   to: process.env.CONTACT_TO_EMAIL, // list of receivers
        //   subject: `New Inquiry from ${name} - ${service}`, // Subject line
        //   text: message, // plain text body
        //   html: `<p><strong>Name:</strong> ${name}</p>
        //          <p><strong>Email:</strong> ${email}</p>
        //          <p><strong>Service:</strong> ${service}</p>
        //          <p><strong>Message:</strong><br/>${message}</p>`, // html body
        // });

        // For now, just log to console and return success as we don't have SMTP credentials yet
        console.log('Contact form submitted:', { name, email, service, message });

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

module.exports = router;
