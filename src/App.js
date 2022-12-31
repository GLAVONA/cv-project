import "./styles/styles.css";
import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Photo from "./components/Photo";

class App extends React.Component {
  render() {
    return <div className="app">
        <div className="header">
            <Photo/>
            <GeneralInfo />
        </div>
        <div className="main">
            <Education/>
        </div>
    </div>;
  }
}

export default App;
