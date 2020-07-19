import React from "react";
import Name from "./components/Name";
import styles from "./app.module.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

library.add(fab);

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  return (
    <StylesProvider jss={jss}>
      <div className={styles.app}>
        <div className={styles.nameContentHolder}>
          <Name />
        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
