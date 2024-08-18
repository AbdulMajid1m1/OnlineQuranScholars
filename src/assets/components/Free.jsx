import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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
    <div className="homeForm">
      <div className="homeLeft">
        <span>Request a Free Trial Class</span>
        <p>
          Discover the difference of personalized Quranic education with our
          free trial class at Online Quran Scholars! Our unique online video
          sessions offer one-on-one instruction, allowing you to learn the Quran
          individually or with your family at your convenience.
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
          <input type="text" placeholder="Name" required name="user_name" />
          <input type="email" placeholder="Email" required name="user_email" />
          <input type="number" placeholder="Phone" required name="user_phone" />
          <button
            className="btn3"
            value="send"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Free;
