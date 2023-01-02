import React from "react";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="workExperienceForm" onSubmit={this.onSubmitForm}>
        <div className="workExperienceInput">
          <label htmlFor="companyName">Company Name: </label>
          <input
            name="companyName"
            placeholder="e.g. Microsoft"
            value={this.props.companyName}
            onClick={(e) => e.target.select()}
            onChange={this.props.change}
          />
        </div>
        <div className="workExperienceInput">
          <label htmlFor="position">Position: </label>
          <input
            name="position"
            placeholder="e.g. Account Manager"
            value={this.props.position}
            onClick={(e) => e.target.select()}
            onChange={this.props.change}
          />
        </div>
        <div className="workExperienceInput responsibilities">
          <label htmlFor="responsibilities">Responsibilities: </label>
          <input
            name="responsibilities"
            placeholder="e.g. Managing the key accounts; Preparing sales reports"
            value={this.props.responsibilities}
            onClick={(e) => e.target.select()}
            onChange={this.props.change}
          />
        </div>
          <div className="workExperienceInput">
              <label htmlFor="dateFrom">Date From: </label>
              <input
                name="dateFrom"
                placeholder="e.g. 10-12-2022"
                value={this.props.dateFrom}
                onClick={(e) => e.target.select()}
                onChange={this.props.change}
              />
          </div>
          <div className="workExperienceInput">
              <label htmlFor="dateTo">Date To: </label>
              <input
                name="dateTo"
                placeholder="e.g. 06-08-2024"
                value={this.props.dateTo}
                onClick={(e) => e.target.select()}
                onChange={this.props.change}
              />
          </div>
      </form>
    );
  }
}

export default WorkExperience;
