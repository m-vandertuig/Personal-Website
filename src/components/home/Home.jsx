import MainBody from "./MainBody";
import AboutMe from "./AboutMe";
import Project from "./Project";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import { Row, Container } from "react-bootstrap";
import React from "react";

const Home = () => {
    return (
        <>
            <div className={'inline'}>
                <LeftBar/>
            </div>
            <div className={'main inline'}>
                <MainBody />
                <AboutMe />
                <Project />
            </div>
            <div className={'inline'}>
                <RightBar/>
            </div>
        </>
    );
};

export default Home;