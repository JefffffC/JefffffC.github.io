import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles/starfield.module.css";
import WarpSpeed from "./scripts/warpspeed.js";

export default class Starfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: 0,
      ref: null,
    };
  }

  componentDidMount() {
    var newObj = new WarpSpeed(styles.starfieldCanvas, {
      speed:
        ((this.props.warpSpeed / 3000) *
          this.props.warpSpeed *
          this.props.warpSpeed) /
        4,
      speedAdjFactor: 0.008,
      density: 7,
      shape: "circle",
      warpEffect: true,
      warpEffectLength: 0.3,
      depthFade: true,
      starSize: 15,
      backgroundColor: "hsl(263,45%,7%)",
      randomColors: true,
    });
    this.setState({ ref: newObj });
  }
  componentDidUpdate(prevProps) {

    if (prevProps.warpSpeed !== this.props.warpSpeed) {
      this.setState((state) => {
        state.ref.TARGET_SPEED =
          ((this.props.warpSpeed / 3000) *
            this.props.warpSpeed *
            this.props.warpSpeed) /
          4;
        return state;
      });
    }
  }

  render() {
    return (
      <div className={styles.starfieldBackground}>
        <canvas id={styles.starfieldCanvas}></canvas>
      </div>
    );
  }
}

Starfield.propTypes = {
  warpSpeed: PropTypes.number,
};
