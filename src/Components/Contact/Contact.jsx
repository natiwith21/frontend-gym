import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import right from "../../assets/right-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2de7ce4-9d69-4870-9ed4-6c48962ba89f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3 className="stroke-text">
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          "We'd love to hear from you! Whether you have questions, need
          assistance, or want to learn more about our products/services, our
          friendly and knowledgeable team is here to help. Feel free to reach
          out to us through the contact information provided below. We value
          your feedback and look forward to serving you and exceeding your
          expectations. Get in touch with us today and let us be a part of your
          incredible journey!"
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            natnaelabiy88@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +251 967218959
          </li>
          <li>
            <img src={location_icon} alt="" />
            Addis Ababa,4 Kilo
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="Phone"
            placeholder="Enter your mobile"
            required
          />

          <label>Write Your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={right} alt="" className="lastpic" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
