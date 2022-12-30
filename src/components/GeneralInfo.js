import React from "react";

class GeneralInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "+123 456 789 098",
      email: "thisismyemail@email.com",
      linkedInURL: "linkedin.com/mylinkedin",
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
  }

  makeEditable(e) {
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="names">
            <input
              name="firstName"
              onClick={this.makeEditable}
              defaultValue={this.state.firstName}
              onChange={this.updateInfo}
            />
            <input
              name="lastName"
              onClick={this.makeEditable}
              defaultValue={this.state.lastName}
              onChange={this.updateInfo}
            />
        </div>
        <div className="additional-info">
            <input
              name="phoneNumber"
              onClick={this.makeEditable}
              defaultValue={this.state.phoneNumber}
              onChange={this.updateInfo}
            />
            <input
              name="email"
              onClick={this.makeEditable}
              defaultValue={this.state.email}
              onChange={this.updateInfo}
            />
            <input
              name="linkedInURL"
              onClick={this.makeEditable}
              defaultValue={this.state.linkedInURL}
              onChange={this.updateInfo}
            />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
