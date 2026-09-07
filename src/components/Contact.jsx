import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  // useRef gives us a reference to the actual form element.
  // We need this so EmailJS can read the form's input values.
  const form = useRef();

  // This function runs when the user submits the form.
  const sendEmail = (e) => {

    // Prevent the browser from refreshing the page.
    e.preventDefault();

    // Send the form data to EmailJS.
    emailjs
      .sendForm(
        "service_cwjn9s3",
        "template_mu7vmai",
        form.current,
        "ZYGd-tu_i-X-9IbA_"
      )

      // Runs if EmailJS successfully sends the message.
      .then(() => {
        alert("Message sent!");
      })

      // Runs if something goes wrong.
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <section className="contact" id="contact">

      {/* Section Header */}
      <div className="contact-header">

        <h2>
          Get in <span>Touch</span>
        </h2>

        <p>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

      </div>


      <div className="contact-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="contact-left">

          <h3>Let's Start a Conversation</h3>

          <p>
            Our team is here to help you succeed. Whether you have questions
            about features, need technical support, or want to discuss custom
            solutions, we're just a message away.
          </p>


          <div className="cards">

            <ContactCard
              icon="✉️"
              title="Email"
              value="support@sassify.com"
            />

            <ContactCard
              icon="📞"
              title="Phone"
              value="+1 (555) 123-4567"
            />

            <ContactCard
              icon="📍"
              title="Office"
              value="123 Innovation Street, San Francisco, CA 94102"
            />

            <ContactCard
              icon="🕒"
              title="Hours"
              value="Monday – Friday: 9:00 AM – 6:00 PM PST"
            />

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="contact-right">

          {/* 
            This is the REAL form.

            ref={form}
            connects this form to useRef().

            onSubmit={sendEmail}
            tells React which function to run
            when the user clicks "Send Message".
          */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <h3>Send us a Message</h3>


            <div className="name-row">

              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />

            </div>


            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />


            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />


            <textarea
              name="message"
              rows="5"
              placeholder="Tell us more about your inquiry..."
              required
            />


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;