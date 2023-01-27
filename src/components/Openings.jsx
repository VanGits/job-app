import React, { useEffect } from "react";
import "../styles/Openings.css";
import waves from "../assets/wavesOpacityFinal.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlArrowRight } from "react-icons/sl";

const Openings = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Openings">
      <div className="wave-wrapper">
        <img src={waves} alt="" />
      </div>
      <div className="openings-content" data-aos="fade-up">
        <h1> Available </h1>
        <h2>employment opportunities</h2>
        <div className="job-openings">
          <div className="job-opening-wrapper">
            <div className="job-opening">
              <h3>Job Opening</h3>
              <p>Place, place</p>
            </div>
            <div className="job-opening-arrow">
              <SlArrowRight className="right-arrow" />
            </div>
          </div>

          <div className="job-opening-wrapper">
            <div className="job-opening">
              <h3>Job Opening</h3>
              <p>Place, place</p>
            </div>
            <div className="job-opening-arrow">
              <SlArrowRight className="right-arrow" />
            </div>
          </div>
          <div className="job-opening-wrapper">
            <div className="job-opening">
              <h3>Job Opening</h3>
              <p>Place, place</p>
            </div>
            <div className="job-opening-arrow">
              <SlArrowRight className="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Openings;
