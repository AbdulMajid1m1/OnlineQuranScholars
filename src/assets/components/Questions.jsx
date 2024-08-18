import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why Choose Online Quran Tutors?",
      answer:
        "At Online Quran Tutors, mastering Arabic and perfecting Arabic phonetics are central to our teaching approach. Our dynamic and adaptive learning process ensures that we continually adjust materials and methodologies to meet each student's unique progress and needs.",
    },
    {
      question: "Are your teachers available for students of all genders?",
      answer:
        "Yes, our qualified teachers are available for students of all genders, ensuring a comfortable and respectful learning environment for everyone.",
    },
    {
      question:
        "What makes Online Quran Scholars unique compared to other Quranic education programs?",
      answer:
        "At Online Quran Scholars, we stand out by combining expert Quranic scholars with experienced psychologists to provide a holistic learning experience. Our personalized approach tailors each lesson to your child's unique needs and personality, ensuring both spiritual growth and emotional well-being. Plus, our flexible online format allows students to learn at their own pace, fitting seamlessly into their busy lives.",
    },
    {
      question: "Is Tajwid Complicated?",
      answer:
        "It's perfectly normal for beginners to struggle with recognizing certain words or sounds and to find the tutor's pronunciation challenging. Our tutors provide prompt guidance and training to help students overcome these initial difficulties and master Tajwid effectively.",
    },
    {
      question:
        "What is the Suitable Age to Start Learning with Online Quran Tutors?",
      answer:
        "At Online Quran Tutors, we recognize that each child is unique, and some may initially find online interaction challenging. While there have been success stories with younger students, it is generally more effective to start learning from the age of seven and above. For students under this age, we highly recommend that a parent or guardian accompanies them initially to provide support until they become comfortable with the online learning setup and process.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <div className="questions">
        <div className="questionCont">
          <h1>FAQ&apos;s</h1>
          <div className="queCard">
            <div className="faq">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className="question"
                    onClick={() => toggleAnswer(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                      className="icon"
                      style={{ marginRight: "10px" }}
                    />
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="answer"
                      role="region"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={handleContact} className="btn4">
          Contact Us
        </button>
      </div>
      <Contact />
    </>
  );
};

export default Question;
