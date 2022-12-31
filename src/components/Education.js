import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      education: {
        institution: "",
        yearsFrom: "",
        yearsTo: "",
        major: "",
      },
      educationArray: [],
      submittable: false,
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
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (
      <div className="education">
        <div className="education-header">EDUCATION</div>
        <form className="educationContainer" onSubmit={this.onSubmitForm}>
          <label htmlFor="institution">Institution:</label>
          <input
            name="institution"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="Institution"
          />
          <label htmlFor="major">Major:</label>
          <input
            name="major"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="Major"
          />
          <label htmlFor="years">Years:</label>
          <div className="years">
            <input
              name="yearsFrom"
              onClick={this.makeEditable}
              defaultValue={this.state.firstName}
              onChange={this.updateInfo}
              placeholder="Years From:"
            />
            <input
              name="yearsTo"
              onClick={this.makeEditable}
              defaultValue={this.state.firstName}
              onChange={this.updateInfo}
              placeholder="Years To:"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
