"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  //const myEmail = process.env.NEXT_PUBLIC_EMAIL;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/59ea6f8c81e01c38e31a950422917bd5`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message was sent successfully!");
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      toast.error("There was an error submitting the form. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
        {submitSuccess ? (
          <div className="bg-green-200 rounded-md py-4 text-center text-black mb-4">
            Thank you for your message! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-white">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 bg-secondary rounded text-primary"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for your message! I will get back to you soon."
            />
            <div>
              <label htmlFor="email" className="block mb-2 text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 bg-secondary rounded text-primary"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-white">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 bg-secondary rounded text-primary"
                rows={4}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-secondary text-primary py-2 px-4 rounded hover:bg-primary hover:text-secondary hover:shadow-md hover:shadow-secondary disabled:bg-gray-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending. Please wait..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
