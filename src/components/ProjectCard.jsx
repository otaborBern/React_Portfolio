
    function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.featured ? "featured" : ""
      }`}
    >
      <div className="browser-frame">

        <div className="browser-top">

          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="browser-url">
            {project.title}
          </div>

        </div>

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;