import { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "04f47462-466c-4ff5-9235-fb47c1628ab8", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        // Also send to WhatsApp
        const whatsappMsg = `*New Portfolio Contact*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        window.open(`https://wa.me/+916372466462?text=${whatsappMsg}`, "_blank");

        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <span>pandasubhankar24@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>+91 6372466462</span>
          </div>

          <div className="info-item">
            <a href="https://wa.me/916372466462" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'inherit', textDecoration: 'none' }}>
              <FaWhatsapp className="contact-icon" style={{ color: '#25D366' }} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>India</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-status success">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="form-status error">❌ Failed to send. Please try again.</p>
          )}

        </form>

      </div>

    </div>
  );

}

export default Contact;