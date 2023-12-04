import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Main = () => {
    return (
        <div>
            <Header/>
            <main style={{"minHeight":"70vh"}}></main>
            <Footer/>
        </div>
    );
}

export default Main;