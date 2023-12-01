// Contact.jsx
import React, { useState, useEffect } from "react";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Contact"
        text="Have questions or concerns? We're here to help"
        buttonText="Contact"
        buttonLink="/about"
      />
      <div className="container mx-auto p-8">
        {/* Add more content, e.g., contact form */}
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Whether you have questions about our organization, want to ask about
            laws regarding animal abuse, or need more information, feel free to
            reach out to us. Use the contact form below, and we'll get back to
            you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
