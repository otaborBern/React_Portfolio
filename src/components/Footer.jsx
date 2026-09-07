import FooterLink from "./FooterLink";

const links = [
  "About",
  "Projects",
  "Contact",
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/otaborBern?tab=repositories",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bernard-otabor/"  ,
  },
];

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">

          <h3>Bernard.</h3>

          <p>
            Building clean, modern, and responsive web experiences with React.
          </p>

        </div>

        <div className="footer__links">

          <h4>Navigation</h4>

          {links.map(link => (
            <FooterLink key={link} text={link}/>
          ))}

        </div>

        <div className="footer__social">

          <h4>Connect</h4>

          {socials.map(item => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Bernard. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;