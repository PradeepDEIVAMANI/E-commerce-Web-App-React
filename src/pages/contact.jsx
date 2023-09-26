import React, { useState, useEffect } from "react";
import "./contact.css"

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Capture user input
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  // useEffect for setting the page title when the component mounts
  useEffect(() => {
    document.title = "ShoppingApp - Your Website"; // Set the page title
  }, []);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Contact us using the form below:</p>

      {submitted ? (
        <div className="success-message">
          Thank you for your message. We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
