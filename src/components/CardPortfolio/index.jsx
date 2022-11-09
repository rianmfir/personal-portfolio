import React from 'react';
import "./cardPortfolio.css";
import Play from "@iconscout/react-unicons/icons/uil-play";


const CardPortfolio = (props) => {
    return (
        <div className="card-portfolio" id="card-portfolio">
            <div className="cp-project">
                <div className="cp-project-wrapper">
                    <div className="cp-item">
                        <div id="image" className="cp-img">
                            <img src={props.image} alt="Project" className="shadow" />
                        </div>
                        <div className="cp-content">
                            <div className="cp-title">{props.title}</div>
                            <div className="cp-text">{props.describe}</div>
                            <div className="cp-button-wrapper gap-5">
                                <a href={props.demo} target="_blank"
                                    className="cp-project-button cp-button cp-button-flex">
                                    Demo
                                    <Play className="cp-button-icon" />
                                </a>
                                <a href={props.git} target="_blank"
                                    className="cp-project-button cp-button cp-button-flex">
                                    Github
                                    <Play className="cp-button-icon" />
                                    {/* <i className="uil uil-play cp-button-icon"></i> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPortfolio;