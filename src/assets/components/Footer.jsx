// import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Contact and Reach Us - Online Quran Academy</title>
        <meta
          name="description"
          content="Contact Online Quran Scholars for personalized Quran lessons. Reach us via phone, email, live chat, or request a free trial for our Quran courses."
        />
        <meta
          name="keywords"
          content="Contact Online Quran Scholars, Quran lessons, Quran courses, free trial Quran courses, Quran teaching"
        />
        <meta name="author" content="Online Quran Scholars" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact and Reach Us - Online Quran Academy"
        />
        <meta
          property="og:description"
          content="Get in touch with Online Quran Scholars to learn more about personalized Quran lessons for individuals and families."
        />
        <meta property="og:image" content="https://yourwebsite.com/path/to/footer-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/contact" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact and Reach Us - Online Quran Academy" />
        <meta
          property="twitter:description"
          content="Contact Online Quran Scholars via phone, email, or live chat. Request a free trial of our Quran courses today!"
        />
        <meta property="twitter:image" content="https://yourwebsite.com/path/to/footer-image.jpg" />
      </Helmet>

      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  The first command revealed to Prophet Muhammad (peace be upon
                  him) through Angel Gabriel was &quot;Iqra&quot; (Read). At
                  Online Quran Scholars, we offer personalized Quran lessons via
                  one-on-one online video sessions. Learn individually or with
                  family members at your convenience.
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Contact</h6>
                <ul className="footer-links">
                  <li>
                    <a
                      href="https://wa.me/923426547411?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in%20learning%20more%20about%20the%20courses%20offered%20by%20Online%20Quran%20Scholars.%20Can%20you%20please%20provide%20me%20with%20more%20details?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +92 342 65474111
                    </a>
                  </li>
                  <li>
                    <a href="mailto:onlinequranscholars1@gmail.com?subject= Inquiry About Quran Courses&body= Assalam o Alaikum! I am interested in learning more about the courses offered by Online Quran Scholars. Could you please provide me with more details on the available programs and how to enroll?">
                      onlinequranscholars1@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/923426547411?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in%20learning%20more%20about%20the%20courses%20offered%20by%20Online%20Quran%20Scholars.%20Can%20you%20please%20provide%20me%20with%20more%20details?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/923426547411?text=Assalam%20O%20Alaikum!%20I'm%20interested%20in%20a%20free%20trial%20of%20your%20Quran%20courses.%20Could%20you%20please%20guide%20me%20on%20how%20to%20get%20started?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request For Free Trial
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Reach Us</h6>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                      <li>
                        <a
                          className="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/IslamTheOnlyReligionForAll?mibextid=ZbWKwL"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                          <span className="sr-only">Facebook</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
