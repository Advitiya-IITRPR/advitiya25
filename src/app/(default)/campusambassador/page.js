"use client";
import React from "react";
import "./campusambassador.css";

export default function CampusAmbassadorPage() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="campus-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Become a Campus Ambassador</h1>
          <p>
          "Be the Torchbearer of Innovation at IIT Ropar – Join Advitiya as a Campus Ambassador and Lead the Tech Revolution!"
          </p>
          <button onClick={scrollToForm} className="cta-button">
            Join Now
          </button>
        </div>
      </section>

      {/* Google Form Section */}
      <section id="form-section" className="form-section">
        <h2>Enrollment Form</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeYFFKJN5uCxIXhH7jEgaXfXIwlh_MyD2VoyGUpmoEodzlL8g/viewform?usp=header"
          title="Campus Ambassador Form"
        >
          Loading…
        </iframe>
      </section>
    </div>
  );
}
