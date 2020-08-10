import React, { Component } from "react";
import styles from "./styles/name.module.css";
import Starfield from "./components/Starfield";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faForward,
  faStepForward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Shake } from "reshake";

library.add(faForward, faStepForward, faEnvelope);

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      warpSpeed: 50,
      isMobile: false,
    };
    this.handleWarpSlide = this.handleWarpSlide.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.decelerateWarp = this.decelerateWarp.bind(this);
  }

  handleWarpSlide(event, newValue) {
    this.setState({ warpSpeed: newValue });
  }

  handleWindowResize() {
    this.setState({ isMobile: window.innerWidth < 550 });
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.decelerateWarp();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  decelerateWarp = () => {
    const task = (i) => {
      setTimeout( () => {
        let speed = 50 - (this.returnLinearDecel(i/100) * 100);
        // console.log(speed);
        this.setState({ warpSpeed: speed });
        console.log(speed);
      }, 50 * i);
    }
    let i = 30;
    while (i > 0) {
      task(i);
      i--;
    }
  }
  returnLinearDecel = (x) => {
    x = x - 0.01
    return (x)
  }

  render() {
    return (
      <div className={styles.nameSection}>
        <h1 className={styles.nameHolder}>
          <span className={styles.knockout}>
            <div className={styles.starfieldHolder}>
              <Starfield warpSpeed={this.state.warpSpeed} />
            </div>
            <Shake
              h={Math.max(this.state.warpSpeed - 40, 0) / 6}
              v={Math.max(this.state.warpSpeed - 40, 0) / 6}
              r={0}
              dur={310}
              int={5}
              max={100}
              fixed={true}
              fixedStop={false}
              freez={false}
            >
              <span>JEFF CHEN</span>
              <svg className={styles.knockoutSVG} width="100%" height="100%">
                <mask id="text-clip">
                  <rect id="bg" width="100%" height="100%" />
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
            </Shake>
          </span>
        </h1>
        <div className={styles.controlSection}>
          <div className={`${styles.sliderHolder} ${styles.standardShadow}`}>
            <Typography className={styles.continuousSlider}>
              Warp Speed
            </Typography>
            <div className={styles.sliderControl}>
              <FontAwesomeIcon
                icon={"step-forward"}
                className={styles.sliderIconLeft}
              />
              <Slider
                value={this.state.warpSpeed}
                onChange={this.handleWarpSlide}
                aria-labelledby={styles.continuousSlider}
                className={styles.warpSlider}
              />
              <FontAwesomeIcon
                icon={"forward"}
                className={styles.sliderIconRight}
              />
            </div>
          </div>
          <div className={styles.standardHolder}>Aspiring Product Manager. Developer. Sci-Fi Nerd.</div>
          <div className={styles.centeredFlex}>
            <a
              href="https://www.linkedin.com/in/jeffreychen27/"
              className={`${styles.socialBtn} ${styles.standardShadow}`}
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a
              href="https://github.com/JefffffC"
              className={`${styles.socialBtn} ${styles.standardShadow}`}
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="mailto:jchen.hba2021@ivey.ca"
              className={`${styles.socialBtn} ${styles.standardShadow}`}
            >
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
