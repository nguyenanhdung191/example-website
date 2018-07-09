import React from "react";
import Header from "../../common-component/Header";
import Footer from "../../common-component/Footer";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>THIS IS HOMEPAGE</h1>
                <Footer />
            </div>
        );
    }
}
