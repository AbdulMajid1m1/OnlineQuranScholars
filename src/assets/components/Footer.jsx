// import React from "react";

const Footer = () => {
  return (
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
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923426547411?text=Assalam%20O%20Alaikum!%20I'm%20interested%20in%20a%20free%20trial%20of%20your%20Quran%20courses.%20Could%20you%20please%20guide%20me%20on%20how%20to%20get%20started?"
                    target="_blank"
                  >
                    Request For Free Trial
                  </a>
                </li>
                {/* <li>
                  <a href="http://scanfcode.com/category/android/">
                    Download Free Books
                  </a>
                </li> */}
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
                        href="https://www.facebook.com/IslamTheOnlyReligionForAll?mibextid=ZbWKwL"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="dribbble" href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
