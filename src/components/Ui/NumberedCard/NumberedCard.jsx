/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./NumberedCard.css";

const NumberedCard = ({ className, number, icon, heading, text }) => {
    return (
        <div className={`${className} numbered-card`}>
            <span className="numbered-card-number">{number}</span>
            <div className="numbered-card-icon">{icon}</div>
            <h3 className="numbered-card-heading">{heading}</h3>
            <p className="numbered-card-text">{text}</p>
        </div>
    );
};

export default NumberedCard;
