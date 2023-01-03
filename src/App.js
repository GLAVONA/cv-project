import "./styles/styles.css";
import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Photo from "./components/Photo";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [appState, setAppState] = useState({
    educationList: [],
    educationVisible: false,
    workExpVisible: false,
    workExperienceList: [],
  });

  const updateEduValue = (e) => {
    const newArr = appState.educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    setAppState({
      ...appState,
      educationList: newArr,
    });
  };

  const deleteEdu = (e) => {
    const newArr = appState.educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);
    newArr.splice(index, 1);
    setAppState({
      educationList: newArr,
    });
  };

  const deleteWorkExp = (e) => {
    const newArr = appState.workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    newArr.splice(index, 1);
    setAppState({
      workExperienceList: newArr,
    });
  };

  const addEdu = () => {
    const newEdu = { institution: "", major: "", years: "" };
    setAppState({
      ...appState,
      educationList: appState.educationList.concat(newEdu),
    });
  };

  const addWorkExp = () => {
    const newWorkExp = {
      companyName: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    };
    setAppState({
      ...appState,
      workExperienceList: appState.workExperienceList.concat(newWorkExp),
    });
  };

  const updateWorkExpValue = (e) => {
    const newArr = appState.workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    setAppState({
      ...appState,
      workExperienceList: newArr,
    });
  };

  return (
    <div className="app">
      <div className="header">
        <Photo />
        <GeneralInfo />
      </div>
      <div className="main">
        <div
          className="education"
          onMouseEnter={() =>
            setAppState({ ...appState, educationVisible: true })
          }
          onMouseLeave={() =>
            setAppState({ ...appState, educationVisible: false })
          }
        >
          Education
          {appState.educationList.map((educationObject) => (
            <div className="educationContainer">
              <Education
                institution={educationObject.institution}
                major={educationObject.major}
                years={educationObject.years}
                change={updateEduValue}
              />
              {appState.educationVisible ? (
                <button
                  onClick={(e) => deleteEdu(e)}
                  className="deleteEduButton"
                >
                  X
                </button>
              ) : null}
            </div>
          ))}
          <div className="addEduDiv">
            {appState.educationVisible ? (
              <button onClick={addEdu}>Add</button>
            ) : null}
          </div>
        </div>
        <div
          className="workExp"
          onMouseEnter={() =>
            setAppState({ ...appState, workExpVisible: true })
          }
          onMouseLeave={() =>
            setAppState({ ...appState, workExpVisible: false })
          }
        >
          Work Experience
          {appState.workExperienceList.map((wEObject) => (
            <div className="workExperienceContainer">
              {appState.workExpVisible ? (
                <button
                  onClick={(e) => deleteWorkExp(e)}
                  className="deleteWorkButton"
                >
                  X
                </button>
              ) : null}
              <WorkExperience
                companyName={wEObject.companyName}
                position={wEObject.position}
                responsibilities={wEObject.responsibilities}
                dateFrom={wEObject.dateFrom}
                dateTo={wEObject.dateTo}
                change={updateWorkExpValue}
              />
            </div>
          ))}
          {appState.workExpVisible ? (
            <button onClick={addWorkExp}>Add</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
