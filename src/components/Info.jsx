import React, { useEffect } from "react";
import "../styles/Info.css";
import { FaMoneyCheck } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const placeHolderArr = [1,2,3]

  const placeholders = placeHolderArr.map((placeholder) => (
    <div className="placeholder-wrapper" key={placeholder}>
      <div className="placeholder" key={placeholder}>
        <FaMoneyCheck className="check" key={placeholder} />
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
