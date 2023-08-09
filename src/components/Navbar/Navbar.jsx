/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import NationalFlagOfEgypt from "../../assets/National Flag Of Egypt.svg";
import Moon from "../../assets/fi-rr-moon.svg";
import Logo from "../../assets/Logo.svg";

import "./Navbar.css";

const Navbar = ({ isHeroHide }) => {
    const [showNav, setShowNav] = useState(false);

    const darkMoodHandler = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <nav
            className="padding-x"
            style={
                isHeroHide ? { position: "fixed", paddingBlock: "0.8rem" } : {}
            }
        >
            <div className="nav-content">
                <div className="nav-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <button
                    className="nav-hamburger"
                    onClick={() => {
                        setShowNav(true);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`nav-overlay ${showNav ? "nav-smile-show" : ""}`}
                >
                    <button
                        className="nav-close"
                        onClick={() => {
                            setShowNav(false);
                        }}
                    >
                        X
                    </button>

                    <ul className="nav-smile-links">
                        <li>
                            <a href="#home">الرئيسية</a>
                        </li>
                        <li>
                            <a href="#services">خدمانتا</a>
                        </li>
                        <li>
                            <a href="#about">من نحن</a>
                        </li>
                        <li>
                            <a href="#partners">شركائنا</a>
                        </li>
                        <li>
                            <a href="#team">فريق العمل</a>
                        </li>
                    </ul>
                    <div className="nav-smile-btns">
                        <button className="btn-lang">
                            <img src={NationalFlagOfEgypt} /> اللغة العربية
                        </button>

                        <button
                            className="btn-darkMode"
                            onClick={darkMoodHandler}
                        >
                            <img src={Moon} />
                        </button>
                    </div>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#home">الرئيسية</a>
                    </li>
                    <li>
                        <a href="#services">خدمانتا</a>
                    </li>
                    <li>
                        <a href="#about">من نحن</a>
                    </li>
                    <li>
                        <a href="#partners">شركائنا</a>
                    </li>
                    <li>
                        <a href="#team">فريق العمل</a>
                    </li>
                </ul>
                <div className="nav-btns">
                    <button className="btn-lang">
                        <img src={NationalFlagOfEgypt} /> اللغة العربية
                    </button>

                    <button className="btn-darkMode" onClick={darkMoodHandler}>
                        <img src={Moon} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
