import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    color: "",
    qty: "",
    price: "",
    phone: "",
    device: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/send", formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Address:
        <textarea name="address" onChange={handleChange} />
      </label>
      <label>
        Color:
        <textarea name="color" onChange={handleChange} />
      </label>
      <label>
        Qty:
        <textarea name="qty" onChange={handleChange} />
      </label>
      <label>
        Price:
        <textarea name="price" onChange={handleChange} />
      </label>
      <label>
        Phone:
        <textarea name="phone" onChange={handleChange} />
      </label>
      <label>
        Device:
        <textarea name="device" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
