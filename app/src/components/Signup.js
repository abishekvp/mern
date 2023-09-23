import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    axios.post("https://example.com/api/form", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="contact"
        placeholder="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;