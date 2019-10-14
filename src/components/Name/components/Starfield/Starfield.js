import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles/starfield.scss";
import WarpSpeed from "./scripts/warpspeed.js";

export default class Starfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: 0,
      ref: null
    };
  }

  componentDidMount() {
    var newObj = new WarpSpeed("starfield-canvas", {
      speed: ((this.props.warpSpeed / 100) * this.props.warpSpeed) / 4,
      speedAdjFactor: 0.03,
      density: 12,
      shape: "circle",
      warpEffect: true,
      warpEffectLength: 0.3,
      depthFade: true,
      starSize: 10,
      backgroundColor: "hsl(263,45%,7%)",
      starColor: "#FFFFFF"
    });
    this.setState({ ref: newObj });
  }
  componentDidUpdate() {
    this.state.ref.TARGET_SPEED =
    ((this.props.warpSpeed / 100) * this.props.warpSpeed) / 4;
  }

  render() {
    return (
      <div className="starfield-background">
        <canvas id="starfield-canvas"></canvas>
      </div>
    );
  }
}

Starfield.propTypes = {
  warpSpeed: PropTypes.number
};
