import React from "react";
import "./aboutSection.css";
import { Typography, Button } from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img
              src="https://res.cloudinary.com/dflom5wux/image/upload/v1683989795/avatars/nqqvfclpzhrlbafe1asl.jpg"
              alt="Creator"
              className="imgset"
            />
            <Typography>Jaydev kalariya</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by jaydev kalariya. As a Project of
              design engineering.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>

            <div className=" main">
              {" "}
              <div className=" main1">
                <a href="http://google.com" target="blank">
                  <YouTubeIcon fontSize="large" className="youtubeSvgIcon" />
                </a>

                <a href="http://google.com" target="blank">
                  <InstagramIcon
                    fontSize="large"
                    className="instagramSvgIcon"
                  />
                </a>
              </div>
              <div className="main2">
                <a href="http://google.com" target="blank">
                  <FacebookIcon fontSize="large" className="facebookSvgIcon" />
                </a>
                <a href="http://google.com" target="blank">
                  <LinkedInIcon fontSize="large" className="linkedinSvgIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
