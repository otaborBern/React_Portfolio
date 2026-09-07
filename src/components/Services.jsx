import React from "react";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "I build modern, responsive, and high-performance websites tailored to your goals and audience.",
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "I create interactive user interfaces using modern frontend technologies such as React, JavaScript, HTML, and CSS.",
    },
    {
      number: "03",
      title: "Responsive Design",
      description:
        "I make websites look and work perfectly across desktops, tablets, and mobile devices.",
    },
    {
      number: "04",
      title: "UI/UX Design",
      description:
        "I design clean and intuitive interfaces that provide users with a simple and enjoyable experience.",
    },
    {
      number: "05",
      title: "Website Redesign",
      description:
        "I transform outdated websites into modern, professional, and responsive digital experiences.",
    },
    {
      number: "06",
      title: "Portfolio Websites",
      description:
        "I create professional portfolio websites that help individuals showcase their skills, work, and personal brand.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        
        <h2>My Services</h2>
        <p>
          I provide professional web development and design services to help
          individuals and businesses establish a strong online presence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              Get Started →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;