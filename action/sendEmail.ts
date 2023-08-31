"use server";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "@/components/email";
import React from "react";

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error?.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error?.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Unknown error";
  }

  return message;
};

const sendEmail = async (formData: FormData) => {
  const from = formData.get("senderEmail");
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
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const emailHtml = render(
    React.createElement(Email, {
      message: message as string,
      senderEmail: from as string,
    })
  );

  const options = {
    from: "Contact from <onboarding@resend.com>",
    to: "semenjakpetang176@gmail.com",
    subject: "Message from contact form",
    html: emailHtml,
  };

  let data;
  try {
    data = await transport.sendMail(options);
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };

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
