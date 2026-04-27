import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // التأكد إن الطلب نوعه POST بس
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const bookingData = req.body;
  console.log("New booking request received via Vercel Function:", bookingData);

  try {
    // إعدادات زوهو للإرسال
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // تفاصيل الإيميل اللي هيتبعت
    const mailOptions = {
      from: `"Egypt Holiday Aswan Site" <${process.env.SMTP_USER}>`,
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

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Booking request sent successfully!" });
    
  } catch (error) {
    // التعامل مع الأخطاء لو الإرسال فشل
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to process booking request" });
  }
}