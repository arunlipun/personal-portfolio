import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "lipun",       // 🔁 Replace with your EmailJS Service ID
        "template_k3dyewh",      // 🔁 Replace with your EmailJS Template ID
        formRef.current,
        "z3MK9xPD6zkIfPccg"        // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setDone(true);
          setError(null);
          formRef.current.reset(); // Optional: clear form
        },
        (error) => {
          console.error("Email failed:", error.text);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-transparent"
    >
      <h2 className="text-4xl font-bold text-black text-center mb-4">
        Get In <span className="text-blue-400">Touch</span>
      </h2>
      <p className="text-green-500-400 text-center mb-12">
        Let's discuss your next project
      </p>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Left - Message Form */}
        <div className="bg-[#0f172a]/70 rounded-2xl p-6">
          <h3 className="text-xl text-white font-semibold mb-4">
            ✉ Send a Message
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white focus:outline-none"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Tell me about your project..."
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90"
            >
              📧 Send Message
            </button>

            {done && (
              <p className="text-green-400 text-sm pt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm pt-2">
                ❌ {error}
              </p>
            )}
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-[#0f172a]/70 rounded-2xl p-6 space-y-6">
  <h3 className="text-xl text-white font-semibold mb-4">
    Connect With Me
  </h3>
  <div className="space-y-4">
    <div className="flex items-center space-x-4">
      <MdEmail className="text-red-400 text-2xl" />
      <span className="text-white">mohapatraarun64@gmail.com</span>
    </div>

    <div className="flex items-center space-x-4">
      <FaGithub className="text-gray-400 text-2xl" />
      <a
        href="https://github.com/arunlipun?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline"
      >
        GitHub
      </a>
    </div>

    <div className="flex items-center space-x-4">
      <FaLinkedin className="text-blue-400 text-2xl" />
      <a
        href="https://www.linkedin.com/in/arun-mohapatra-084b3030a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline"
      >
        Linkedin
      </a>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-6 pt-8">
    <div className="text-center">
      <h4 className="text-2xl font-bold text-white">50+</h4>
      <p className="text-sm text-gray-400">Projects Completed</p>
    </div>
    <div className="text-center">
      <h4 className="text-2xl font-bold text-white">24/7</h4>
      <p className="text-sm text-gray-400">Available</p>
    </div>
  </div>
</div>

      </div>

      <div className="w-full px-6 pt-12 pb-6 bg-transparent text-center">
  <hr className="border-gray-600 mb-4" />
  <p className="text-sm text-black-400">
    © {new Date().getFullYear()} Arun Mohapatra. All rights reserved.
  </p>
</div>
    </section>
  );
};

export default Contact;
