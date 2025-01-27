"use server";

import nodemailer from "nodemailer";

export async function signupForWaitlist(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string | null;
  console.log(`Sending email to ${email}`);

  if (!email) {
    throw new Error("Email is required");
  }

  try {
    // Create a test account if you don't have real SMTP credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send an email to the admin
    await transporter.sendMail({
      from: '"Website Signup" <support@paradoxintimates.com>',
      to: "support@paradoxintimates.com",
      subject: `New Email Signup: ${email}`,
      text: `New signup from: ${email}`,
      html: `<p>New signup from: ${email}</p>`,
    });

    // Send a thank you email to the user
    await transporter.sendMail({
      from: '"Paradox Intimates" <support@paradoxintimates.com>',
      to: email,
      subject: `Thank You for Signing Up to Paradox Intimates`,
      text: `Thank you for signing up to Paradox Intimates. We will be in touch soon.`,
      html: `<p>Thank you for signing up to Paradox Intimates. We will be in touch soon.</p>`,
    });

    console.log("Signup email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error: "Failed to process email" };
  }
}
