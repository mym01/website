/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import "./Loading.css";

const Loading = ({ center }) => {
    return (
        <div
            className="loading__help__container"
            style={
                center
                    ? {
                          transform: "translate(-50%, -50%)",
                          top: "50%",
                          left: "50%",
                      }
                    : {
                          transform: "translate(-50%, -10%)",
                          bottom: "10%",
                          left: "50%",
                      }
            }
        >
            <div className="loading"></div>
            <div className="loading-inner"></div>
        </div>
    );
};

export default Loading;
