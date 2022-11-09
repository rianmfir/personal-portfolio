import React, { useEffect, useState } from 'react';
import "./scrollToTopButton.css";
import Arrow from "@iconscout/react-unicons/icons/uil-arrow-circle-up";

const ScrollToTopButton = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {
                showTopBtn && (
                    <div className={`scrollToButton`} onClick={goToTop}>
                        <Arrow color="white" size={'4rem'} />
                    </div>

                )}
        </>
    )
}

export default ScrollToTopButton;