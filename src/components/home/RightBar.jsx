import React, { useState, useEffect } from "react";
import {icons} from "../../editable-stuff/configurations.json";
import {Row, Container} from "react-bootstrap";

const RightBar = () => {

    const [hoverstatus, setHoverstatus] = useState(
        new Array(icons.length).fill("socialicons")
    );


    const toggleHover = (data) => {
        const newhoverStatus = [...hoverstatus];

        if (data.event === "enter") {
            newhoverStatus[data.icon.id] = "socialiconshover";
            return setHoverstatus(newhoverStatus);
        } else if (data.event === "leave") {
            newhoverStatus[data.icon.id] = "socialicons";
            return setHoverstatus(newhoverStatus);
        }
    };


    return (
        <div className={'rightBar sidebar'}>
            <Row className={'justify-content-center'}>
                <i className="fas fa-bars fa-2x"></i>
            </Row>
            <Container className={'iconList'}>
                <Row className={'justify-content-center'}>
                    <i className="icon fab fa-github fa-2x"></i>
                </Row>
                <Row className={'justify-content-center'}>
                    <i className="icon fab fa-linkedin fa-2x"></i>
                </Row>
                <Row className={'justify-content-center'}>
                    <i className="icon fab fa-instagram fa-2x"></i>
                </Row>
                <Row className={'justify-content-center'}>
                    <i className="icon fab fa-facebook fa-2x"></i>
                </Row>
            </Container>
        </div>

    );
};

export default RightBar;
