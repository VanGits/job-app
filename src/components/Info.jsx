import React, { useEffect } from "react";
import "../styles/Info.css";
import { FaMoneyCheck } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const placeHolderArr = new Array(3).fill("");

  const placeholders = placeHolderArr.map((placeholder, index) => (
    <div className="placeholder-wrapper">
      <div className="placeholder" key={index}>
        <FaMoneyCheck className="check" key={index} />
      </div>
      <h4>Lorem Ipsum</h4>
    </div>
  ));

  return (
    <div className="Info">
      <div className="info-content" data-aos="fade-up">
        <span>
          <h1>Lorem ipsum dolor</h1>
          <h4>
            sit amet consectetur adipisicing elit. Distinctio, ratione eveniet.
          </h4>
        </span>
        <div className="placeholder-container">{placeholders}</div>
        <div className="placeholder-container">{placeholders}</div>
      </div>
    </div>
  );
};

export default Info;
