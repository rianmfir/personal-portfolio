import React from 'react';
import './card.css';
import Check from "@iconscout/react-unicons/icons/uil-check-circle";
import { Col, Row } from 'react-bootstrap';

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="cardSkills">
            <img src={emoji} alt="" />
            <h3>{heading}</h3>
            <Row className="px-4 mt-5">
                {
                    detail.split(",").map((skill, index) => {
                        return (
                            <Col key={index} md={6} sm="6" className="mb-2 d-flex justify-content-start align-items-center">
                                <Check color="var(--darkBlue)" size={"1.5rem"} />
                                <span>{skill}</span>
                            </Col>
                        )
                    })
                }
            </Row>
        </div >
    );
};

export default Card;