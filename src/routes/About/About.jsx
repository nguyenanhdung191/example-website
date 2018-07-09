import React from "react";
import Header from "../../common-component/Header";
import Footer from "../../common-component/Footer";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>THIS IS ABOUT PAGE</h1>
                <Footer />
            </div>
        );
    }
}
