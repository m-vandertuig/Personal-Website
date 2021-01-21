import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

const LeftBar = () => {
    return (
        <div className={'leftBar sidebar'}>
            <Row className={'justify-content-center'}>
                <i className="fab fa-medium-m fa-2x"></i>
            </Row>
        </div>

    );
};

export default LeftBar;
