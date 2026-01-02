"use server";

import nodemailer from "nodemailer";

export async function sendQuoteRequest(
  prevState: { success: boolean; error: string | null },
  formData: FormData
) {
  try {
    const productName = formData.get("productName") as string;
    const size = formData.get("size") as string;
    const quantity = formData.get("quantity") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !productName) {
      return { success: false, error: "Name, email, and product name are required" };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Quote Request" <${process.env.EMAIL_USER}>`,
      to: "info@spentaengineers.com",
      replyTo: email,
      subject: `Quote Request: ${productName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Size:</strong> ${size || "Not specified"}</p>
        <p><strong>Quantity:</strong> ${quantity || "Not specified"}</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message || "No additional message"}</p>
        <hr>
        <p><em>This quote request was submitted from the website.</em></p>
      `,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Quote request error:", err);
    return { success: false, error: "Failed to send quote request. Please try again later." };
  }
}

