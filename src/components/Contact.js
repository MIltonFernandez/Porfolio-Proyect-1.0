import React, { useState, useEffect } from "react";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Tu mensaje fue enviado correctamente👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className = "container-contact">
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contactame! 🤳</h1>

      <label>Nombre</label>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Mensaje</label>
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button className ="button-contact"
        type="submit"
        style={{ background: loader ? "#ccc" : "#f9ab00" }}
      >
        Enviar
      </button>
    </form>
    </div>
  );
};

export default Contact;

