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
        { institution: "Harvard", major: "CS", years: "2012-2016", visible:false},
        { institution: "Harvard1", major: "CS", years: "2012-2016",visible:false},
        { institution: "Harvard2", major: "CS", years: "2012-2016",visible:false },
      ],
      workExperienceList: [],
    };
    this.check = this.check.bind(this);
    this.updateEduValue = this.updateEduValue.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  check() {
    console.log(this.state.educationList);
  }

  updateEduValue(e) {
    const newArr = this.state.educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    this.setState({
      ...this.state,
      educationList: newArr,
    });
  }

  deleteEdu(e) {
    const newArr = this.state.educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);
    newArr.splice(index, 1);
    this.setState({
      ...this.state,
      educationList: newArr,
    });
  }
  

  render() {
    return (
      <div className="app">
        <div className="header">
          <button onClick={this.check}>Check</button>
          <Photo />
          <GeneralInfo />
        </div>
        <div className="main header">
          <div className="education">
            Education
            {this.state.educationList.map((educationObject) => (
              <div className="educationContainer" >
                <Education
                  institution={educationObject.institution}
                  major={educationObject.major}
                  years={educationObject.years}
                  change={this.updateEduValue}
                />
                {
                  <button
                    onClick={(e) => this.deleteEdu(e)}
                    className="deleteButton"
                  >
                    X
                  </button>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
