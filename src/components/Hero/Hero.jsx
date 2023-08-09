/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";

import Image from "../../assets/img-bg.webp";
// import FaceBookIcon from "../../assets/facebook.svg";
// import TwitterIcon from "../../assets/twitter.svg";
// import InstagramIcon from "../../assets/instagram.svg";
// import YoutubeIcon from "../../assets/youtube.svg";
// import LinkedinIcon from "../../assets/linkedin.svg";

const Hero = ({ refg }) => {
    return (
        <section ref={refg} className="hero margin-bottom bg-blue" id="home">
            <div className="hero-top padding-x">
                <div className="hero-content">
                    <h1 className="hero-content-heading">
                        ابحث عن أفضل{" "}
                        <span className="word">
                            الحلول
                            <span className="word-dot" />
                            <span className="word-dot" />
                            <span className="word-dot" />
                            <span className="word-dot" />
                        </span>{" "}
                        البرمجية
                    </h1>
                    <p className="hero-content-text">
                        خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة
                    </p>

                    <button className="hero-content-btn">
                        الحصول علي استشارة
                    </button>
                </div>
                <div className="hero-img">
                    <img src={Image} alt="hero" />
                </div>
            </div>

            <div className="hero-goal padding-x">
                <h2 className="hero-goal-head">هدفنا</h2>
                <div className="hero-goal-content">
                    <p className="hero-goal-text">
                        أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من
                        خلال إنشاء تطبيقات و موقع ويب من البداية يناسب احتياجاتك
                    </p>
                    <div className="hero-goal-social">
                        <h3 className="hero-goal-social-head">
                            صفحاتنا علي السوشيال ميديا
                        </h3>
                        <ul className="hero-goal-social-icons">
                            <li className="hero-goal-social-icon">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100094065639945"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="mdi:facebook">
                                            <path
                                                id="Vector"
                                                d="M12.5234 2.91202C7.02344 2.91202 2.52344 7.40202 2.52344 12.932C2.52344 17.932 6.18344 22.082 10.9634 22.832V15.832H8.42344V12.932H10.9634V10.722C10.9634 8.21202 12.4534 6.83202 14.7434 6.83202C15.8334 6.83202 16.9734 7.02202 16.9734 7.02202V9.49202H15.7134C14.4734 9.49202 14.0834 10.262 14.0834 11.052V12.932H16.8634L16.4134 15.832H14.0834V22.832C16.4399 22.4599 18.5856 21.2575 20.1334 19.4421C21.6811 17.6266 22.5288 15.3177 22.5234 12.932C22.5234 7.40202 18.0234 2.91202 12.5234 2.91202Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li className="hero-goal-social-icon">
                                <a
                                    href="https://twitter.com/MYM_Miracle"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="teenyicons:twitter-outline"
                                            clipPath="url(#clip0_23_464)"
                                        >
                                            <path
                                                id="Vector"
                                                d="M23.6882 3.272L24.4882 3.2192C24.4779 3.06215 24.4214 2.91164 24.3259 2.78653C24.2303 2.66143 24.1001 2.56727 23.9513 2.51586C23.8025 2.46445 23.6419 2.45807 23.4895 2.49751C23.3371 2.53695 23.1998 2.62047 23.0946 2.7376L23.6882 3.272ZM22.8914 8.0064C22.8914 7.79423 22.8072 7.59075 22.6571 7.44072C22.5071 7.29069 22.3036 7.2064 22.0914 7.2064C21.8793 7.2064 21.6758 7.29069 21.5258 7.44072C21.3757 7.59075 21.2914 7.79423 21.2914 8.0064H22.8914ZM1.32344 20.872V20.072C1.15166 20.0718 0.984381 20.1269 0.846339 20.2291C0.708296 20.3313 0.606826 20.4753 0.55694 20.6397C0.507053 20.804 0.5114 20.9801 0.569337 21.1418C0.627273 21.3035 0.735722 21.4423 0.878641 21.5376L1.32344 20.872ZM2.92024 3.272L3.67064 2.992C3.61611 2.84593 3.52008 2.71898 3.39437 2.62676C3.26866 2.53454 3.11873 2.48106 2.96303 2.4729C2.80733 2.46474 2.65264 2.50226 2.51797 2.58084C2.38331 2.65942 2.27454 2.77563 2.20504 2.9152L2.92024 3.272ZM9.31064 17.672L9.87704 18.2368C9.97314 18.1404 10.043 18.0211 10.0802 17.8901C10.1173 17.7592 10.1203 17.6209 10.0891 17.4884C10.0579 17.3559 9.99335 17.2336 9.90164 17.133C9.80993 17.0324 9.69408 16.9569 9.56504 16.9136L9.31064 17.672ZM20.869 4.8288L20.277 5.3664L20.565 5.6848L20.989 5.6208L20.869 4.8288ZM22.8914 3.3248C22.973 4.5696 22.8962 5.3248 22.6946 5.8944C22.4994 6.4464 22.157 6.9008 21.5378 7.4944L22.645 8.6496C23.3458 7.9776 23.8866 7.3184 24.2034 6.4288C24.5122 5.5552 24.5762 4.544 24.4882 3.2192L22.8914 3.3248ZM22.8914 9.1712V8.0064H21.2914V9.1728H22.8914V9.1712ZM11.7074 8.1376V9.672H13.3074V8.1376H11.7074ZM11.7074 9.672V10.472H13.3074V9.672H11.7074ZM17.3634 2.472C16.6198 2.47242 15.8836 2.6193 15.1968 2.90425C14.5099 3.1892 13.886 3.60664 13.3605 4.13274C12.835 4.65884 12.4182 5.2833 12.134 5.97045C11.8499 6.65761 11.7038 7.394 11.7042 8.1376H13.3042C13.3038 7.60398 13.4085 7.07551 13.6124 6.58238C13.8163 6.08924 14.1153 5.64109 14.4924 5.26355C14.8695 4.886 15.3173 4.58645 15.8102 4.382C16.3031 4.17755 16.8314 4.07221 17.365 4.072V2.472H17.3634ZM21.2898 9.1712C21.2914 16.0768 15.7026 21.672 8.81144 21.672V23.272C16.5874 23.272 22.8914 16.9584 22.8914 9.1712H21.2898ZM2.17144 3.552C3.04184 5.8752 6.30584 10.472 12.5074 10.472V8.872C7.20184 8.872 4.39704 4.936 3.66904 2.992L2.17144 3.552ZM2.20504 2.9152C0.529841 6.2688 0.272241 9.5232 1.48984 12.2944C2.70424 15.0576 5.31704 17.1824 9.05784 18.4304L9.56504 16.9136C6.11704 15.7616 3.93624 13.8864 2.95384 11.6496C1.97464 9.4208 2.11704 6.6736 3.63704 3.6288L2.20504 2.9152ZM8.74424 17.1072C7.78104 18.072 4.88504 20.072 1.32344 20.072V21.672C5.42904 21.672 8.71064 19.4064 9.87704 18.2368L8.74424 17.1072ZM21.4626 4.2928C20.9454 3.71913 20.3133 3.26058 19.6074 2.94691C18.9015 2.63323 18.1375 2.47143 17.365 2.472V4.072C18.5186 4.072 19.557 4.5696 20.277 5.3664L21.4626 4.2928ZM20.989 5.6208C22.2635 5.41258 23.4274 4.77187 24.285 3.8064L23.0946 2.7376C22.4846 3.42678 21.6567 3.88592 20.749 4.0384L20.989 5.6208ZM0.878641 21.5376C3.50424 23.288 6.25624 23.272 8.81144 23.272V21.672C6.20344 21.672 3.93464 21.6544 1.76824 20.2064L0.878641 21.5376Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_23_464">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                    transform="translate(0.523438 0.872009)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>

                            <li className="hero-goal-social-icon">
                                <a
                                    href="https://instagram.com/mym_miracle?igshid=MzNlNGNkZWQ4Mg=="
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="uil:instagram">
                                            <path
                                                id="Vector"
                                                d="M17.8634 6.33201C17.6261 6.33201 17.3941 6.40239 17.1968 6.53425C16.9994 6.6661 16.8456 6.85352 16.7548 7.07279C16.664 7.29206 16.6402 7.53334 16.6865 7.76612C16.7328 7.99889 16.8471 8.21271 17.0149 8.38054C17.1827 8.54836 17.3966 8.66265 17.6293 8.70895C17.8621 8.75525 18.1034 8.73149 18.3227 8.64066C18.5419 8.54984 18.7293 8.39603 18.8612 8.19869C18.9931 8.00135 19.0634 7.76935 19.0634 7.53201C19.0634 7.21375 18.937 6.90852 18.712 6.68348C18.4869 6.45844 18.1817 6.33201 17.8634 6.33201ZM22.4634 8.75201C22.444 7.92231 22.2886 7.10141 22.0034 6.32201C21.7492 5.65514 21.3534 5.05129 20.8434 4.55201C20.3483 4.03944 19.743 3.64619 19.0734 3.40201C18.2961 3.10817 17.4743 2.94922 16.6434 2.93201C15.5834 2.87201 15.2434 2.87201 12.5234 2.87201C9.80344 2.87201 9.46344 2.87201 8.40344 2.93201C7.57259 2.94922 6.75078 3.10817 5.97344 3.40201C5.30511 3.64866 4.70037 4.04157 4.20344 4.55201C3.69086 5.04719 3.29761 5.65245 3.05344 6.32201C2.7596 7.09935 2.60065 7.92116 2.58344 8.75201C2.52344 9.81201 2.52344 10.152 2.52344 12.872C2.52344 15.592 2.52344 15.932 2.58344 16.992C2.60065 17.8229 2.7596 18.6447 3.05344 19.422C3.29761 20.0916 3.69086 20.6968 4.20344 21.192C4.70037 21.7024 5.30511 22.0954 5.97344 22.342C6.75078 22.6358 7.57259 22.7948 8.40344 22.812C9.46344 22.872 9.80344 22.872 12.5234 22.872C15.2434 22.872 15.5834 22.872 16.6434 22.812C17.4743 22.7948 18.2961 22.6358 19.0734 22.342C19.743 22.0978 20.3483 21.7046 20.8434 21.192C21.3557 20.6946 21.7518 20.0902 22.0034 19.422C22.2886 18.6426 22.444 17.8217 22.4634 16.992C22.4634 15.932 22.5234 15.592 22.5234 12.872C22.5234 10.152 22.5234 9.81201 22.4634 8.75201ZM20.6634 16.872C20.6562 17.5068 20.5412 18.1357 20.3234 18.732C20.1638 19.1672 19.9073 19.5604 19.5734 19.882C19.2491 20.2125 18.8567 20.4684 18.4234 20.632C17.8271 20.8498 17.1982 20.9647 16.5634 20.972C15.5634 21.022 15.1934 21.032 12.5634 21.032C9.93344 21.032 9.56344 21.032 8.56344 20.972C7.90433 20.9844 7.24803 20.8829 6.62344 20.672C6.20922 20.5001 5.83479 20.2448 5.52344 19.922C5.19153 19.6008 4.93828 19.2072 4.78344 18.772C4.53929 18.1672 4.40388 17.524 4.38344 16.872C4.38344 15.872 4.32344 15.502 4.32344 12.872C4.32344 10.242 4.32344 9.87201 4.38344 8.87201C4.38792 8.22306 4.50639 7.57995 4.73344 6.97201C4.90948 6.54992 5.1797 6.17367 5.52344 5.87201C5.82725 5.52818 6.20273 5.25511 6.62344 5.07201C7.23299 4.85205 7.87543 4.73709 8.52344 4.73201C9.52344 4.73201 9.89344 4.67201 12.5234 4.67201C15.1534 4.67201 15.5234 4.67201 16.5234 4.73201C17.1582 4.73929 17.7871 4.85426 18.3834 5.07201C18.8379 5.24066 19.2457 5.51486 19.5734 5.87201C19.9011 6.17919 20.1572 6.55474 20.3234 6.97201C20.5457 7.58094 20.6607 8.22379 20.6634 8.87201C20.7134 9.87201 20.7234 10.242 20.7234 12.872C20.7234 15.502 20.7134 15.872 20.6634 16.872ZM12.5234 7.74201C11.5092 7.74399 10.5184 8.04654 9.67609 8.61143C8.83378 9.17632 8.17782 9.97821 7.79107 10.9158C7.40433 11.8533 7.30416 12.8845 7.50323 13.8789C7.7023 14.8734 8.19167 15.7865 8.90951 16.503C9.62735 17.2194 10.5414 17.707 11.5363 17.9042C12.5311 18.1013 13.5621 17.9991 14.4989 17.6105C15.4357 17.222 16.2363 16.5644 16.7996 15.721C17.3628 14.8776 17.6634 13.8862 17.6634 12.872C17.6648 12.1971 17.5326 11.5286 17.2747 10.905C17.0167 10.2813 16.638 9.71482 16.1603 9.23806C15.6826 8.7613 15.1154 8.38369 14.4912 8.12694C13.8671 7.87019 13.1983 7.73937 12.5234 7.74201ZM12.5234 16.202C11.8648 16.202 11.221 16.0067 10.6734 15.6408C10.1258 15.2749 9.69896 14.7548 9.44692 14.1463C9.19488 13.5379 9.12893 12.8683 9.25742 12.2224C9.38591 11.5764 9.70306 10.9831 10.1688 10.5173C10.6345 10.0516 11.2278 9.73448 11.8738 9.60599C12.5197 9.47751 13.1893 9.54345 13.7978 9.79549C14.4063 10.0475 14.9263 10.4743 15.2922 11.022C15.6581 11.5696 15.8534 12.2134 15.8534 12.872C15.8534 13.3093 15.7673 13.7423 15.6 14.1463C15.4326 14.5504 15.1873 14.9175 14.8781 15.2267C14.5689 15.5359 14.2018 15.7812 13.7978 15.9485C13.3938 16.1159 12.9607 16.202 12.5234 16.202Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li className="hero-goal-social-icon">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="mingcute:youtube-line">
                                            <g id="Group">
                                                <path
                                                    id="Vector"
                                                    d="M12.5234 4.87201C13.3784 4.87201 14.2554 4.89401 15.1054 4.93001L16.1094 4.97801L17.0704 5.03501L17.9704 5.09601L18.7924 5.16001C19.6845 5.22829 20.5239 5.60896 21.163 6.23505C21.802 6.86114 22.1999 7.69255 22.2864 8.58301L22.3264 9.00801L22.4014 9.91801C22.4714 10.861 22.5234 11.889 22.5234 12.872C22.5234 13.855 22.4714 14.883 22.4014 15.826L22.3264 16.736C22.3134 16.882 22.3004 17.023 22.2864 17.161C22.1998 18.0516 21.8019 18.8832 21.1626 19.5093C20.5233 20.1354 19.6837 20.516 18.7914 20.584L17.9714 20.647L17.0714 20.709L16.1094 20.766L15.1054 20.814C14.2453 20.8514 13.3844 20.8707 12.5234 20.872C11.6625 20.8707 10.8016 20.8514 9.94144 20.814L8.93744 20.766L7.97644 20.709L7.07644 20.647L6.25444 20.584C5.36239 20.5157 4.52299 20.1351 3.88391 19.509C3.24483 18.8829 2.84701 18.0515 2.76044 17.161L2.72044 16.736L2.64544 15.826C2.56898 14.8431 2.52828 13.8578 2.52344 12.872C2.52344 11.889 2.57544 10.861 2.64544 9.91801L2.72044 9.00801C2.73344 8.86201 2.74644 8.72101 2.76044 8.58301C2.84698 7.69271 3.24465 6.86142 3.88353 6.23535C4.5224 5.60928 5.36157 5.22851 6.25344 5.16001L7.07444 5.09601L7.97444 5.03501L8.93644 4.97801L9.94044 4.93001C10.8009 4.89264 11.6621 4.8733 12.5234 4.87201ZM12.5234 6.87201C11.6984 6.87201 10.8494 6.89401 10.0234 6.92801L9.04544 6.97501L8.10644 7.03001L7.22444 7.09001L6.41644 7.15301C5.99177 7.18314 5.59148 7.36266 5.28653 7.65974C4.98158 7.95682 4.79166 8.35227 4.75044 8.77601C4.63344 9.98501 4.52344 11.49 4.52344 12.872C4.52344 14.254 4.63344 15.759 4.75044 16.968C4.83544 17.84 5.52744 18.518 6.41644 18.591L7.22444 18.653L8.10644 18.713L9.04544 18.769L10.0234 18.816C10.8494 18.85 11.6984 18.872 12.5234 18.872C13.3484 18.872 14.1974 18.85 15.0234 18.816L16.0014 18.769L16.9404 18.714L17.8224 18.654L18.6304 18.591C19.0551 18.5609 19.4554 18.3814 19.7603 18.0843C20.0653 17.7872 20.2552 17.3917 20.2964 16.968C20.4134 15.759 20.5234 14.254 20.5234 12.872C20.5234 11.49 20.4134 9.98501 20.2964 8.77601C20.2552 8.35227 20.0653 7.95682 19.7603 7.65974C19.4554 7.36266 19.0551 7.18314 18.6304 7.15301L17.8224 7.09101L16.9404 7.03101L16.0014 6.97501L15.0234 6.92801C14.1906 6.89218 13.3571 6.8735 12.5234 6.87201ZM10.5234 10.447C10.5234 10.3493 10.5472 10.253 10.5928 10.1666C10.6384 10.0801 10.7045 10.0061 10.7852 9.95104C10.8659 9.89595 10.9589 9.8614 11.056 9.85042C11.1531 9.83943 11.2514 9.85234 11.3424 9.88801L11.4234 9.92801L15.6234 12.352C15.7071 12.4003 15.7778 12.468 15.8297 12.5494C15.8815 12.6309 15.913 12.7237 15.9213 12.8199C15.9297 12.9161 15.9147 13.0128 15.8776 13.102C15.8406 13.1912 15.7825 13.2701 15.7084 13.332L15.6234 13.392L11.4234 15.817C11.3388 15.866 11.2435 15.8936 11.1457 15.8973C11.048 15.9011 10.9508 15.8809 10.8627 15.8385C10.7746 15.7961 10.6981 15.7328 10.64 15.6541C10.5819 15.5754 10.544 15.4837 10.5294 15.387L10.5234 15.297V10.447Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li className="hero-goal-social-icon">
                                <a
                                    href="https://www.linkedin.com/company/mym-make-your-miracle/?viewAsMember=true"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="uil:linkedin">
                                            <path
                                                id="Vector"
                                                d="M20.993 2.872H4.05301C3.86259 2.86935 3.67351 2.90424 3.49657 2.97468C3.31964 3.04512 3.15831 3.14972 3.02181 3.28251C2.8853 3.4153 2.77629 3.57368 2.701 3.74861C2.62571 3.92353 2.58562 4.11157 2.58301 4.302V21.442C2.58562 21.6324 2.62571 21.8205 2.701 21.9954C2.77629 22.1703 2.8853 22.3287 3.02181 22.4615C3.15831 22.5943 3.31964 22.6989 3.49657 22.7693C3.67351 22.8398 3.86259 22.8746 4.05301 22.872H20.993C21.1834 22.8746 21.3725 22.8398 21.5494 22.7693C21.7264 22.6989 21.8877 22.5943 22.0242 22.4615C22.1607 22.3287 22.2697 22.1703 22.345 21.9954C22.4203 21.8205 22.4604 21.6324 22.463 21.442V4.302C22.4604 4.11157 22.4203 3.92353 22.345 3.74861C22.2697 3.57368 22.1607 3.4153 22.0242 3.28251C21.8877 3.14972 21.7264 3.04512 21.5494 2.97468C21.3725 2.90424 21.1834 2.86935 20.993 2.872ZM8.61301 19.612H5.61301V10.612H8.61301V19.612ZM7.11301 9.352C6.69927 9.352 6.30248 9.18764 6.00992 8.89508C5.71736 8.60253 5.55301 8.20573 5.55301 7.792C5.55301 7.37826 5.71736 6.98147 6.00992 6.68891C6.30248 6.39635 6.69927 6.232 7.11301 6.232C7.3327 6.20708 7.55518 6.22885 7.76588 6.29588C7.97658 6.36291 8.17075 6.47369 8.33566 6.62096C8.50058 6.76823 8.63253 6.94868 8.72288 7.15048C8.81322 7.35228 8.85993 7.57089 8.85993 7.792C8.85993 8.0131 8.81322 8.23171 8.72288 8.43351C8.63253 8.63532 8.50058 8.81576 8.33566 8.96304C8.17075 9.11031 7.97658 9.22108 7.76588 9.28811C7.55518 9.35514 7.3327 9.37691 7.11301 9.352ZM19.433 19.612H16.433V14.782C16.433 13.572 16.003 12.782 14.913 12.782C14.5757 12.7845 14.2472 12.8903 13.9718 13.0852C13.6965 13.2801 13.4875 13.5547 13.373 13.872C13.2948 14.107 13.2608 14.3546 13.273 14.602V19.602H10.273V10.602H13.273V11.872C13.5455 11.3991 13.9419 11.0095 14.4194 10.7452C14.897 10.4809 15.4376 10.3518 15.983 10.372C17.983 10.372 19.433 11.662 19.433 14.432V19.612Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li className="hero-goal-social-icon">
                                <a
                                    href="https://www.threads.net/@mym_miracle"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-label="Threads"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 192 192"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            className="x19hqcy"
                                            fill="white"
                                            d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
