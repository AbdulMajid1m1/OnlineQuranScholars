import { useRef } from "react";
import Packages from "./Packages";
import { useNavigate } from "react-router-dom";
import Courses from "./Courses";
import Free from "./Free";

// SEO optimized images
import topImg from "../images/top-img.png";

// React Helmet for SEO meta tags
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();
  const freeSectionRef = useRef(null);

  const handleRequestDemoClick = () => {
    if (freeSectionRef.current) {
      freeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Online Quran Academy for Kids - Quran Learning & Classes</title>
        <meta
          name="description"
          content="Join our Online Quran Academy for Kids. We offer Quran classes with Tajweed and Tarteel for children. Start your child's Quranic journey today!"
        />
        <meta
          name="keywords"
          content="Online Quran Academy, Quran Classes for Kids, Learn Quran Online for Children, Quran Teaching for Kids, Online Quran Tutor"
        />
        <meta name="author" content="Online Quran Scholars" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Quran Academy for Kids - Quran Learning & Classes"
        />
        <meta
          property="og:description"
          content="Enroll in our Quranic lessons with expert scholars. Tailored Quran classes for children."
        />
        <meta property="og:image" content={topImg} />
        <meta property="og:url" content="https://www.yourwebsite.com/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Online Quran Academy for Kids" />
        <meta
          property="twitter:description"
          content="Learn Quran Online with our expert Quran tutors. Start your Quranic journey with tailored lessons for children."
        />
        <meta property="twitter:image" content={topImg} />
      </Helmet>

      <div className="home">
        <div className="home_left">
          <img
            src={topImg}
            alt="Online Quran Classes for Kids"
            height="300"
          />
        </div>
        <div className="home_right">
          <h2>قال النبي صلى الله عليه وسلم</h2>
          <h1>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</h1>
          <p>
            Seeking religious knowledge is an <br /> obligation upon every
            Muslim.
          </p>
          <div className="buttons">
            <button onClick={() => navigate("/packages")} className="btn1">
              OUR PACKAGES
            </button>

            <button onClick={handleRequestDemoClick} className="btn2">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>

      <div className="homeSection">
        <div className="sectionLeft">
          <p>
            Start to learn in <br />
            three easy steps
          </p>
          <span>SCHEDULE DEMO CLASS TODAY</span>
        </div>
        <div className="sectionRight">
          <div className="box">
            <img
              src="/src/assets/images/google-forms.png"
              alt="Fill Contact Form for Quran Classes"
            />
            <div className="text">
              <h1>One.</h1>
              <p>Fill Contact form or Call at our numbers.</p>
            </div>
          </div>
          <div className="box">
            <img
              src="/src/assets/images/presentation.png"
              alt="Get Free Quran Trial Classes"
            />
            <div className="text">
              <h1>Two.</h1>
              <p>Get free trial classes at your desired time.</p>
            </div>
          </div>
          <div className="box">
            <img
              src="/src/assets/images/students-cap.png"
              alt="Sign Up for Quran Learning"
            />
            <div className="text">
              <h1>Three.</h1>
              <p>Sign Up if you like & start learning Quran.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <h1>
          Start Your Child&apos;s Quranic Journey with Online Quran Scholars
        </h1>
        <p>
          At Online Quran Scholars, we understand that every child is unique,
          which is why we believe in starting their Quranic journey early, with
          a personalized approach that nurtures both their spiritual and
          emotional well-being. Our academy combines the expertise of Quranic
          scholars and experienced psychologists to create a learning experience
          that is perfectly tailored to your child&apos;s personality and needs.
          Through our comprehensive courses, rooted in Tajweed and Tarteel, your
          child will be guided to deeply connect with the words of Allah,
          gaining the strength and wisdom needed to navigate life’s challenges.
          Our psychologists work alongside our scholars to ensure that the
          teaching methods align with your child’s individual personality,
          making the learning process more effective and enjoyable. Parents can
          begin this spiritual and psychological journey from birth by
          introducing their child to the Quran.
        </p>
      </div>

      <Packages />
      <div ref={freeSectionRef}>
        <Free />
      </div>
      <Courses />
    </>
  );
};

export default Home;
