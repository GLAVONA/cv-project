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
      educationVisible: false,
      workExpVisible: false,
      workExperienceList: [],
    };
    this.updateEduValue = this.updateEduValue.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.addWorkExp = this.addWorkExp.bind(this);
    this.updateWorkExpValue = this.updateWorkExpValue.bind(this);
    this.deleteWorkExp = this.deleteWorkExp.bind(this);
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

  deleteWorkExp(e){
    const newArr = this.state.workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    newArr.splice(index, 1);
    this.setState({
      ...this.state,
      workExperienceList: newArr,
    });
  }

  addEdu(){
    const newEdu = {institution:"",major:"",years:""}
    this.setState({
      ...this.state,
      educationList: this.state.educationList.concat(newEdu)
    })
  }

  addWorkExp(){
    const newWorkExp = {companyName:"",position:"",responsibilities:"",dateFrom:"",dateTo:""}
    this.setState({
      ...this.state,
      workExperienceList: this.state.workExperienceList.concat(newWorkExp)
    })
  }


  updateWorkExpValue(e) {
    const newArr = this.state.workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    this.setState({
      ...this.state,
      workExperienceList: newArr,
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
          <div
            className="education"
            onMouseEnter={() => this.setState({ ...this.state, educationVisible: true })}
            onMouseLeave={() =>
              this.setState({ ...this.state, educationVisible: false })
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
                {this.state.educationVisible ? (
                  <button
                    onClick={(e) => this.deleteEdu(e)}
                    className="deleteEduButton"
                  >
                    X
                  </button>
                ) : null}
              </div>
            ))}
            {this.state.educationVisible?<button onClick={this.addEdu} >Add</button>:null}
          </div>
          <div
            className="workExp"
            onMouseEnter={() => this.setState({ ...this.state, workExpVisible: true })}
            onMouseLeave={() =>
              this.setState({ ...this.state, workExpVisible: false })
            }
          >
            Work Experience
            {this.state.workExperienceList.map((wEObject) => (
              <div className="workExperienceContainer">
              {this.state.workExpVisible ? (
                  <button
                    onClick={(e) => this.deleteWorkExp(e)}
                    className="deleteWorkButton"
                  >
                    X
                  </button>
                ) : null}
                <WorkExperience
                companyName={wEObject.companyName}
                position = {wEObject.position}
                responsibilities = {wEObject.responsibilities}
                dateFrom = {wEObject.dateFrom}
                dateTo = {wEObject.dateTo}
                change = {this.updateWorkExpValue}
                />
         

              </div>
            ))}
            {this.state.workExpVisible?<button onClick={this.addWorkExp} >Add</button>:null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
