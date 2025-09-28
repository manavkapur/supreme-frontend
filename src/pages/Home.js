import React from "react";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ background: "#222", color: "#fff", padding: "50px", textAlign: "center" }}>
        <h1>Welcome to SupremeSolutions</h1>
        <p>Your trusted partner for Temporary Fencing Solutions</p>
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Get a Quote
        </button>
      </header>
      <section style={{ marginTop: "40px" }}>
        <h2>Why Choose Us?</h2>
        <p>
          We provide safe, durable, and cost-effective fencing for construction,
          demolition, and events.
        </p>
      </section>
    </div>
  );
}

export default Home;
