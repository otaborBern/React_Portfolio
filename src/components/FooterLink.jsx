function FooterLink({ text }) {
  return (
    <a href={`#${text.toLowerCase()}`}>
      {text}
    </a>
  );
}

export default FooterLink;