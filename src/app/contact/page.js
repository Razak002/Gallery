'use client'

import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "your_service_id", // Replace with your EmailJS service ID
          "your_template_id", // Replace with your EmailJS template ID
          values,
          "your_user_id" // Replace with your EmailJS user ID
        )
        .then(() => {
          setIsSubmitted(true);
          resetForm();
          setTimeout(() => setIsSubmitted(false), 3000);
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.h1
        className="text-3xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <motion.form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className={`w-full p-2 border ${
              formik.errors.name && formik.touched.name
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-green-500`}
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className={`w-full p-2 border ${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-green-500`}
            placeholder="Your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            className={`w-full p-2 border ${
              formik.errors.message && formik.touched.message
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-green-500`}
            placeholder="Your Message"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {/* Success Message */}
        {isSubmitted && (
          <motion.p
            className="text-green-600 text-sm mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message Sent Successfully!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
