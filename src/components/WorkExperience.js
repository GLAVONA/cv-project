import React from "react";

class WorkExperience extends React.Component {
  constructor() {
    super();
    this.state={

    };
  }

  render() {
    return (
      <div className="workExperience">
        <form className="workExperienceContainer" onSubmit={this.onSubmitForm}>
          <div className="workExperienceInput">
            <label htmlFor="companyName">Company Name: </label>
            <input
              name="companyName"
              placeholder="e.g. Microsoft"
            />
          </div>
          <div className="workExperienceInput">
            <label htmlFor="position">Position: </label>
            <input
              name="position"
              placeholder="e.g. Account Manager"
            />
          </div>
          <div className="workExperienceInput responsibilities">
            <label htmlFor="responsibilities">Responsibilities: </label>
            <input
              name="responsibilities"
              placeholder="e.g. Managing the key accounts; Preparing sales reports"
            />
          </div>
          <div className="dates">
            <label htmlFor="dateFrom">Date From: </label>
            <input
              name="dateFrom"
              placeholder="e.g. 10-12-2022"
            />
            <label htmlFor="dateTo">Date To: </label>
            <input
              name="dateTo"
              placeholder="e.g. 06-08-2024"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
