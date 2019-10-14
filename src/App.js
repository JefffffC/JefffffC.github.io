import React from "react";
import Name from "./components/Name";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="name-content-holder d-flex flex-column align-items-center justify-content-center">
        <Name />
      </div>
    </div>
  );
}

export default App;
