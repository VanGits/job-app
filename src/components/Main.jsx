import React from "react";
import "../styles/Main.css";
import interview from "../assets/interview.svg";
import { AiOutlineMail } from "react-icons/ai";
import waves from "../assets/wavesNegative.svg";

const Main = () => {
  return (
    <div className="Main">
      <div className="main-content">
        <div className="main-texts">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <button className="button sign-up">
            <AiOutlineMail className="button-email-logo" />
            Sign up with email
          </button>
        </div>

        <img src={interview} alt="" />
      </div>
      <div className="wave-wrapper">
        <img src={waves} alt="" />
      </div>
    </div>
  );
};

export default Main;
