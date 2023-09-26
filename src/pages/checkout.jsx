import React, { useState } from "react";
import "./checkout.css";

export const Checkout = () => {
  // Define state variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Capture user input
    const formData = {
      name,
      email,
      address,
      creditCard,
    };

    try {
      // Send formData to your server or payment gateway for processing
      // You can make an API request here or handle payment submission as required

      // Assuming a successful payment
      setSubmitted(true);
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {submitted ? (
        <div className="success-message">
          Thank you for your purchase. Your order will be shipped soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="creditCard">Credit Card Number:</label>
            <input
              type="text"
              id="creditCard"
              name="creditCard"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
              required
            />
          </div>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};
