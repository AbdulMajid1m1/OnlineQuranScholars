// import React from "react";

import Question from "./Questions";
const Courses = () => {
  return (
    <>
      <div className="courses">
        <h1 style={{ textAlign: "center" }}>Popular Courses</h1>
        <div className="cards">
          <div className="card1">
            <img src="/assets/images/course-img1.png" alt="" height="300" />
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
            <img src="/assets/images/course-img2.png" alt="" height="300" />
            <h1>تجويد القرآن</h1>
            <h2>RULES OF PRONOUNCIATION</h2>
            <p>
              Tajweed, or Tajwīd, encompasses the rules for the accurate
              pronunciation of Quranic Arabic. This course provides
              comprehensive instruction, covering both basic and advanced
              Tajweed principles.
            </p>
          </div>
          <div className="card3">
            <img src="/assets/images/course-img3.png" alt="" height="300" />
            <h1>حفظ القرآن</h1>
            <h2>AND RECITATION</h2>
            <br />
            <p>
              Our teachers guide and teach and their students from the beginning
              to “khatm-al-Quran” ayah by ayah during their one-on-one reading
              and recitation lessons.
              <br />
            </p>
          </div>
          <div className="card4">
            <img src="/assets/images/course-img6.png" alt="" height="300" />
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
