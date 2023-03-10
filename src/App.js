import "./styles/styles.css";
import React, { useEffect, useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Photo from "./components/Photo";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [appState, setAppState] = useState({
    educationVisible: false,
    workExpVisible: false,
  });

  const [educationList, setEducationList] = useState([]);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [photoURL, setPhotoURL] = useState("https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  const [photoProvided, setPhotoProvided] = useState(false);

  const updateEduValue = (e) => {
    const newArr = educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    setEducationList([...newArr]);
  };

  const deleteEdu = (e) => {
    const newArr = educationList;
    const index = Array.from(
      e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);
    newArr.splice(index, 1);
    setEducationList([...newArr]);
  };

  const deleteWorkExp = (e) => {
    const newArr = workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    newArr.splice(index, 1);
    setWorkExperienceList([...workExperienceList]);
  };

  const addEdu = () => {
    const newEdu = { institution: "", major: "", years: "" };
    const joined = educationList.concat(newEdu);
    setEducationList(joined);
  };

  const addWorkExp = () => {
    const newWorkExp = {
      companyName: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    };
    const joined = workExperienceList.concat(newWorkExp);
    setWorkExperienceList(joined);
  };

  const updateWorkExpValue = (e) => {
    const newArr = workExperienceList;
    const index = Array.from(
      e.target.parentElement.parentElement.parentElement.parentElement.children
    ).indexOf(e.target.parentElement.parentElement.parentElement);
    const tarName = e.target.name;
    newArr[index][tarName] = e.target.value;
    setWorkExperienceList([...newArr]);
  };

  const showURLInput = (e)=>{
    setPhotoProvided(!e);
  }

  const changePhoto = () => {
    const photoURLInput = document.getElementById("photoURL").value;
    setPhotoURL(photoURLInput);
    setPhotoProvided(true);        
  };

  return (
    <div className="app">
      <div className="header"onMouseLeave={()=>showURLInput(false)}>
        <div className="photo">
          <Photo src={photoURL} mouseover={()=>showURLInput(true)}/>
          {!photoProvided?
            (<><input type="text" placeholder="Photo URL:" id="photoURL"/>
            <button onClick={changePhoto}>Submit</button></>)
            :null
          }
        </div>
        <GeneralInfo />
      </div>
      <div className="main">
        <div
          className="education"
          onMouseEnter={() => setAppState({ educationVisible: true })}
          onMouseLeave={() => setAppState({ educationVisible: false })}
        >
          Education
          {educationList.map((educationObject) => (
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
          onMouseEnter={() => setAppState({ workExpVisible: true })}
          onMouseLeave={() => setAppState({ workExpVisible: false })}
        >
          Work Experience
          {workExperienceList.map((wEObject) => (
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
