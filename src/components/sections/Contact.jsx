import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3500);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3500);
      });
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Email</h3>
                <p className="text-gray-400 text-xs">laiba@example.com</p>
              </div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Location</h3>
                <p className="text-gray-400 text-xs">Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Status</h3>
                <p className="text-emerald-400 text-xs">Available for work</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative group/input">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] placeholder-gray-500 group-hover/input:border-white/20"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email Input */}
                <div className="relative group/input">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-purple-400 focus:bg-purple-500/5 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] placeholder-gray-500 group-hover/input:border-white/20"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Message Input */}
                <div className="relative group/input">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-emerald-400 focus:bg-emerald-500/5 focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] placeholder-gray-500 resize-none group-hover/input:border-white/20"
                    placeholder="Tell me about your project or just say hi..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`group/btn w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden
                    ${status === "sending" 
                      ? "bg-blue-400 cursor-wait" 
                      : status === "success"
                      ? "bg-emerald-500"
                      : status === "error"
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"}
                  `}
                  disabled={status === "sending"}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    {status === "sending" && (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    )}
                    {status === "error" && (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Failed - Try Again
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        Send Message
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  {status === "idle" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-emerald-400 font-medium">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-400 font-medium">
                    Oops! Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};