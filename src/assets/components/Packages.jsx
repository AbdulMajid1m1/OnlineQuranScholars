// import React from "react";
import { Helmet } from "react-helmet";

const Packages = () => {
  const whatsappLink = `https://wa.me/923175568197?text=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20your%20packages.`;

  return (
    <>
      <Helmet>
        <title>Our Packages - Online Quran Scholars</title>
        <meta
          name="description"
          content="Check out our Quranic lesson packages ranging from 2 to 5 lessons per week. Personalized and flexible pricing with Quran recitation, Tajweed, and more."
        />
        <meta
          name="keywords"
          content="Quran lessons, Quran packages, Noorani Qaida, Tajweed, Quran memorization, Islamic studies, Quran classes"
        />
      </Helmet>

      <div className="packages">
        <h1>Our Packages</h1>
        <div className="pack">
          <section id="price">
            <div className="container">
              <div className="row">
                {/* Package 1 */}
                <div className="col-md-3">
                  <div className="single-price">
                    <div className="price-head">
                      <h2>2 lessons a week</h2>
                      <p>
                        30£/<span>Month</span>
                      </p>
                    </div>
                    <div className="price-content">
                      <ul>
                        <li>
                          <i className="fa fa-check-circle"></i> Noorani Qaida
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Tajweed al-Quran
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Reading & Recitation
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Salah (Prayer)
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Unlimited Support
                        </li>
                        <li>
                          <i className="fa fa-times-circle"></i> Seerah & Islamic Studies
                        </li>
                        <li>
                          <i className="fa fa-times-circle"></i> Quran Memorization
                        </li>
                        <li>
                          <i className="fa fa-times-circle"></i> Full learning program for kids or adults
                        </li>
                      </ul>
                    </div>
                    <div className="price-button">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-btn" aria-label="Call Now for 2 Lessons Package">
                        Call Now
                      </a>
                    </div>
                    <h6>All prices are in GBP</h6>
                    <p>** Discounts, special pricing, and volume discounts are available. Please contact us to learn more.</p>
                  </div>
                </div>

                {/* Package 2 */}
                <div className="col-md-3">
                  <div className="single-price">
                    <div className="price-head">
                      <h2>3 lessons a week</h2>
                      <p>
                        40£/<span>Month</span>
                      </p>
                    </div>
                    <div className="price-content">
                      <ul>
                        <li>
                          <i className="fa fa-check-circle"></i> Noorani Qaida
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Tajweed al-Quran
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Reading & Recitation
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Salah (Prayer)
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Unlimited Support
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Memorization
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Seerah & Islamic Studies
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Full learning program for kids or adults
                        </li>
                      </ul>
                    </div>
                    <div className="price-button">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-btn" aria-label="Call Now for 3 Lessons Package">
                        Call Now
                      </a>
                    </div>
                    <h6>All prices are in GBP</h6>
                    <p>** Discounts, special pricing, and volume discounts are available. Please contact us to learn more.</p>
                  </div>
                </div>

                {/* Package 3 */}
                <div className="col-md-3">
                  <div className="single-price">
                    <div className="price-head">
                      <h2>4 lessons a week</h2>
                      <p>
                        45£/<span>Month</span>
                      </p>
                    </div>
                    <div className="price-content">
                      <ul>
                        <li>
                          <i className="fa fa-check-circle"></i> Noorani Qaida
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Tajweed al-Quran
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Reading & Recitation
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Salah (Prayer)
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Unlimited Support
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Memorization
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Seerah & Islamic Studies
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Full learning program for kids or adults
                        </li>
                      </ul>
                    </div>
                    <div className="price-button">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-btn" aria-label="Call Now for 4 Lessons Package">
                        Call Now
                      </a>
                    </div>
                    <h6>All prices are in GBP</h6>
                    <p>** Discounts, special pricing, and volume discounts are available. Please contact us to learn more.</p>
                  </div>
                </div>

                {/* Package 4 */}
                <div className="col-md-3">
                  <div className="single-price">
                    <div className="price-head">
                      <h2>5 lessons a week</h2>
                      <p>
                        50£/<span>Month</span>
                      </p>
                    </div>
                    <div className="price-content">
                      <ul>
                        <li>
                          <i className="fa fa-check-circle"></i> Noorani Qaida
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Tajweed al-Quran
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Reading & Recitation
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Salah (Prayer)
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Unlimited Support
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Quran Memorization
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Seerah & Islamic Studies
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i> Full learning program for kids or adults
                        </li>
                      </ul>
                    </div>
                    <div className="price-button">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-btn" aria-label="Call Now for 5 Lessons Package">
                        Call Now
                      </a>
                    </div>
                    <h6>All prices are in GBP</h6>
                    <p>** Discounts, special pricing, and volume discounts are available. Please contact us to learn more.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Packages;
