"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "@/components/email";

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

const sendEmail = async (formData: FormData) => {
  const from = 888;
  const message = formData.get("message");

  if (!validateString(from, 500)) {
    console.log("Invalid sender email");
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 500)) {
    console.log("Invalid sender message");
    return {
      error: "Invalid sender message",
    };
  }

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "52e6e77939e23a",
      pass: "6e6d96796cc84d",
    },
  });
  const emailHtml = render(<Email url="https://example.com" />);

  const options = {
    from: from?.toString(),
    to: "semenjakpetang176@gmail.com",
    subject: "Message from contact form",
    html: emailHtml,
  };

  const hasil = await transport.sendMail(options);

  console.log(hasil);

  // if (!message || !from) {
  //   return {
  //     error: "Invalid messages",
  //   };
  // }
  // resend.emails.send({
  //   from: from.toString(),
  //   to: "semenjakpetang176@gmail.com",
  //   subject: "Message from contact form",
  //   text: message.toString(),
  // });
};

export { sendEmail };
