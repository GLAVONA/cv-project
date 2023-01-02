import "./styles/styles.css";
import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education ,{currentIndex} from "./components/Education";
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
    this.removeThisWorkExp = this.removeThisWorkExp.bind(this);
  }

  removeThisEducation(e) {
    this.setState({
        ...this.state,
        educationList: this.state.educationList.filter((_,i)=>i!==e),
    })
  }

  removeThisWorkExp(e) {
    this.setState({
        ...this.state,
        workExperienceList: this.state.workExperienceList.filter((_,i)=>i!==e),
    })
  }

  addNewEducation() {
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
            </div>
          ))}
          <button onClick={this.addNewEducation}>Add</button>
          <button onClick={() => this.removeThisEducation(this.state.educationList.length-1)}>Delete Last</button>
          <div className="workexp-header header">WORK EXPERIENCE</div>
          {this.state.workExperienceList}
          <button onClick={this.addNewWorkExp}>Add</button>
          <button onClick={() => this.removeThisWorkExp(this.state.workExperienceList.length-1)}>Delete Last</button>
        </div>
      </div>
    );
  }
}

export default App;
