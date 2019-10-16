import React, { Component } from "react";
import "./styles/name.scss";
import Starfield from "./components/Starfield";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faForward, faStepForward, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faForward, faStepForward, faEnvelope);

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      warpSpeed: 15
    };
    this.handleWarpSlide = this.handleWarpSlide.bind(this);
  }

  handleWarpSlide(event, newValue) {
    this.setState({ warpSpeed: newValue });
  }

  render() {
    return (
      <div className="name-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="name-holder">
          <span className="knockout">
            <div className="starfield-holder">
              <Starfield warpSpeed={this.state.warpSpeed} />
            </div>
            <span className="knockout__text fullblock">JEFF CHEN</span>
            <svg
              className="knockout__svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              height="100%"
            >
              <mask id="text-clip">
                <rect id="bg" width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#000"
                >
                  JEFF CHEN
                </text>
              </mask>

              <rect width="100%" height="100%" mask="url(#text-clip)" />
            </svg>
          </span>
        </h1>
        <div className="control-section">
          <div className="slider-holder d-flex flex-column align-items-center justify-content-center standard-shadow">
            <Typography id="continuous-slider">Warp Speed</Typography>
            <div className="slider-control d-flex align-items-center">
              <FontAwesomeIcon
                icon={"step-forward"}
                className="slider-icon-left"
              />
              <Slider
                value={this.state.warpSpeed}
                onChange={this.handleWarpSlide}
                aria-labelledby="continuous-slider"
                className="warp-slider"
              />
              <FontAwesomeIcon icon={"forward"} className="slider-icon-right" />
            </div>
          </div>
          <div className="standard-holder my-5 text-center coming-soon">
            Website Coming Soon.
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <a
              href="https://www.linkedin.com/in/jeffreychen27/"
              className="d-flex align-items-center justify-content-center social-btn standard-shadow"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a
              href="https://github.com/JefffffC"
              className="d-flex align-items-center justify-content-center social-btn standard-shadow"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="mailto:jchen.hba2021@ivey.ca"
              className="d-flex align-items-center justify-content-center social-btn standard-shadow"
            >
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
