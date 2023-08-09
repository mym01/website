/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import "./Technology.css";

const data = [
    "Flutter",
    "ReactJs",
    "NodeJs",
    ".Net",
    "Cyber security",
    "Tester",
];

const flutterIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
    >
        <path
            d="M18.5335 3.18008L5.2002 16.5001L9.3202 20.6201L12.9335 17.0201L26.7869 3.16675L18.5335 3.18008ZM19.6269 22.6467L26.8135 15.4734H18.9069C18.7602 15.4734 18.5602 15.4734 18.4535 15.5667L15.4802 18.5401L11.3602 22.6334L15.4802 26.7668L18.3469 29.6334C18.4402 29.7267 18.5335 29.8601 18.6935 29.8334H26.7869L19.6269 22.6467Z"
            className="technology-card-icon"
        />
    </svg>
);

const Card = ({ number, heading }) => {
    return (
        <div className={`technology-card`}>
            <span className="technology-card-number">{number}</span>
            <h3 className="technology-card-heading">{heading}</h3>
        </div>
    );
};

const Technology = () => {
    return (
        <section className="technology padding-x bg-blue margin-bottom">
            <h2 className="section-title-white">التقنيات الذي نستخدمها</h2>
            <div className="technology-cards">
                {data.map((item, index) => {
                    return (
                        <Card key={index} number={index + 1} heading={item} />
                    );
                })}
            </div>
        </section>
    );
};

export default Technology;
