import React, { useState } from "react";
import axios from "axios";

function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/quotes", form);
      alert("Quote submitted successfully!");
      setForm({ name: "", email: "", service: "", details: "" }); // reset form
    } catch (error) {
      console.error(error);
      alert("Failed to submit quote");
    }
  };

  return (
    <div>
      <h2>Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="service" placeholder="Service" value={form.service} onChange={handleChange} />
        <textarea name="details" placeholder="Details" value={form.details} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quote;
