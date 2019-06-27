import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

    portfolioItems() {
        const data = ["SureSteel", "Steel Concepts", "Weber Basin"];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return (
            <div>
                <h2>Porftfolio items go here...</h2>

                {this.portfolioItems()}

            </div>
        )
    }
}