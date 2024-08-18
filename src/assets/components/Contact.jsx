import { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { faL } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Contact = () => {
  const serviceID = "service_gz5ggwq";
  const templateID = "template_22j2s1q";
  const userID = "rTLUJi_Zh-yxnczNL";

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Good job!",
            text: "Submitted successfully!",
            icon: "success",
          });
          e.target.reset();
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          }); // Reset formData state
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Failed!",
            text: "Cannot submit!",
            icon: "error",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="contact_us_green">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div
              className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
              id="i69b-2"
            >
              <form ref={form} className="form-box" onSubmit={sendEmail}>
                <div className="container-block form-wrapper">
                  <div className="head-text-box">
                    <p className="text-blk contactus-head">Contact us</p>
                    <p className="text-blk contactus-subhead">
                      Feel free to contact us and we will get back to you as
                      soon as we can.
                    </p>
                  </div>
                  <div className="responsive-container-block">
                    <div
                      className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                      id="i10mt-6"
                    >
                      <p className="text-blk input-title">FIRST NAME</p>
                      <input
                        className="input"
                        id="ijowk-6"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">LAST NAME</p>
                      <input
                        className="input"
                        id="indfi-4"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">EMAIL</p>
                      <input
                        className="input"
                        id="ipmgh-6"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">PHONE NUMBER</p>
                      <input
                        className="input"
                        id="imgis-5"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i-6"
                    >
                      <p className="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </p>
                      <textarea
                        className="textinput"
                        id="i5vyy-6"
                        name="message"
                        placeholder="Please enter your query..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      className="btn3"
                      value="send"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}{" "}
                      {/* Show "Sending..." when loading */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
              id="ifgi"
            >
              <div className="container-box">
                <div className="text-content">
                  <p className="text-blk contactus-head">Contact us</p>
                  <p className="text-blk contactus-subhead">
                    Feel free to contact us and we will get back to you as soon
                    as we can.
                  </p>
                </div>
                <div className="workik-contact-bigbox">
                  <div className="workik-contact-box">
                    <div className="phone text-box">
                      <img
                        className="contact-svg"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                      />
                      <a
                        href="https://wa.me/923426547411?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in%20learning%20more%20about%20the%20courses%20offered%20by%20Online%20Quran%20Scholars.%20Can%20you%20please%20provide%20me%20with%20more%20details?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +92 342 65474111
                      </a>
                    </div>
                    <div className="address text-box">
                      <img
                        className="contact-svg"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                      />
                      <a href="mailto:onlinequranscholars1@gmail.com?subject= Inquiry About Quran Courses&body= Assalam o Alaikum! I am interested in learning more about the courses offered by Online Quran Scholars. Could you please provide me with more details on the available programs and how to enroll?">
                        onlinequranscholars1@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="social-media-links">
                    {/* <a href="">
                      <img
                        className="social-svg"
                        id="ib9ve"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                      />
                    </a> */}

                    <a
                      target="_blank"
                      href="https://www.facebook.com/IslamTheOnlyReligionForAll?mibextid=ZbWKwL"
                    >
                      <img
                        className="social-svg"
                        id="ie9fx"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
