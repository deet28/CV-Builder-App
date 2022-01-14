import React, { Component } from 'react'

export default class WorkForm extends Component {
  constructor(props){
    super(props);

  }

render(){
    return(
      <>
      <div  key = {this.props.workForms.id} className = "form--container">
        {this.props.workForms.map((index => (
        <div className = "form--section" key = {index.id}>
          <h2 className = "form--title">Work Experience</h2>
            <input 
              className = "input--primary" 
              placeholder = {"Enter job title"}
              type = "text"
              id = {index.jobtitle.id} 
              onChange = {this.props.handleWorkInput}>
              </input>
            <input 
              className = "input--primary" 
              placeholder = {"Enter company name"}
              id = {index.companyname.id}
              onChange = {this.props.handleWorkInput}>
            </input>
            <input 
              className = "input--primary" 
              placeholder = {"Enter company city"}
              id = {index.companycity.id}
              onChange = {this.props.handleWorkInput}>  
            </input>
            <input 
              className = "input--primary" 
              placeholder = {"Start date"}
              id = {index.startdate.id}
              onChange = {this.props.handleWorkInput}>
            </input>
            <input 
              className = "input--primary" 
              placeholder = {"End date"}
              id = {index.enddate.id}
              onChange = {this.props.handleWorkInput}>
            </input>
            <textarea 
              className = "input--textarea" 
              placeholder = {"Job description"}
              id = {index.description.id}
              onChange = {this.props.handleWorkInput}>
            </textarea>
        
          <button 
            type = "submit" 
            className = "btn--secondary"
            onClick = {this.props.handleRemoveWork}
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
              onClick = {this.props.handleAddWork}
              >
               Add Work
            </button>
        </div>
      </div>
      </>
  )}
}
