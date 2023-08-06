/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import WebImage1 from "../../assets/web-1.jpg";
import WebImage2 from "../../assets/web-2.jpg";
import WebImage3 from "../../assets/web-3.jpg";
import WebImage4 from "../../assets/web-4.jpg";
import WebImage6 from "../../assets/web-6.jpg";
import WebImage7 from "../../assets/web-7.png";

import MobileImage1 from "../../assets/mobile-1.jpg";
import MobileImage2 from "../../assets/mobile-2.jpg";
import MobileImage3 from "../../assets/mobile-3.jpg";
import MobileImage4 from "../../assets/mobile-4.jpg";
import MobileImage5 from "../../assets/mobile-5.jpg";
import MobileImage6 from "../../assets/mobile-6.jpg";
import MobileImage7 from "../../assets/mobile-7.jpg";
import MobileImage8 from "../../assets/mobile-8.jpg";
import MobileImage9 from "../../assets/mobile-9.jpg";
import MobileImage10 from "../../assets/mobile-10.jpg";

import UiImage1 from "../../assets/ui-1.jpg";
import UiImage2 from "../../assets/ui-2.jpg";
import UiImage3 from "../../assets/ui-3.jpg";

const projectsData = [
    {
        id: 1,
        type: "web",
        heading: "Web Project",
        image: WebImage1,
    },
    {
        id: 2,
        type: "web",
        heading: "Web Project",
        image: WebImage2,
    },
    {
        id: 3,
        type: "web",
        heading: "Web Project",
        image: WebImage3,
    },
    {
        id: 4,
        type: "web",
        heading: "Web Project",
        image: WebImage4,
    },
    {
        id: 6,
        type: "web",
        heading: "Web Project",
        image: WebImage6,
    },
    {
        id: 7,
        type: "web",
        heading: "Web Project",
        image: WebImage7,
    },
    {
        id: 8,
        type: "ui",
        heading: "Ui Design Project",
        image: UiImage1,
    },
    {
        id: 9,
        type: "ui",
        heading: "Ui Design Project",
        image: UiImage2,
    },
    {
        id: 10,
        type: "ui",
        heading: "Ui Design Project",
        image: UiImage3,
    },
    {
        id: 11,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage1,
    },
    {
        id: 12,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage2,
    },
    {
        id: 13,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage3,
    },
    {
        id: 14,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage4,
    },
    {
        id: 15,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage5,
    },
    {
        id: 16,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage6,
    },
    {
        id: 17,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage7,
    },
    {
        id: 18,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage8,
    },
    {
        id: 19,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage9,
    },
    {
        id: 20,
        type: "mobile",
        heading: "Mobile Project",
        image: MobileImage10,
    },
];

const Card = ({ item }) => {
    return (
        <div className="project__card">
            <img src={item.image} alt={item.heading} />
            <div className="project__card--info">
                <h3>{item.heading}</h3>
            </div>
        </div>
    );
};

const Projects = () => {
    const [btn, setBtn] = useState("all");

    const [data, setData] = useState([]);

    const [content, setContent] = useState();

    const btnHandler = (e) => {
        setBtn(e.target.dataset.value);
    };

    useEffect(() => {
        setData([]);
        if (btn === "all") {
            setData(projectsData);
        } else {
            setData(projectsData.filter((item) => item.type === btn));
        }
    }, [btn]);

    useEffect(() => {
        setContent();

        if (data.length === 0) {
            setContent(
                <div className="projects-cards__container">
                    <h3 className="no-data">No Projects here</h3>
                </div>
            );
        }

        if (data.length > 0) {
            setContent(
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        1860: {
                            slidesPerView: 6,
                        },
                        1400: {
                            slidesPerView: 4.6,
                        },
                        1000: {
                            slidesPerView: 3.2,
                        },
                        800: {
                            slidesPerView: 2.6,
                        },
                        600: {
                            slidesPerView: 1.6,
                        },
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                    // navigation={true}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card item={item} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            );
        }
    }, [data]);

    return (
        <section className="projects padding-x bg-blue margin-bottom">
            <h2 className="section-title-white">
                دعنا نعرفك علي مشاريعنا السابقة
            </h2>
            <p className="section-subtitle-white">
                اكتشف اهم مشاريعنا في السنوات الماضية
            </p>

            <div className="projects-btns__container">
                <button
                    className={`projects-btns__btn ${
                        "all" === btn ? "projects-btns__btn--active" : ""
                    }`}
                    data-value="all"
                    onClick={btnHandler}
                >
                    الكل
                </button>
                <button
                    className={`projects-btns__btn ${
                        "web" === btn ? "projects-btns__btn--active" : ""
                    }`}
                    data-value="web"
                    onClick={btnHandler}
                >
                    تطبيقات الويب
                </button>
                <button
                    className={`projects-btns__btn ${
                        "mobile" === btn ? "projects-btns__btn--active" : ""
                    }`}
                    data-value="mobile"
                    onClick={btnHandler}
                >
                    تطبيقات الهاتف
                </button>
                <button
                    className={`projects-btns__btn ${
                        "ui" === btn ? "projects-btns__btn--active" : ""
                    }`}
                    data-value="ui"
                    onClick={btnHandler}
                >
                    تصاميم الواجهات
                </button>
                <button
                    className={`projects-btns__btn ${
                        "manger" === btn ? "projects-btns__btn--active" : ""
                    }`}
                    data-value="manger"
                    onClick={btnHandler}
                >
                    تصاميم الجرافك
                </button>
            </div>

            {content}
        </section>
    );
};

export default Projects;
