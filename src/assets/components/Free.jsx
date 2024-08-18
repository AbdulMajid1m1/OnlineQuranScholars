import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Free = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gz5ggwq",
        "template_0fc1pot",
        form.current,
        "rTLUJi_Zh-yxnczNL"
      )
      .then(
        () => {
          Swal.fire({
            title: "Good job!",
            text: "Submitted successfully!",
            icon: "success",
          });
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Failed!",
            text: "Cannot submit!",
            icon: "error",
          });
        }
      )
      .finally(() => {
        setLoading(false); // Set loading to false after submission completes
      });
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Free Trial Class - Online Quran Academy</title>
        <meta
          name="description"
          content="Request a free trial class at Online Quran Scholars and experience personalized Quranic education through our one-on-one online video sessions."
        />
        <meta
          name="keywords"
          content="Free Quran class, Quran trial class, online Quran lessons, personalized Quran learning, Quran classes for kids, free Quranic education"
        />
        <meta name="author" content="Online Quran Scholars" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Free Trial Class - Online Quran Academy"
        />
        <meta
          property="og:description"
          content="Join a free trial Quran class at Online Quran Scholars. Learn the Quran online with personalized, one-on-one lessons tailored to your needs."
        />
        <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/free-trial" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free Trial Class - Online Quran Academy" />
        <meta
          property="twitter:description"
          content="Sign up for a free Quran trial class at Online Quran Scholars. Experience our personalized Quran lessons through online video sessions."
        />
        <meta property="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />
      </Helmet>

      <div className="homeForm">
        <div className="homeLeft">
          <span>Request a Free Trial Class</span>
          <p>
            Discover the difference of personalized Quranic education with our
            free trial class at Online Quran Scholars! Our unique online video
            sessions offer one-on-one instruction, allowing you to learn the
            Quran individually or with your family at your convenience.
            <br />
            Utilizing advanced multimedia technology, we provide real-time
            feedback from our expert instructors to enhance your learning
            experience. Our dedicated approach ensures focused, effective
            teaching, enabling you to achieve success in a shorter time frame.
            <br />
            We offer 24/7 access to top-tier Quran and Arabic education globally.
            Choose from flexible timings to fit your schedule, whether you need
            daily or weekly lessons. Our tailored schedules accommodate your
            needs, making it easy to study the Quran online, no matter how busy
            you are.
            <br />
            Take the first step towards a profound Quranic journey by requesting
            your free trial class today!
          </p>
        </div>
        <div className="homeRight">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              required
              name="user_name"
              aria-label="Name"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="user_email"
              aria-label="Email"
            />
            <input
              type="number"
              placeholder="Phone"
              required
              name="user_phone"
              aria-label="Phone"
            />
            <button
              className="btn3"
              value="send"
              type="submit"
              disabled={loading}
              aria-label="Submit"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Free;
