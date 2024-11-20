import React, { useState } from "react";
import { faqsData } from '../../data/faqsData';
import './Faqs.css';
import faq from "../../assets/faq.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#ece7ee", padding: "20px" }}>
      <h2 className="stroke-text-main1" style={{ textAlign: 'center', fontSize: '40px' }}>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-container">
        {/* FAQ Section */}
        <div className="faq-section">
       
          {faqsData.map((item, index) => (
            <div key={item.id} className="faq-item">
              <div
                className="faq-question" 
                onClick={() => toggleQuestion(index)}
              >
                <span>{index + 1}.</span>
                <h3>{item.question}</h3>
                <span className="anscollpse">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src={faq} /* Replace with your image URL */
            alt="FAQ Related"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
