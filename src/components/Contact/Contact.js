import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import contactData from "../../data/contact.json";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/contact.json")
      .then((res) => res.json())
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const displayContact = contact || contactData;
  const { title, subtitle, info, contactDetails, socialLinks, form } = displayContact;

  const icons = {
    email: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    phone: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    location: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    github: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    portfolio: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  };

  const getIconForLabel = (label) => {
    const key = label.toLowerCase();
    return icons[key] || icons.email;
  };

  const getIconForSocial = (name) => {
    const key = name.toLowerCase();
    return icons[key] || icons.github;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:${form.recipientEmail}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  // Map contact details with icons
  const contactItems = contactDetails.map((item) => ({
    ...item,
    icon: getIconForLabel(item.label)
  }));

  // Map social links with icons
  const socialItems = socialLinks.map((social) => ({
    ...social,
    icon: getIconForSocial(social.name)
  }));

  return (
    <section className="contact">
      <Container className="contact-container">
        <h1 className="section-title">{title}</h1>
        <p className="contact-subtitle">{subtitle}</p>

        <Row className="contact-content">
          <Col xs={12} lg={5} className="contact-info-col">
            <div className="contact-info">
              <h2 className="contact-info-title">{info.title}</h2>
              <p className="contact-info-text">{info.text}</p>

              <div className="contact-details">
                {contactItems.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-item-content">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-socials">
                <span className="social-label">Follow me</span>
                <div className="social-links">
                  {socialItems.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                {form.fields.map((field) => (
                  <div key={field.name} className="form-group">
                    <label htmlFor={field.name}>{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={field.rows || 5}
                        placeholder={field.placeholder}
                        required={field.required}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button type="submit" className="btn-submit">
                  <span>{form.submitText}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
