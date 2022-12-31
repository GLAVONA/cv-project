import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      education: {
        institution: "",
        years: "",
        major: "",
      },
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
        <form className="educationContainer" onSubmit={this.onSubmitForm}>
          <label htmlFor="institution">Institution: </label>
          <input
            name="institution"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="e.g. Harvard University"
          />
          <label htmlFor="major">Major: </label>
          <input
            name="major"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="e.g. Computer Science"
          />
          <label htmlFor="years">Years: </label>
          <input
            name="years"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="eg. 2012-2016"
          />
        </form>
      </div>
    );
  }
}

export default Education;
