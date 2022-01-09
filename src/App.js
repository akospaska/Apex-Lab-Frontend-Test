import React from "react";

import "./App.css";
import MainApp from "./Components/MainApp/MainApp";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ backgroundColor: "#131312", display: "block", overflow: "auto", padding: "1rem", minHeight: "100vh" }}>
        <MainApp />
      </div>
    </React.Fragment>
  );
}

export default App;
