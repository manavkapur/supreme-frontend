import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [quotes, setQuotes] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const quotesRes = await axios.get("http://localhost:8080/quotes");
    const contactRes = await axios.get("http://localhost:8080/contact");
    setQuotes(quotesRes.data);
    setMessages(contactRes.data);
  };

  const deleteQuote = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/quotes/${id}`, {
        auth: { username: "admin", password: "password123" } // 🔑
      });
      alert("Quote deleted");
      fetchData(); // refresh
    } catch (err) {
      alert("Failed to delete quote");
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/contact/${id}`, {
        auth: { username: "admin", password: "password123" } // 🔑
      });
      alert("Message deleted");
      fetchData();
    } catch (err) {
      alert("Failed to delete message");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Quotes</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Service</th><th>Details</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(q => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.name}</td>
              <td>{q.email}</td>
              <td>{q.service}</td>
              <td>{q.details}</td>
              <td><button onClick={() => deleteQuote(q.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Contact Messages</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
              <td><button onClick={() => deleteMessage(m.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
