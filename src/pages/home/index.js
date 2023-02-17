import React from "react";
import About from "../../components/about";
import Portfolio from "../../components/portfolio";
import Title from "../../components/title";

function Home() {
    return (
        <div>
            <Title />
            <About />
            <Portfolio />
        </div>
    )
}

export default Home;