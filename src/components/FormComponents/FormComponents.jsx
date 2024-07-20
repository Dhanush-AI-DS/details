
import React, { useState } from "react";
import "./FormComponents.css";
import Photo from "./image.jpg";

const FormComponents = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: Dhanush S</h2>
      <p className="details">Registration No: 212221230020</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Department: Artificial Intelligence and Data Science</p>
          <p>Email ID: s.dhanush8103@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default FormComponents;
