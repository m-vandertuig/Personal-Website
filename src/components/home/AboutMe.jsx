import React, { useState, useEffect } from "react";
import axios from "axios";
import profile from "./profile.jpg";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from "../../editable-stuff/configurations.json";
import { Row, Col } from "react-bootstrap";

const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
/*   const [resumeURL] = useState(Pdf); */

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{ background: 'linear-gradient(to right,black, black 33%,#e9ecef, #e9ecef 33%)'}}>
      <Row className="px-5 py-1 justify-content-around">
          <Col md={3}>
            <img
                className="border border-secondary"
                src={profile}
                alt="profilepicture"
            />
          </Col>
          <Col md={7}>
            <h4 className="display-4 mb-2 text-center">About Me</h4>
            <p className="lead text-center pt-5">Heyo! My name is Mayah and I am a 22 year-old software developer with a love for design, problem-solving, and working with others. I graduated in 2020 (blehk) from Santa Clara University with a B.S. in Computer Science and Software Engineering.</p>
          </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
