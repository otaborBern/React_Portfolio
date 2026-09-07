import React from "react";

function Skills() {
  const skills = [
    {
      title: "HTML & CSS",
      description: "Building responsive and modern web interfaces.",
      icon: "🌐",
    },
    {
      title: "JavaScript",
      description: "Creating interactive and dynamic web experiences.",
      icon: "⚡",
    },
    {
      title: "React",
      description: "Developing fast and reusable component-based applications.",
      icon: "⚛️",
    },
    {
      title: "Responsive Design",
      description: "Designing websites that work beautifully on every device.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Creating clean, intuitive, and user-friendly interfaces.",
      icon: "🎨",
    },
    {
      title: "Git & GitHub",
      description: "Managing projects and collaborating with development teams.",
      icon: "🔧",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span>MY SKILLS</span>
        <h2>Technologies I Work With</h2>
        <p>
          I use modern technologies and development tools to create
          professional, responsive, and user-friendly digital experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;