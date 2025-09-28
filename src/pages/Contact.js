import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/contact", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
