import React, { useState } from "react";
import Typist from "react-typist";
import { Row, Container } from "react-bootstrap";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
  icons,
} from "../../editable-stuff/configurations.json";

const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
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
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars" className={'stars'}></div>
        <div className={'container container-fluid text-center'}>
          <Row className={'justify-content-center'}>
            <h1 className="display-1">
              Mayah Vandertuig
            </h1>
          </Row>
          <Row className={'justify-content-center'}>
            <Typist className="lead"> {devDesc}</Typist>
          </Row>

        </div>
        {/*<div className={'explore justify-content-center'}>*/}
        {/*  <a*/}
        {/*      className=" btn btn-lg"*/}
        {/*      href="#aboutme"*/}
        {/*  >*/}
        {/*    <i className="fas fa-angle-double-down fa-lg"/>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default MainBody;
