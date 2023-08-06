/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";

import Hand from "../../assets/hand.png";
import NumberedCard from "../Ui/NumberedCard/NumberedCard";

const About = () => {
    const iconBaselineDeveloperMode = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M9.33301 6.66667H22.6663V9.33334H25.333V4C25.333 2.53334 24.133 1.34667 22.6663 1.34667L9.33301 1.33334C7.86634 1.33334 6.66634 2.53334 6.66634 4V9.33334H9.33301V6.66667ZM20.5463 22.12L26.6663 16L20.5463 9.88L18.6663 11.7733L22.893 16L18.6663 20.2267L20.5463 22.12ZM13.333 20.2267L9.10634 16L13.333 11.7733L11.453 9.88L5.33301 16L11.453 22.12L13.333 20.2267ZM22.6663 25.3333H9.33301V22.6667H6.66634V28C6.66634 29.4667 7.86634 30.6667 9.33301 30.6667H22.6663C24.133 30.6667 25.333 29.4667 25.333 28V22.6667H22.6663V25.3333Z"
                fill="#EF2B2D"
            />
        </svg>
    );

    const iconWeb = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M21.8137 18.6667C21.9203 17.7867 22.0003 16.9067 22.0003 16C22.0003 15.0933 21.9203 14.2133 21.8137 13.3333H26.3203C26.5337 14.1867 26.667 15.08 26.667 16C26.667 16.92 26.5337 17.8133 26.3203 18.6667M19.4537 26.08C20.2537 24.6 20.867 23 21.2937 21.3333H25.227C23.9352 23.5577 21.8858 25.2427 19.4537 26.08ZM19.1203 18.6667H12.8803C12.747 17.7867 12.667 16.9067 12.667 16C12.667 15.0933 12.747 14.2 12.8803 13.3333H19.1203C19.2403 14.2 19.3337 15.0933 19.3337 16C19.3337 16.9067 19.2403 17.7867 19.1203 18.6667ZM16.0003 26.6133C14.8937 25.0133 14.0003 23.24 13.4537 21.3333H18.547C18.0003 23.24 17.107 25.0133 16.0003 26.6133ZM10.667 10.6667H6.77366C8.05213 8.43628 10.1001 6.74865 12.5337 5.92C11.7337 7.4 11.1337 9 10.667 10.6667ZM6.77366 21.3333H10.667C11.1337 23 11.7337 24.6 12.5337 26.08C10.1052 25.2422 8.06012 23.557 6.77366 21.3333ZM5.68033 18.6667C5.46699 17.8133 5.33366 16.92 5.33366 16C5.33366 15.08 5.46699 14.1867 5.68033 13.3333H10.187C10.0803 14.2133 10.0003 15.0933 10.0003 16C10.0003 16.9067 10.0803 17.7867 10.187 18.6667M16.0003 5.37333C17.107 6.97333 18.0003 8.76 18.547 10.6667H13.4537C14.0003 8.76 14.8937 6.97333 16.0003 5.37333ZM25.227 10.6667H21.2937C20.8764 9.01527 20.2584 7.42119 19.4537 5.92C21.907 6.76 23.947 8.45333 25.227 10.6667ZM16.0003 2.66666C8.62699 2.66666 2.66699 8.66666 2.66699 16C2.66699 19.5362 4.07175 22.9276 6.57224 25.4281C7.81035 26.6662 9.2802 27.6483 10.8979 28.3184C12.5156 28.9885 14.2494 29.3333 16.0003 29.3333C19.5365 29.3333 22.9279 27.9286 25.4284 25.4281C27.9289 22.9276 29.3337 19.5362 29.3337 16C29.3337 14.249 28.9888 12.5152 28.3187 10.8976C27.6487 9.27988 26.6665 7.81002 25.4284 6.57191C24.1903 5.33379 22.7204 4.35167 21.1028 3.6816C19.4851 3.01154 17.7513 2.66666 16.0003 2.66666Z"
                fill="#EF2B2D"
            />
        </svg>
    );

    const arrowLeft = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="84"
            viewBox="0 0 212 84"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.4902 47.5651C54.0303 45.8518 54.4869 44.3732 54.7241 43.5905C56.156 38.8243 61.1491 27.4174 61.9182 18.3151C62.5073 11.3709 60.6468 5.74354 54.2486 4.15214C48.4332 2.70581 42.5477 6.2292 37.3247 12.5917C26.0839 26.2852 17.515 52.9672 17.008 61.696C16.9532 62.6489 17.6778 63.4645 18.6309 63.5191C19.5796 63.5737 20.3954 62.849 20.4503 61.896C20.9388 53.5198 29.2002 27.925 39.9912 14.7787C44.2098 9.64093 48.7192 6.33166 53.4168 7.50102C58.0534 8.65283 58.9078 12.9894 58.4805 18.0236C57.7338 26.8822 52.8157 37.9587 51.4189 42.5987C50.5448 45.5079 46.8978 56.5092 46.8124 57.5274C46.7044 58.8022 47.6129 59.231 47.9216 59.3492C48.1608 59.4412 49.3827 59.8229 50.1482 58.4539C61.0741 38.9411 91.346 16.5565 123.553 7.68517C155.476 -1.10856 189.401 3.43702 208.057 37.9205C208.512 38.7572 209.56 39.0688 210.397 38.6183C211.234 38.1634 211.546 37.1154 211.091 36.2787C191.542 0.147946 156.083 -4.85412 122.639 4.35795C94.4528 12.1209 67.7709 30.0277 53.4902 47.5651Z"
                fill="#1A1A1A"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.55224 79.3497C6.51784 76.5286 7.56904 73.7503 8.31601 70.8525C10.3073 63.1326 10.7413 54.6893 8.87802 46.9083C8.7134 46.2277 8.03052 45.8107 7.35288 45.972C6.67225 46.1367 6.25537 46.8195 6.41662 47.4972C8.18947 54.8808 7.75595 62.8958 5.86603 70.2199C5.00942 73.5364 3.74742 76.6978 2.68231 79.9466C2.63116 80.1094 2.12517 81.507 2.09948 81.8313C2.03516 82.5861 2.49056 82.9397 2.7223 83.0763C2.91451 83.1928 3.17253 83.2863 3.51069 83.276C3.78814 83.2661 4.31025 83.1236 4.96786 82.7845C7.07763 81.7049 11.6373 78.4808 12.4418 78.0308C21.6623 72.8709 31.1068 69.6184 40.9644 65.9454C41.6178 65.6993 41.9522 64.9702 41.7092 64.3165C41.4663 63.6629 40.7373 63.3318 40.0836 63.5747C30.1009 67.2934 20.5414 70.6005 11.2096 75.8245C10.6556 76.1319 7.68151 78.0038 5.55224 79.3497Z"
                fill="#1A1A1A"
            />
        </svg>
    );

    const arrowRight = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="115"
            viewBox="0 0 212 115"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.8729 55.7301C40.8641 54.2319 41.7104 52.9363 42.1541 52.2492C44.8438 48.0621 52.7864 38.4724 56.0337 29.9343C58.5133 23.4212 58.2752 17.499 52.5631 14.2063C47.3714 11.2137 40.7428 12.9791 33.969 17.6564C19.3904 27.7228 3.80166 51.0111 0.909368 59.2623C0.594102 60.1633 1.06598 61.1469 1.9671 61.462C2.86404 61.7759 3.848 61.304 4.16327 60.4031C6.94079 52.4856 21.9343 30.1577 35.9297 20.4934C41.4006 16.7168 46.6473 14.778 50.8408 17.1964C54.9806 19.5811 54.6071 23.9853 52.8094 28.7069C49.6509 37.0169 41.8713 46.3096 39.2501 50.3852C37.6083 52.941 31.0714 62.5117 30.7087 63.4668C30.2537 64.6626 31.0089 65.3251 31.2731 65.5238C31.4776 65.6781 32.5471 66.3817 33.6601 65.2766C49.5393 49.5293 84.8071 36.3518 118.211 36.6975C151.322 37.0398 182.681 50.7563 191.115 89.0454C191.321 89.975 192.243 90.5632 193.171 90.3607C194.101 90.1541 194.69 89.2326 194.483 88.303C185.646 48.1846 152.937 33.6063 118.25 33.2473C89.0156 32.9438 58.4327 42.8061 39.8729 55.7301Z"
                fill="#1A1A1A"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M192.087 86.7373C188.899 84.2103 185.806 81.5928 182.42 79.3121C173.401 73.2343 162.742 68.8294 151.888 67.6802C150.938 67.5818 150.09 68.2699 149.989 69.2147C149.891 70.1649 150.579 71.0121 151.523 71.1135C161.825 72.1979 171.934 76.4071 180.491 82.1741C184.365 84.7866 187.855 87.8497 191.547 90.6995C191.733 90.8394 193.3 92.1268 193.705 92.3076C194.646 92.7342 195.308 92.3097 195.59 92.074C195.827 91.8799 196.065 91.5907 196.206 91.1512C196.319 90.79 196.374 90.0537 196.237 89.0536C195.811 85.8489 193.742 78.517 193.53 77.2775C191.096 63.0704 191.217 49.4444 190.985 35.0957C190.967 34.1432 190.181 33.3812 189.23 33.3957C188.279 33.4103 187.521 34.1968 187.536 35.148C187.769 49.6786 187.666 63.4773 190.132 77.8567C190.275 78.7091 191.327 83.3861 192.087 86.7373Z"
                fill="#1A1A1A"
            />
        </svg>
    );

    return (
        <section className="about-section padding-x margin-bottom" id="about">
            <h2 className="section-title">من نحن</h2>
            <h3 className="section-subtitle">
                هؤلاء وثقوا بنا , كن انت التالي
            </h3>
            <p className="section-description">
                نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من
                العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بأفضل الخبرات
                والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا
                باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه
                وأنظمة الدفع والبنوك
            </p>

            <div className="about-cards">
                <div className="about-card-container">
                    <div className="about-card-arrow arrow-right">
                        {arrowRight}
                    </div>
                    <NumberedCard
                        className="about-card-content"
                        number="1"
                        icon={iconBaselineDeveloperMode}
                        heading="+10"
                        text="عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي"
                    />
                </div>

                <div className="about-card-image">
                    <img src={Hand} alt="hand" />
                </div>

                <div className="about-card-container">
                    <div className="about-card-arrow arrow-left">
                        {arrowLeft}
                    </div>
                    <NumberedCard
                        className="about-card-content"
                        number="2"
                        icon={iconWeb}
                        heading="+13"
                        text="عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
