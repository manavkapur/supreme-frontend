import React, { useState } from "react";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${username}`); // will connect to backend later
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Admin;
