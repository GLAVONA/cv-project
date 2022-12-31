import React from "react";
import {makeEditable, updateInfo} from '../utilities/utils'

class GeneralInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      photoURL: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    e.target.select();
    e.target.classList.add("edit");
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    return (
      <div className="generalInfo">
        <div className="names">
          <input
            name="firstName"
            onClick={this.makeEditable}
            defaultValue={this.state.firstName}
            onChange={this.updateInfo}
            placeholder="First name"
          />
          <input
            name="lastName"
            onClick={this.makeEditable}
            defaultValue={this.state.lastName}
            onChange={this.updateInfo}
            placeholder="Last name"
          />
        </div>
        <div className="additional-info">
          <input
            name="phoneNumber"
            onClick={this.makeEditable}
            defaultValue={this.state.phoneNumber}
            onChange={this.updateInfo}
            placeholder="Phone number"
          />
          <input
            name="email"
            type="email"
            onClick={this.makeEditable}
            defaultValue={this.state.email}
            onChange={this.updateInfo}
            placeholder="Email"
          />
          <input
            name="linkedInURL"
            onClick={this.makeEditable}
            defaultValue={this.state.linkedInURL}
            onChange={this.updateInfo}
            placeholder="LinedIn URL"
          />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
