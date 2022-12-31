import React from "react";

class WorkExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
  }

  makeEditable(e) {
    e.target.select();
    e.target.classList.add("edit");
    console.log(this.state);
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="workExperience">
        <form className="workExperienceContainer" onSubmit={this.onSubmitForm}>
          <div className="workExperienceInput">
            <label htmlFor="companyName">Company Name: </label>
            <input
              name="companyName"
              onClick={this.makeEditable}
              defaultValue={this.state.companyName}
              onChange={this.updateInfo}
              placeholder="e.g. Microsoft"
            />
          </div>
          <div className="workExperienceInput">
            <label htmlFor="position">Position: </label>
            <input
              name="position"
              onClick={this.makeEditable}
              defaultValue={this.state.position}
              onChange={this.updateInfo}
              placeholder="e.g. Account Manager"
            />
          </div>
          <div className="workExperienceInput responsibilities">
            <label htmlFor="responsibilities">Responsibilities: </label>
            <input
              name="responsibilities"
              onClick={this.makeEditable}
              defaultValue={this.state.responsibilities}
              onChange={this.updateInfo}
              placeholder="e.g. Managing the key accounts; Preparing sales reports"
            />
          </div>
          <div className="dates">
            <label htmlFor="dateFrom">Date From: </label>
            <input
              name="dateFrom"
              onClick={this.makeEditable}
              defaultValue={this.state.dateFrom}
              onChange={this.updateInfo}
              placeholder="e.g. 10-12-2022"
            />{" "}
            <label htmlFor="dateTo">Date To: </label>
            <input
              name="dateTo"
              onClick={this.makeEditable}
              defaultValue={this.state.dateTo}
              onChange={this.updateInfo}
              placeholder="e.g. 06-08-2024"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
