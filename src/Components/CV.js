import React, { Component } from'react'
import CVEd from './CVEd'
import CVWork from './CVWork'

export default class CV extends Component {
  constructor(props){
    super(props);
}

render(){
  return(
    <div className = "cv--main">
        <div className = "cv--title">
          <h1 className = "cv--title_name"> {this.props.info.first} {this.props.info.last}</h1>
            <p className = "cv--title_title">{this.props.info.title}</p>
          </div>
        <div className = "cv--body">
          <div className = "cv--body_general-info">
            <h2 className = "cv--body_header">Personal Info</h2>
              <div className = "cv--body_info-div">
                <h3 className = "cv--body_info-header">Address:</h3>
                <p className = "cv--body_info-p">{this.props.info.address}</p>
              </div>
              <div className = "cv--body_info-div">
                <h3 className = "cv--body_info-header">Phone Number:</h3>
                <p className = "cv--body_info-p">{this.props.info.phone}</p>
              </div>
              <div className = "cv--body_info-div">
                <h3 className = "cv--body_info-header">Email:</h3>
                <p className = "cv--body_info-p">{this.props.info.email}</p>
              </div>
          </div>

          <div className = "cv--body_experience-section">
            <div className = "cv--body_experience-section-education">
              <h3 className = "cv--body_experience-header">Education</h3>
              <CVEd 
                edForms = {this.props.edForms}
              />
            </div>
            
            <div className = "cv--body_experience-section-work">
              <h3 className = "cv--body_experience-header">Work Experience</h3>
              <CVWork 
              workForms = {this.props.workForms}
              />
            </div>
          
          </div>
        </div>
      </div> 
      
      )
     
     }
     
  }
