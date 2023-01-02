import "./styles/styles.css";
import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Photo from "./components/Photo";
import WorkExperience from "./components/WorkExperience";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      educationList: [
        { institution: "Harvard", major: "CS", years: "2012-2016" },
        { institution: "Harvard", major: "CS", years: "2012-2016" },
        { institution: "Harvard", major: "CS", years: "2012-2016" },
      ],
      workExperienceList: [],
    };
  }

  check() {
    console.log("ayaya");
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <button onClick={this.check}>Check</button>
          <Photo />
          <GeneralInfo />
        </div>
        <div className="main">
          <div className="education">EDUCATION</div>
          {this.state.educationList.map((educationObject, index) => {
            <Education
              institution={educationObject.institution}
              major={educationObject.major}
              years={educationObject.years}
            />;
            <Education/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
