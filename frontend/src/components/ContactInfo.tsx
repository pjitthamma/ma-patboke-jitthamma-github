import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ContactInfo.css";

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  className = "",
}) => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle submit button click
  const handleSubmitClick = () => {
    navigate("/error"); // Redirect to the error page
  };

  return (
    <div className={`contact-info ${className}`}>
      <div className="rectangle-parent22">
        <div className="frame-child22" />
        <div className="contact-description-wrapper">
          <div className="contact-description">
            <div className="get-in-touch">
              <h2 className="get-in-touch1">Get In Touch With Us</h2>
            </div>
            <div className="for-more-information">
              For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </div>
          </div>
        </div>
        <div className="contact-details-parent">
          <div className="contact-details">
            <div className="rectangle-parent23">
              <div className="frame-child23" />
              <div className="contact-info-icons">
                <img
                  className="location-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="time-and-phone">
                  <img
                    className="bxsphone-icon"
                    loading="lazy"
                    alt=""
                    src="/bxsphone.svg"
                  />
                  <img
                    className="biclock-fill-icon"
                    loading="lazy"
                    alt=""
                    src="/biclockfill.svg"
                  />
                </div>
              </div>
              <div className="address-details">
                <div className="address-details1">
                  <div className="address-info">
                    <div className="address">Address</div>
                    <div className="th-se-avenue">
                      Max-Planck-Straße 50, Leipzig Germany, 04105
                    </div>
                  </div>
                  <div className="address-info">
                    <div className="phone">Phone</div>
                    <div className="th-se-avenue">
                      <p className="monday-friday-900-">
                        Mobile: (+49) 151-5597-4761
                      </p>
                      <p className="monday-friday-900-">
                        Hotline: (+49) 151-5597-4761
                      </p>
                    </div>
                  </div>
                  <div className="address-info">
                    <div className="working-time">Working Time</div>
                    <div className="monday-friday-900-container">
                      <p className="monday-friday-900-">
                        Monday-Friday: 9:00 AM to 6:00 PM (CET)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent24">
            <div className="frame-child24" />
            <div className="email-subject">
              <div className="name-input">
                <div className="your-name">Your name</div>
                <div className="email-input-fields">
                  <Form className="frame-form">
                    <Form.Control type="text" />
                  </Form>
                </div>
              </div>
            </div>
            <div className="email-subject">
              <div className="email-subject-details">
                <Form className="email-subject-labels">
                  <Form.Control type="text" />
                </Form>
                <div className="email-subject-labels1">
                  <div className="subject">Subject</div>
                  <div className="email-input-fields">
                    <Form className="frame-form">
                      <Form.Control type="text" />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-field">
              <div className="message">Message</div>
              <div className="name-field">
                <Form.Group className="message-placeholder-formgroup">
                  <Form.Control as="textarea" defaultValue="" />
                </Form.Group>
              </div>
            </div>
            <div className="submit-button">
              <button className="rectangle-parent25" onClick={handleSubmitClick}>
                {/* Attach handleSubmitClick to button */}
                <div className="frame-child25" />
                <div className="submit">Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
