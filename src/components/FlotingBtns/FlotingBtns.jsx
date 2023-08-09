/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";

import WhatsApp from "../../assets/whatsapp.png";
import Top from "../../assets/top.png";

import "./FlotingBtns.css";

const FlotingBtns = ({ isHeroHide }) => {
    const topBtnHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            <a
                className={`btn-floting btn-floting--whatsapp ${
                    isHeroHide ? "btn-floting--show" : ""
                }`}
                href="https://wa.me/201126765371"
                target="_blank"
                rel="noreferrer"
            >
                <img src={WhatsApp} alt="whatsapp" />
            </a>
            <button
                className={`btn-floting btn-floting--top ${
                    isHeroHide ? "btn-floting--show" : ""
                }`}
                onClick={topBtnHandler}
            >
                <img src={Top} alt="top" />
            </button>
        </Fragment>
    );
};

export default FlotingBtns;
