import React, { Component } from 'react'

export default class EducationForm extends Component {
  constructor(props){
    super(props);
  }
render(){
    return(
      <>
      <div  key = {this.props.edForms.id} className = "form--container">
        {this.props.edForms.map((index => (
        <div className = "form--section" key = {index.id}>
          <h2 className = "form--title">Education</h2>
            <input 
              className = "input--primary" 
              placeholder = {"Enter school name"}
              type = "text"
              id = {index.schoolname.id} 
              onChange = {this.props.handleEducationInput}>
              </input>
            <input 
              className = "input--primary" 
              placeholder = {"Enter school city"}
              id = {index.schoolcity.id}
              onChange = {this.props.handleEducationInput}>
            </input>
            <input 
              className = "input--primary" 
              placeholder = {"Subject of study"}
              id = {index.subject.id}
              onChange = {this.props.handleEducationInput}>  
            </input>
            <input 
              className = "input--primary" 
              placeholder = {"Degree earned"}
              id = {index.degree.id}
              onChange = {this.props.handleEducationInput}>
            </input>
        
          <button 
            type = "submit" 
            className = "btn--secondary"
            onClick = {this.props.handleRemoveEducation}
            id = {index.id}
            >
              Remove
          </button>
        </div>
        )))}
          <div>
            <button 
              type = "submit"
              className = "btn"
              onClick = {this.props.handleAddEducation}
              >
               Add Education
            </button>
        </div>
      </div>
      </>
    
    
  )}
}

