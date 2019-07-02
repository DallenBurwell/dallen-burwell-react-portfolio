import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "SureSteel", category: "Steel Work", slug: "suresteel"},
                {title: "Steel Concepts", category: "Steel Work", slug: "steel-concepts"}, 
                {title: "Weber Basin", category: "District", slug: "weber-basin"},
                {title: "Weber Innovation", category: "Education", slug: "weber-innovation"}
            ]
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"www.google.com"} slug={item.slug} />;
        })
    }

    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Steel Work")}>
                    Steel Work
                </button>
                <button onClick={() => this.handleFilter("District")}>
                    District
                </button>
                <button onClick={() => this.handleFilter("Education")}>
                    Education
                </button>

                {this.portfolioItems()}


            </div>
        )
    }
}