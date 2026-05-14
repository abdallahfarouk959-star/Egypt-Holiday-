import express from "express";
import { createServer as createViteServer } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// تأكد إن ملف الـ .env في الفولدر الرئيسي للمشروع
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const COMPANY_EMAIL = "reservation@egyptholidaysaswan.com";

  const getTransporter = () => {
    const user = process.env.SMTP_USER || COMPANY_EMAIL;
    const pass = process.env.SMTP_PASS;

    if (!pass) {
      console.error("❌ CRITICAL: SMTP_PASS is missing in .env file!");
    }

    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.egyptholidaysaswan.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: { rejectUnauthorized: false }
    });
  };

  // Booking API
  app.post("/api/book", async (req, res) => {
    const bookingData = req.body;
    console.log("📩 New booking request received:", bookingData.name);

    try {
      const transporter = getTransporter();
      const mailOptions = {
        from: `"Egypt Holiday Aswan" <${process.env.SMTP_USER || COMPANY_EMAIL}>`,
        to: COMPANY_EMAIL,
        subject: `New Booking Request: ${bookingData.tourTitle || "Custom Trip"}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #006644; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Booking Request</h2>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.countryCode} ${bookingData.phone}</p>
            <p><strong>Date:</strong> ${bookingData.date}</p>
            <p><strong>Tour/Cruise:</strong> ${bookingData.tourTitle || "Not specified"}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <h3>Traveler Details:</h3>
            <ul>
              <li>Adults: ${bookingData.adults}</li>
              <li>Children (0-6): ${bookingData.childrenUnder6}</li>
              <li>Children (6-12): ${bookingData.children6To12}</li>
              ${bookingData.cabins ? `<li>Cabins: ${bookingData.cabins}</li>` : ""}
            </ul>
            <p><strong>Message:</strong> ${bookingData.message || "No additional message"}</p>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully! ID:", info.messageId);
      res.json({ success: true, message: "Booking request sent successfully!" });

    } catch (error) {
      console.error("❌ SMTP ERROR:", error);
      res.status(500).json({ success: false, error: "Failed to send email. Check server logs." });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER || COMPANY_EMAIL}>`,
        to: COMPANY_EMAIL,
        subject: `[Contact Form] New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      });
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("❌ Contact Email Error:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();