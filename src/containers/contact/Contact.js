import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <p className={"contact-info"}>{contactInfo.intro}</p>
              <p>
                {emoji("Email Me 📧: ")}
                <a
                  className="contact-detail-email"
                  href={"mailto:" + contactInfo.email_address}
                >
                  {contactInfo.email_address}
                </a>
              </p>
              <p>
                {emoji("Text Me ☎️: ")}
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                <span> Oxford, UK</span>
              </p>
              <p>
                {emoji("Open for Opportunities:  " + contactInfo.situation)}
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <div className="profile-image">
              <img
                className="avatar-image"
                src={contactInfo.image}
                alt="Ricky Wang"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
