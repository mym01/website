/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "./Team.css";
import FemaleAvatar from "../../assets/avataaars.png";
import MaleAvatar from "../../assets/avataaars_man.png";

import teamData from "../../data/team.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Loading from "./../Ui/Loading/Loading";

const GithubIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        className="github-icon"
    >
        <g clipPath="url(#clip0_91_655)">
            <path
                d="M20.4975 0C9.45501 0 0.500012 8.99 0.500012 20.08C0.4955 24.2889 1.8138 28.3927 4.26859 31.8116C6.72338 35.2304 10.1905 37.7914 14.18 39.1325C15.18 39.3175 15.545 38.6975 15.545 38.165C15.545 37.6875 15.5275 36.425 15.5175 34.75C9.95501 35.9625 8.78001 32.0575 8.78001 32.0575C7.87251 29.7375 6.56001 29.12 6.56001 29.12C4.74251 27.875 6.69501 27.9 6.69501 27.9C8.70251 28.0425 9.75751 29.97 9.75751 29.97C11.5425 33.0375 14.44 32.1525 15.58 31.6375C15.76 30.34 16.2775 29.455 16.85 28.9525C12.41 28.445 7.74001 26.7225 7.74001 19.03C7.74001 16.8375 8.52001 15.045 9.80001 13.64C9.59251 13.1325 8.90751 11.09 9.99501 8.3275C9.99501 8.3275 11.675 7.7875 15.495 10.385C17.1269 9.93903 18.8108 9.71204 20.5025 9.71C22.1943 9.71336 23.8782 9.94118 25.51 10.3875C29.3275 7.79 31.005 8.33 31.005 8.33C32.095 11.095 31.41 13.135 31.205 13.6425C32.4875 15.0475 33.26 16.84 33.26 19.0325C33.26 26.745 28.585 28.4425 24.13 28.94C24.8475 29.56 25.4875 30.785 25.4875 32.6575C25.4875 35.3425 25.4625 37.5075 25.4625 38.165C25.4625 38.7025 25.8225 39.3275 26.8375 39.13C30.8231 37.7857 34.286 35.2238 36.7373 31.8058C39.1887 28.3877 40.5048 24.2862 40.5 20.08C40.5 8.99 31.545 0 20.4975 0Z"
                fill="black"
            />
        </g>
        <defs>
            <clipPath id="clip0_91_655">
                <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

const LinkedinIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
    >
        <g clipPath="url(#clip0_91_647)">
            <path
                d="M0.5 20C0.5 8.95417 9.45417 0 20.5 0C31.5458 0 40.5 8.95417 40.5 20C40.5 31.0458 31.5458 40 20.5 40C9.45417 40 0.5 31.0458 0.5 20Z"
                fill="#0077B5"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9322 12.3525C14.9322 13.66 13.948 14.7058 12.3672 14.7058H12.3388C10.8172 14.7058 9.83301 13.66 9.83301 12.3525C9.83301 11.0167 10.8472 10 12.3972 10C13.9472 10 14.903 11.0167 14.9322 12.3525ZM14.6338 16.565V30.1833H10.1005V16.565H14.6338ZM30.9788 30.1833V22.375C30.9788 18.1917 28.743 16.245 25.7605 16.245C23.3547 16.245 22.2772 17.5667 21.6755 18.4942V16.565H17.1422C17.2022 17.8433 17.1422 30.1833 17.1422 30.1833H21.6755V22.5775C21.6755 22.1708 21.7047 21.765 21.8247 21.4733C22.1522 20.66 22.898 19.8183 24.1497 19.8183C25.7913 19.8183 26.4472 21.0675 26.4472 22.8975V30.1833H30.9788Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_91_647">
                <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

const BehanceIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
    >
        <path
            fill="#1769FF"
            d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"
        />
    </svg>
);

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};

