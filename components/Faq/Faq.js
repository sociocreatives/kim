import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from 'next/image'

function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="faq-photo-one">
      <div className="faq-photo"></div>
        <div className="faq">
          <div className="FaqHeader" data-aos="fade-up">Frequently asked questions<div></div></div>
            <section className="FaqContainer" data-aos="zoom-in">
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <div className="AccordionSection">
                  {Data.map((item, index) => {
                    return (
                      <>
                        <div className="Wrap" onClick={() => toggle(index)} key={index} data-aos="zoom-in">
                          <h4>{item.title}</h4>
                          <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                        </div>
                        {clicked === index ? (
                          <div className="Dropdown" data-aos="fade-up">
                            <p>{item.body}</p>
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>
              </IconContext.Provider>
              </section>
        </div>
      
    </div>
  );
}

export default Faq;
