import React from 'react';
import './intro.css';
import rian from "../../assets/img/foto.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";

import { motion } from "framer-motion";
import FloatinDiv from '../FloatingDiv';

import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import WA from "@iconscout/react-unicons/icons/uil-whatsapp";
import Button from '../Button';
import { Col, Row } from 'react-bootstrap';


const Intro = () => {

    const transition = { duration: 2, type: "spring" };

    return (
        <>
            <Row className="Intro">
                <Col className="" md="6">
                    <div className="i-left">
                        <div className="i-name">
                            <span>Hy! I Am</span>
                            <span>Rian Muhammad Firdaus</span>
                            <span>
                                Currently on career-shifting phase into Web Developer with a strong focus on problem solving, collaboration, and javascript programming language, especially MERN stack. I have created system based on web.
                            </span>
                        </div>
                        <a href='#contact'>
                            <Button title={'Hire Me'} />
                        </a>
                        {/* social icons */}
                        <div className="i-icons">
                            <a href="https://github.com/rianmfir" target="_blank" rel="noopener noreferrer" className="">
                                <Github color="var(--darkPurple)" />
                            </a>
                            {/* <a href="https://github.com/rianmfir" target="_blank" rel="noopener noreferrer">
                                <LinkedIn color="var(--darkPurple)" />
                            </a> */}
                            <a href="https://instagram.com/rianmfir" target="_blank" rel="noopener noreferrer">
                                <Instagram color="var(--darkPurple)" />
                            </a>
                            <a href="https://wa.me/6287822871995" target="_blank" rel="noopener noreferrer">
                                <WA color="var(--darkPurple)" />
                            </a>
                        </div>

                    </div>
                </Col>
                <Col md="6">
                    <div className="i-right">
                        <div className="profile mx-auto">
                            <div className="i-circle "></div>
                            <img className="me-3" src={rian} alt="" />
                        </div>

                        {/* animation */}
                        <motion.img
                            initial={{ left: "-36%" }}
                            whileInView={{ left: "-15%" }}
                            transition={transition}
                            src={glassesimoji}
                            alt=""
                        />
                        {/* animation */}
                        <motion.div
                            initial={{ left: "10rem", top: "20rem" }}
                            whileInView={{ left: "4rem" }}
                            transition={transition}
                            className="floating-div"
                        >
                            <FloatinDiv img={thumbup} text1="Web" text2="Developer" />
                        </motion.div>

                        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                        <div
                            className="blur"
                            style={{
                                background: "#C1F5FF",
                                top: "17rem",
                                width: "21rem",
                                height: "11rem",
                                left: "-9rem",
                            }}
                        ></div>
                    </div>
                </Col>
            </Row >
        </>
    )
}

export default Intro;