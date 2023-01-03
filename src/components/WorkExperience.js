import React from "react";

function WorkExperience (props) {

    return (
      <form className="workExperienceForm">
        <div className="workExperienceInput">
          <label htmlFor="companyName">Company Name: </label>
          <input
            name="companyName"
            placeholder="e.g. Microsoft"
            value={props.companyName}
            onClick={(e) => e.target.select()}
            onChange={props.change}
          />
        </div>
        <div className="workExperienceInput">
          <label htmlFor="position">Position: </label>
          <input
            name="position"
            placeholder="e.g. Account Manager"
            value={props.position}
            onClick={(e) => e.target.select()}
            onChange={props.change}
          />
        </div>
        <div className="workExperienceInput responsibilities">
          <label htmlFor="responsibilities">Responsibilities: </label>
          <input
            name="responsibilities"
            placeholder="e.g. Managing the key accounts; Preparing sales reports"
            value={props.responsibilities}
            onClick={(e) => e.target.select()}
            onChange={props.change}
          />
        </div>
          <div className="workExperienceInput">
              <label htmlFor="dateFrom">Date From: </label>
              <input
                name="dateFrom"
                placeholder="e.g. 10-12-2022"
                value={props.dateFrom}
                onClick={(e) => e.target.select()}
                onChange={props.change}
              />
          </div>
          <div className="workExperienceInput">
              <label htmlFor="dateTo">Date To: </label>
              <input
                name="dateTo"
                placeholder="e.g. 06-08-2024"
                value={props.dateTo}
                onClick={(e) => e.target.select()}
                onChange={props.change}
              />
          </div>
      </form>
    );
  }

export default WorkExperience;