const Card = ({ item }) => {
    return (
        <div className="team-card">
            <div className="team-card__img">
                <img
                    src={
                        item.image !== ""
                            ? item.image
                            : item.gender === "female"
                            ? FemaleAvatar
                            : MaleAvatar
                    }
                    alt={item.name}
                    loading="lazy"
                />
            </div>

            <h3 className="team-card__name" title={item.name}>
                {item.name}
            </h3>

            <p className="team-card__job">{item.track}</p>

            <div className="team-card__social">
                {item.github !== "" ? (
                    <a
                        href={item.github}
                        title="Github"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {GithubIcon}
                    </a>
                ) : (
                    ""
                )}

                {item.behance !== "" ? (
                    <a
                        href={item.behance}
                        title="behance"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {BehanceIcon}
                    </a>
                ) : (
                    ""
                )}

                {item.linkedin !== "" ? (
                    <a
                        href={item.linkedin}
                        title="Linkedin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {LinkedinIcon}
                    </a>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

const Team = () => {
    const [btn, setBtn] = useState("all");

    const [data, setData] = useState([]);

    const [content, setContent] = useState();

    const btnHandler = (e) => {
        setBtn(e.target.dataset.value);
    };

    useEffect(() => {
        setData([]);
        if (btn === "all") {
            setData(teamData);
        } else {
            setData(teamData.filter((item) => item.category.includes(btn)));
        }
    }, [btn]);

    useEffect(() => {
        setContent();
        if (data.length <= 6) {
            setContent(
                <div className="team-cards__container">
                    {data.map((item) => {
                        return <Card key={item.id} item={item} />;
                    })}
                </div>
            );
        }

        if (data.length === 0) {
            // console.log("no data");
            setContent(
                <div className="team-cards__container">
                    <h3 className="no-data">No Members here</h3>
                </div>
            );
        }

        if (data.length > 6) {
            const arraySlide = [];

            for (let i = 0; i < data.length; i += 6) {
                arraySlide.push(data.slice(i, i + 6));
            }
            // console.log(arraySlide);

            setContent(
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                    onUpdate={(swiper) => swiper.slideTo(0, 200, false)}
                >
                    {arraySlide.map((items, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="team-cards__container">
                                    {items.map((item) => {
                                        return (
                                            <Card key={item.id} item={item} />
                                        );
                                    })}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            );
        }
    }, [data]);

    return (
        <section id="team" className="team padding-x margin-bottom">
            <h2 className="section-title">فريق العمل</h2>

            <div className="team-btns__container">
                <button
                    className={`team-btns__btn ${
                        "all" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="all"
                    onClick={btnHandler}
                >
                    الكل
                </button>
                <button
                    className={`team-btns__btn ${
                        "front-end" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="front-end"
                    onClick={btnHandler}
                >
                    مطوري الواجهة الامامية
                </button>
                <button
                    className={`team-btns__btn ${
                        "back-end" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="back-end"
                    onClick={btnHandler}
                >
                    مطوري الواجهة الخلفية
                </button>
                <button
                    className={`team-btns__btn ${
                        "mobile" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="mobile"
                    onClick={btnHandler}
                >
                    مطوري تطبيقات الهاتف
                </button>
                <button
                    className={`team-btns__btn ${
                        "ui" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="ui"
                    onClick={btnHandler}
                >
                    مصممي الواجهات
                </button>
                <button
                    className={`team-btns__btn ${
                        "manger" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="manger"
                    onClick={btnHandler}
                >
                    المدراء
                </button>

                <button
                    className={`team-btns__btn ${
                        "graphic" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="graphic"
                    onClick={btnHandler}
                >
                    مصممي الجرافيك
                </button>
                <button
                    className={`team-btns__btn ${
                        "other" === btn ? "team-btns__btn--active" : ""
                    }`}
                    data-value="other"
                    onClick={btnHandler}
                >
                    اخرون
                </button>
            </div>

            {content}

            {data.length !== 0 && <Loading />}
        </section>
    );
};

export default Team;
