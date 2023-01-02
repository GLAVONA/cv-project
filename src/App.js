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
        { institution: "Harvard1", major: "CS", years: "2012-2016" },
        { institution: "Harvard2", major: "CS", years: "2012-2016" },
      ],
      visible: false,
      workExperienceList: [],
    };
    this.updateEduValue = this.updateEduValue.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
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

  addEdu(){

  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <Photo />
          <GeneralInfo />
        </div>
        <div className="main">
          <div
            className="education"
            onMouseEnter={() => this.setState({ ...this.state, visible: true })}
            onMouseLeave={() =>
              this.setState({ ...this.state, visible: false })
            }
          >
            Education
            {this.state.educationList.map((educationObject) => (
              <div className="educationContainer">
                <Education
                  institution={educationObject.institution}
                  major={educationObject.major}
                  years={educationObject.years}
                  change={this.updateEduValue}
                />
                {this.state.visible ? (
                  <button
                    onClick={(e) => this.deleteEdu(e)}
                    className="deleteButton"
                  >
                    X
                  </button>
                ) : null}
              </div>
            ))}
            {this.state.visible?<button>Add</button>:null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
