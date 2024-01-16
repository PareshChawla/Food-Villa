import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      // Display a message to the user that required fields are missing
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto my-6 p-6 bg-white rounded-md shadow-md"
      >
        <h1 className="text-xl md:text-2xl font-bold text-center mb-10 text-gray-800">
          Contact us
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2">
            Name<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-1 px-1 md:py-2 md:px-3 leading-tight focus:shadow-outline"
            type="text"
            name="from_name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2">
            Email<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-1 px-1 md:py-2 md:px-3 leading-tight focus:shadow-outline invalid:border-pink-500"
            type="email"
            name="from_email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2">
            Message<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            className="resize-none border rounded w-full py-1 px-1 md:py-2 md:px-3 leading-tight focus:shadow-outline"
            name="message"
          />
        </div>
        
        <div className="flex items-center justify-center">
          {success ? (
            <div className="text-green-600 font-bold">
              Message sent successfully!!
            </div>
          ) : (
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-lg my-2 md:my-4 focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
