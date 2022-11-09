import React from 'react';
import './footer.css';
import Wave from "../../assets/img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import WA from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
    return (
        <>

            <div className="footer">
                <img src={Wave} alt="" style={{ width: "100%" }} />
                <div className="f-content">
                    <span>rianmfirdaus@gmail.com</span>
                    <div className="f-icons">
                        <a href="https://github.com/rianmfir" target="_blank" rel="noopener noreferrer">
                            <Github color="white" size={"3rem"} />
                        </a>
                        {/* <a href="https://github.com/rianmfir" target="_blank" rel="noopener noreferrer">
                            <LinkedIn color="white" size={"3rem"} />
                        </a> */}
                        <a href="https://instagram.com/rianmfir" target="_blank" rel="noopener noreferrer">
                            <Instagram color="white" size={"3rem"} />
                        </a>
                        <a href="https://wa.me/6287822871995" target="_blank" rel="noopener noreferrer">
                            <WA color="white" size={"3rem"} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;