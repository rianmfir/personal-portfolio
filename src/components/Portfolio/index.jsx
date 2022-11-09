import React from 'react';
import "./portfolio.css";
import CardPortfolio from '../CardPortfolio';

const Portfolio = () => {

    const data = [
        {
            image: "https://i.imgur.com/pQpsdE4.png",
            title: "Food Store",
            describe: "Food Store is a food delivery service according to user orders. I made this project with MERN technology and redux as state management",
            demo: "https://mern-foodstore.netlify.app/",
            git: "https://github.com/rianmfir/frontend-foodstore"
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <span >Recent Projects</span>
            <span>Portfolio</span>

            {
                data.map((state) => {
                    return (
                        <CardPortfolio image={state.image} title={state.title} describe={state.describe} demo={state.demo} git={state.git} />
                    )
                })
            }

        </div>
    )
}

export default Portfolio