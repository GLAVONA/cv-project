import "./styles/styles.css";
import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Photo from "./components/Photo";

class App extends React.Component {

    constructor(){
        super();
        this.state={
            educationList:[],
        }

        this.addNewEducation = this.addNewEducation.bind(this);
    }

    addNewEducation(){
        this.setState({
            educationList: this.state.educationList.concat(<Education/>)
        })
    }

  render() {
    return <div className="app">
        <div className="header">
            <Photo/>
            <GeneralInfo/>
        </div>
        <div className="main">
        <div className="education-header">EDUCATION</div>
            <Education/>
            {this.state.educationList}
            <button onClick={this.addNewEducation}>Add</button>

        </div>
    </div>;
  }
}

export default App;
