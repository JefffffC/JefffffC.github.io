import React, { Component } from "react";
import "./styles/name.scss";
import Starfield from "./components/Starfield";
import Slider from "@material-ui/core/Slider";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      warpSpeed: 5
    };
    this.handleWarpSlide = this.handleWarpSlide.bind(this);
  }

  handleWarpSlide(event, newValue) {
    this.setState({ warpSpeed: newValue });
  }

  render() {
    return (
      <div className="name-section d-flex flex-column align-items-center">
        <div className="name-holder">
          <h1 className="jeff-name">JEFF CHEN</h1>
          <div className="starfield-holder">
            <Starfield warpSpeed={this.state.warpSpeed} />
          </div>
        </div>
        <Slider
          value={this.state.warpSpeed}
          onChange={this.handleWarpSlide}
          aria-labelledby="continuous-slider"
          className="warp-slider"
        />
      </div>
    );
  }
}
