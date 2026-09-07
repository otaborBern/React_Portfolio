import desktop from "../assets/desktop.png";
import mobile from "../assets/mobile.png";
import contactPreview from "../assets/contactPreview.PNG"
import skillsPreview from "../assets/skillsPreview.PNG"


function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">

        {/* Section heading */}
        <div className="about__heading">
          <span className="section-label">ABOUT</span>
          <h2>Who I Am</h2>
        </div>

        {/* Introduction */}
        <div className="about__intro">
          <p>
            I'm Bernard, a web developer focused on building practical,
            reliable, and user-friendly digital products for startups,
            small businesses, and growing brands.
          </p>

          <p>
            I turn ideas into clean, responsive websites and
            modern web applications that look great, work smoothly,
            and provide a clear experience for the people using them.
          </p>

          <p>
            My approach combines modern development with thoughtful
            UI/UX decisions. I care about responsive layouts, reusable
            components, clear navigation, and interfaces that solve
            real problems without unnecessary complexity.
          </p>
        </div>

        {/* Visual story */}
        <div className="about__story">

          {/* 01 Responsive */}
          <article className="story-card story-card--responsive">
            <div className="story-card__content">
              <span className="story-number">01</span>

              <span className="story-label">
                RESPONSIVE DEVELOPMENT
              </span>

              <h3>Built for every screen.</h3>

              <p>
                I build responsive interfaces that adapt naturally
                across desktop, tablet, and mobile devices, keeping
                the experience consistent and easy to use.
              </p>
            </div>

            <div className="responsive-demo">

    <div className="desktop-preview">
        <img
            src={desktop}
            alt="Desktop view of a responsive web project width = 200 height = 500"
            loading="lazy"
        />
    </div>

    <div className="mobile-preview">
        <img
            src={mobile}
            alt="Mobile view of the same responsive web project width = 150 height = 400"
            loading="lazy"
        />
    </div>

</div>
          </article>
        

          {/* 02 React */}
          <article className="story-card story-card--react">
            <div className="story-card__content">
              <span className="story-number">02</span>

              <span className="story-label">
                REACT DEVELOPMENT
              </span>

              <h3>Interactive by design.</h3>

              <p>
                I'm building this portfolio with React, using
                component-based development to create reusable,
                organized, and interactive user interfaces.
              </p>
            </div>

            <div className="react-demo">
                <div className="browser-mockup">
              <div className="browser-top">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-url">
                  🔒 https://yourportfolio.com/contact
                </div>
              </div>

              <img src={contactPreview} 
              alt="React Contact Page"
              loading="lazy"
              />
            </div>
            </div>
          </article>

          {/* 03 UI/UX */}
          <article className="story-card story-card--ux">
            <div className="story-card__content">
              <span className="story-number">03</span>

              <span className="story-label">
                UI / UX
              </span>

              <h3>Designed around people.</h3>

              <p>
                Good interfaces should feel simple and intuitive.
                I focus on visual hierarchy, spacing, navigation,
                accessibility, and interactions that help users
                understand what to do next.
              </p>
            </div>

            <div className="ux-demo">
              <div className="ux-card">
                <div className="browser-mockup">
                  <div className="browser-top">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-url">
                      🔒 https://yourportfolio.com/skills
                    </div>
                  </div>

            <img src={skillsPreview}
             alt="UI UX Skills Section"
             loading="lazy"
             />
          </div>
            </div>
            </div>
          </article>




        {/* Services */}
        <div className="about__services">

          <div className="about__services-header">
            <span className="section-label">SERVICES</span>
            <h3>What I Do</h3>
          </div>

          <div className="services__grid">

            <div className="service">
              <span>01</span>
              <h4>Responsive Websites</h4>
              <p>
                Clean, responsive websites that work beautifully
                across every screen.
              </p>
            </div>

            <div className="service">
              <span>02</span>
              <h4>React Applications</h4>
              <p>
                Fast and interactive applications built with
                modern React.
              </p>
            </div>

            <div className="service">
              <span>03</span>
              <h4>Business Dashboards</h4>
              <p>
                Practical dashboards that turn business data into
                useful insights.
              </p>
            </div>

            <div className="service">
              <span>04</span>
              <h4>User-Focused Interfaces</h4>
              <p>
                Simple interfaces designed around real users
                and their needs.
              </p>
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;