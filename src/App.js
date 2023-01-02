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
      educationList: [],
      workExperienceList: [],
    };

    this.addNewEducation = this.addNewEducation.bind(this);
    this.addNewWorkExp = this.addNewWorkExp.bind(this);
    this.removeThisEducation = this.removeThisEducation.bind(this);
    // this.removeThisWorkExp = this.removeThisWorkExp.bind(this);
  }

  removeThisEducation(e) {
    this.setState({
        ...this.state,
        educationList: this.state.educationList.filter((_,i)=>i!==e),
    })
  }

//   removeThisWorkExp(e) {
//     this.setState({
//       ...this.state,
//       workExperienceList: this.state.workExperienceList.filter(
//         (_, i) => i !== e
//       ),
//     });
//   }

  addNewEducation() {
    console.log(this.state.educationList)
    this.setState({
      ...this.state,
      educationList: this.state.educationList.concat(<Education />),
    });
  }

  addNewWorkExp() {
    this.setState({
      ...this.state,
      workExperienceList: this.state.workExperienceList.concat(
        <WorkExperience />
      ),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <Photo />
          <GeneralInfo />
        </div>
        <div className="main">
          <div className="education-header header">EDUCATION</div>
          {this.state.educationList.map((edu, index) => (
            <div className="education">
              {edu}
              {
                <button onClick={() => this.removeThisEducation(index)}>
                  X
                </button>
              }
              {this.state.testList}
            </div>
          ))}
          <button onClick={this.addNewEducation}>Add</button>
          <div className="workexp-header header">WORK EXPERIENCE</div>
          {this.state.workExperienceList}
          <button onClick={this.addNewWorkExp}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
