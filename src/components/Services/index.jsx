import React from 'react';
import './skills.css';
import { motion } from "framer-motion";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Card from '../Card';
import { Col, Row } from 'react-bootstrap';
import CV from './CV Rian Muhammad Firdaus.pdf';


const Skills = () => {
    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className='skills' id="skills">
            <Row >
                <Col md="6">
                    {/* left side */}
                    <div className="awesome">
                        <span>My Awesome</span>
                        <span>Services</span>
                        <span>
                            Focus on JavaScript programming language for Back-End and Front-End.
                        </span>
                        <a href={CV} download>
                            <button href={CV} className="button s-button" >Download CV</button>
                        </a>
                        <div className="blur s-blur2"
                            style={{ background: "var(--purple)" }}></div>
                    </div>
                </Col>
                <Col md="6">

                    <div className="cards">
                        <motion.div
                            initial={{ left: "27rem" }}
                            whileInView={{ left: "20rem" }}
                            transition={transition}
                        >
                            <Card
                                emoji={HeartEmoji}
                                heading={"Front End"}
                                detail={"React JS, HTML, CSS, Bootstrap, Javascript"} />
                        </motion.div>
                        <motion.div
                            initial={{ left: "-11rem", top: "12rem" }}
                            whileInView={{ left: "-3rem" }}
                            transition={transition}
                        >
                            <Card
                                emoji={Glasses}
                                heading={"Bank End"}
                                detail={"Node JS, Express JS, Mongo DB, My SQL"}
                            />
                        </motion.div>

                        <div
                            className="blur s-blur2"
                            style={{ background: "var(--purple)" }}
                        ></div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Skills;