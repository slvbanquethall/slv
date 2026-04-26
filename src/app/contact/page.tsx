"use client";

import { useState } from "react";
import ContactMap from "@/components/ContactMap";

const MAP_CONFIG = {
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.3!2d78.28635707567926!3d17.54789107373384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf361e18a6507%3A0x781bdfca5c0da11d!2sFalcon%20One%20Shopping%20Plaza!5e0!3m2!1sen!2sin!4v1777186341254!5m2!1sen!2sin",
  navigationUrl: "https://www.google.com/maps/dir/?api=1&destination=Falcon+One+Shopping+Plaza,+Gachibowli,+Hyderabad",
};

// Google Apps Script deployment URL for form submissions
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwhwbkw9E0UuvdaA3v95Gr4j1zLSUPdIWzeI0zbqO2WHsT1i4n7MWdILy3dYKYKVVdS/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const e: { [key: string]: string } = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      e.phone = "Enter a valid phone number.";
    }
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length > 0) {
      setErrors(ve);
      return;
    }

    setLoading(true);
    try {
      // Send to Google Sheet
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Map Background with Navigation */}
      <ContactMap mapSrc={MAP_CONFIG.mapSrc} />

      {/* Contact Form Overlay */}
      <section className="py-16 px-4 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-lg bg-black/80 backdrop-blur-sm" style={{ fontFamily: "var(--font-playfair)" }}>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#d4a017", fontFamily: "var(--font-playfair)" }}>
              Contact Us
            </h2>
            <p
              className="mb-8"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair)",
                fontSize: "16px",
              }}
            >
              Our team is ready to assist you with venue details, booking information, and personalized service offerings.
            </p>

            {submitted && (
              <div
                className="p-4 mb-4 rounded-lg text-center"
                style={{
                  backgroundColor: "rgba(0, 212, 170, 0.1)",
                  border: "1px solid rgba(0, 212, 170, 0.3)",
                  color: "#00d4aa",
                }}
              >
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#d4a017", fontFamily: "var(--font-playfair)" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 focus:border-yellow-400 outline-none transition"
                  style={{ borderColor: errors.name ? "#ff6b6b" : "#d4a017", color: "#ffffff", backgroundColor: "transparent", fontFamily: "var(--font-playfair)" }}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#d4a017", fontFamily: "var(--font-playfair)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 outline-none transition"
                  style={{ borderColor: errors.email ? "#ff6b6b" : "#d4a017", color: "#ffffff", backgroundColor: "transparent", fontFamily: "var(--font-playfair)" }}
                  placeholder="Your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#d4a017", fontFamily: "var(--font-playfair)" }}>
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 outline-none transition"
                  style={{ borderColor: errors.phone ? "#ff6b6b" : "#d4a017", color: "#ffffff", backgroundColor: "transparent", fontFamily: "var(--font-playfair)" }}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Buttons Row */}
              <div className="flex gap-3 pt-3">
                <a
                  href={MAP_CONFIG.navigationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white py-3 rounded-lg font-bold transition duration-300 text-center"
                  style={{ backgroundColor: "#d4a017", fontFamily: "var(--font-playfair)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c19015")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4a017")}
                >
                  Navigate
                </a>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 text-white py-3 rounded-lg font-bold transition duration-300 disabled:opacity-50"
                  style={{ backgroundColor: "#d4a017", fontFamily: "var(--font-playfair)" }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "#c19015")}
                  onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = "#d4a017")}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
