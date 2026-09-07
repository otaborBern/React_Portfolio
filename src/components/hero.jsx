import logo from "../assets/logo.png";

function Hero() {
    return (
        <section  id="home" className="hero">

            <div className="hero-image-container">
           
                <img
                    src={logo}
                    alt="Bernard Portfolio Logo"
                    className="hero-image"
                    loading="lazy"
                />
            
        </div>

        <div className="hero-content">
            <h1 className="hero-title">
                I build digital products businesses can trust.
            </h1>

            <p className="hero-description">
                I'm Bernard, a web developer helping startups and small
                businesses turn ideas into polished, functional web
                experiences.
            </p>

            <p className="hero-tagline">
                Built with integrity. Delivered with professionalism.
            </p>

            <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                    Start a Project
                </a>
                

                <a href="#projects" className="btn btn-secondary">
                    View My Work
                </a>
            </div>
        
        </div>

        
        
        </section>
    );
}

export default Hero;