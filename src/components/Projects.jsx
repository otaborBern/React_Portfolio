import ProjectCard from "./ProjectCard";

import portfolioPreview from "../assets/portfolio-preview.PNG";
import landingPreview from "../assets/landing-preview.PNG";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "A modern responsive portfolio built with semantic HTML and CSS, featuring reusable layouts, responsive sections, and a clean developer-focused design.",
    image: portfolioPreview,
    technologies: ["HTML5", "CSS3"],
    live: "#",
    github: "https://otaborbern.github.io/pro-portfolio/",
    featured: true,
  },
  {
    id: 2,
    title: "Business Landing Page",
    description:
      "A responsive landing page built with HTML, CSS, and JavaScript featuring a clean layout, engaging call-to-action sections, and interactive contact button functionality.",
    image: landingPreview,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://otaborbern.github.io/Land-portfolio/",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">

        <div className="projects__heading">
          <span className="section-label">PROJECTS</span>
          <h2>Featured Work</h2>

          <p>
            Real projects built while strengthening my frontend development
            skills, with more full-stack applications coming next.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;