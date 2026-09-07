

function ContactCard({ icon, title, value }) {
  return (
    <div className="contact-card">
      <div className="icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default ContactCard;