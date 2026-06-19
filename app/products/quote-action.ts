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

export async function sendQuoteList(
  prevState: { success: boolean; error: string | null },
  formData: FormData
) {
  try {
    const itemsJson = formData.get("items") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !itemsJson) {
      return { success: false, error: "Name, email, and items are required" };
    }

    const items: Array<{ productName: string; size: string; quantity: number }> = JSON.parse(itemsJson);

    if (items.length === 0) {
      return { success: false, error: "No items in the quote list." };
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

    const itemsHtml = items
      .map(
        (item) => `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.productName}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.size || "N/A"}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity || "1"}</td>
      </tr>
    `
      )
      .join("");

    await transporter.sendMail({
      from: `"Quote List Request" <${process.env.EMAIL_USER}>`,
      to: "info@spentaengineers.com",
      replyTo: email,
      subject: `Multi-Item Quote Request from ${name}`,
      html: `
        <h2>New Quote List Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Product</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Size</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        <br/>
        <p><strong>Message:</strong><br/>${message || "No additional message"}</p>
        <hr>
        <p><em>This quote request was submitted from the website's Quote List tool.</em></p>
      `,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Quote list error:", err);
    return { success: false, error: "Failed to send quote list. Please try again later." };
  }
}
