import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  /** @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e */
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setSent(true);
    
    // Reset form and success message after 3 seconds
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Try to reach me out
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-[-0.02em]">
            Let's Talk
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="font-heading font-semibold text-xs text-foreground tracking-[0.05em] uppercase block mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-card/30 border border-border/30 rounded px-4 py-3 h-12 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="font-heading font-semibold text-xs text-foreground tracking-[0.05em] uppercase block mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-card/30 border border-border/30 rounded px-4 py-3 h-12 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label 
                htmlFor="subject" 
                className="font-heading font-semibold text-xs text-foreground tracking-[0.05em] uppercase block mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full bg-card/30 border border-border/30 rounded px-4 py-3 h-12 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message" 
                className="font-heading font-semibold text-xs text-foreground tracking-[0.05em] uppercase block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                required
                className="w-full bg-card/30 border border-border/30 rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
              >
                <p className="text-sm text-red-500">{error}</p>
              </motion.div>
            )}

            {/* Success Message */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-primary/10 border border-primary/30 rounded-lg"
              >
                <p className="text-sm text-primary">✓ Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sent}
              className="w-full px-8 py-3 h-auto bg-primary hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed text-background font-heading font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <span>✓</span>
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="border border-border/30 p-6 space-y-6 bg-card/30 rounded-lg">
              {/* Section Title */}
              <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-4">
                Connect
              </div>

              {/* Email */}
              <a
                href="mailto:adityatriananta@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-border/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 rounded">
                  <Mail size={16} className="group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-xs text-muted-foreground/60 tracking-[0.05em] uppercase mb-0.5">
                    Email
                  </div>
                  <span className="text-sm text-foreground">
                    adityatriananta@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-tri-ananta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-border/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 rounded">
                  <Linkedin size={16} className="group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-xs text-muted-foreground/60 tracking-[0.05em] uppercase mb-0.5">
                    LinkedIn
                  </div>
                  <span className="text-sm text-foreground">
                    aditya-tri-ananta
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/didit02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-border/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 rounded">
                  <Github size={16} className="group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-xs text-muted-foreground/60 tracking-[0.05em] uppercase mb-0.5">
                    GitHub
                  </div>
                  <span className="text-sm text-foreground">
                    didit02
                  </span>
                </div>
              </a>

              {/* Divider */}
              <div className="h-px bg-border/20" />

              {/* Location */}
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 border border-border/30 flex items-center justify-center rounded">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-xs text-muted-foreground/60 tracking-[0.05em] uppercase mb-0.5">
                    Location
                  </div>
                  <span className="text-sm text-foreground">
                    Cilacap, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}