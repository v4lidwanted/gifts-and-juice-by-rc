import { useState } from "react";

const WHATSAPP_OWNER_1 = "233207719999";
const WHATSAPP_OWNER_2 = "233207718888";

function CustomGifts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    budget: "",
    date: "",
    details: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  const sendToWhatsApp = (number: string) => {
    const message = `Hello Gifts & Juice by RC,

I'd like to make a custom gift request.

Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Occasion: ${formData.occasion}
Preferred Budget: ${formData.budget || "Not specified"}
Date Needed: ${formData.date || "Not specified"}

Gift Request:
${formData.details}`;

    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.occasion.trim() ||
      !formData.details.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    sendToWhatsApp(WHATSAPP_OWNER_1);
  };

  return (
    <main className="custom-page">
      <section className="custom-hero">
        <div className="custom-hero-content">
          <p className="eyebrow">CUSTOM GIFTS</p>

          <h1>
            Your idea.
            <br />
            Our creativity.
          </h1>

          <p>
            Have something special in mind? Tell us what you
            are looking for and we'll help create a thoughtful
            gift made just for you.
          </p>
        </div>
      </section>

      <section className="custom-content">
        <div className="custom-content-heading">
          <p className="eyebrow">MAKE IT PERSONAL</p>

          <h2>
            A gift made
            <br />
            your way.
          </h2>
        </div>

        <div className="custom-content-text">
          <p>
            Whether you're celebrating a birthday, surprising
            someone special or creating a memorable moment,
            we're here to help bring your idea to life.
          </p>

          <p>
            Share what you have in mind, including the occasion,
            your preferred style and any personal touches you'd
            like included.
            Make a request down below.
          </p>

        </div>
      </section>

      <section className="custom-request" id="custom-request">
        <div className="custom-request-heading">
          <p className="eyebrow">MAKE YOUR REQUEST</p>

          <h2>
            Tell us what
            <br />
            you have in mind.
          </h2>

          <p>
            Fill in the details below and send your request
            directly to either of our WhatsApp contacts.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name <span>*</span>
            </label>

            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone / WhatsApp <span>*</span>
            </label>

            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 024 123 4567"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">
              Occasion <span>*</span>
            </label>

            <input
              type="text"
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="e.g. Birthday, Anniversary, Graduation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Preferred Budget</label>

            <input
              type="text"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. GHS 500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date Needed</label>

            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">
              Tell Us What You Want <span>*</span>
            </label>

            <textarea
              id="details"
              rows={7}
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe the gift you'd like, colours, items, personalisation, theme or any other details..."
              required
            ></textarea>
          </div>

          <div className="custom-whatsapp-buttons">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Send to Owner 1
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (
                  !formData.name.trim() ||
                  !formData.phone.trim() ||
                  !formData.occasion.trim() ||
                  !formData.details.trim()
                ) {
                  alert("Please fill in all required fields.");
                  return;
                }

                sendToWhatsApp(WHATSAPP_OWNER_2);
              }}
            >
              Send to Owner 2
            </button>
          </div>

          <p className="custom-whatsapp-note">
            Your request will open in WhatsApp with the details
            already filled in. You can review it before sending.
          </p>
        </form>
      </section>

      <section className="custom-steps">
        <div className="custom-step">
          <span>01</span>

          <h3>Tell Us</h3>

          <p>
            Share your gift idea and what you'd like to create.
          </p>
        </div>

        <div className="custom-step">
          <span>02</span>

          <h3>We Create</h3>

          <p>
            We'll work with your idea to put together something
            thoughtful and special.
          </p>
        </div>

        <div className="custom-step">
          <span>03</span>

          <h3>Make Someone Smile</h3>

          <p>
            Your personalised gift is ready for its special
            moment.
          </p>
        </div>
      </section>
    </main>
  );
}

export default CustomGifts;