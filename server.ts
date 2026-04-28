import express from "express";
import { createServer as createViteServer } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // إعدادات زوهو للإرسال (Reusable)
  const getTransporter = () => nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Booking API
  app.post("/api/book", async (req, res) => {
    const bookingData = req.body;
    console.log("New booking request received:", bookingData);

    try {
      const transporter = getTransporter();
      const mailOptions = {
        from: `"Egypt Holiday Aswan Site" <${process.env.SMTP_USER || "reservation@egyptholidayaswan.com"}>`,
        to: "reservation@egyptholidayaswan.com",
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

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Booking request sent successfully!" });
      } else {
        console.warn("SMTP credentials not provided. Booking logged to console.");
        res.json({ 
          success: true, 
          message: "Booking received! (Simulation: SMTP credentials not set)",
          data: bookingData
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to process booking request" });
    }
  });

  // Contact Us API
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
      const transporter = getTransporter();
      const mailOptions = {
        from: `"Website Contact" <${process.env.SMTP_USER || "reservation@egyptholidayaswan.com"}>`,
        to: 'reservation@egyptholidayaswan.com',
        subject: `[Contact Form Inquiry] New message from ${name}`,
        text: `
          You have received a new inquiry from the Contact Us page:
          
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      } else {
        console.warn("SMTP credentials not provided. Contact message logged to console.");
        res.status(200).json({ success: true, message: 'Message received! (Simulation)' });
      }
    } catch (error) {
      console.error('Error sending contact email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();