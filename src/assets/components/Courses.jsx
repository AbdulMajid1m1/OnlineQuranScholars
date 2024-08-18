// import React from "react";
import Question from "./Questions";
import { Helmet } from "react-helmet";

const Courses = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Popular Quran Courses - Online Quran Academy</title>
        <meta
          name="description"
          content="Explore our popular Quran courses including Noorani Qaida, Tajweed, Quran Memorization, and Tafseer & Translation. Enroll in one-on-one Quran lessons."
        />
        <meta
          name="keywords"
          content="Quran courses, Noorani Qaida, Tajweed, Quran Memorization, Tafseer and Translation, Learn Quran Online, Quran Recitation"
        />
        <meta name="author" content="Online Quran Scholars" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Popular Quran Courses - Online Quran Academy"
        />
        <meta
          property="og:description"
          content="Join our online Quran courses covering Noorani Qaida, Tajweed, Quran Memorization, and Tafseer & Translation. Learn Quran online with personalized lessons."
        />
        <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/courses" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Popular Quran Courses" />
        <meta
          property="twitter:description"
          content="Enroll in our comprehensive Quran courses: Noorani Qaida, Tajweed, Quran Memorization, and Tafseer & Translation."
        />
        <meta property="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />
      </Helmet>

      <div className="courses">
        <h1 style={{ textAlign: "center" }}>Popular Quran Courses</h1>
        <div className="cards">
          <div className="card1">
            <img
              src="../images/course-img1.png"
              alt="Noorani Qaida - Learn Basic Arabic Alphabet"
              height="300"
            />
            <h1>نوراني القاعدة</h1>
            <h2>BASIC & ARABIC ALPHABET</h2>
            <p>
              &quot;Al-Qaida Al-Nooraniya&quot; is an essential book for
              beginners learning Quranic Arabic. It serves as the foundational
              text from which students start their journey and progress to more
              advanced courses.
            </p>
          </div>
          <div className="card2">
            <img
              src="../images/course-img2.png"
              alt="Tajweed - Learn Rules of Quranic Pronunciation"
              height="300"
            />
            <h1>تجويد القرآن</h1>
            <h2>RULES OF PRONUNCIATION</h2>
            <p>
              Tajweed, or Tajwīd, encompasses the rules for the accurate
              pronunciation of Quranic Arabic. This course provides
              comprehensive instruction, covering both basic and advanced
              Tajweed principles.
            </p>
          </div>
          <div className="card3">
            <img
              src="../images/course-img3.png"
              alt="Quran Memorization and Recitation Course"
              height="300"
            />
            <h1>حفظ القرآن</h1>
            <h2>AND RECITATION</h2>
            <p>
              Our teachers guide students from the beginning to
              “khatm-al-Quran” ayah by ayah during their one-on-one reading and
              recitation lessons.
            </p>
          </div>
          <div className="card4">
            <img
              src="../images/course-img6.png"
              alt="Tafseer and Translation of the Quran"
              height="300"
            />
            <h1>التفسير والترجمة</h1>
            <h2>TAFSEER AND TRANSLATION</h2>
            <p>
              Our teachers guide and instruct students through every step of the
              Tafseer and Translation course, from the initial verse to
              “Khatm-al-Quran.” Each student receives personalized one-on-one
              sessions, ensuring a thorough understanding of the Quranic text
              and its meanings.
            </p>
          </div>
        </div>
        <Question />
      </div>
    </>
  );
};

export default Courses;
