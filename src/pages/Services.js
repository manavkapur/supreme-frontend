import React, { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/services")
      .then(response => setServices(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {services.map(s => (
          <div key={s.id} style={{ border: "1px solid #ddd", padding: "15px", width: "250px" }}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <strong>{s.priceRange}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
