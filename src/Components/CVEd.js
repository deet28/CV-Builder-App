import React, { Component } from'react'


export default class CVEd extends Component {
  constructor(props){
    super(props);
}

render(){
  return(
    <>
     <>
      <div  key = {this.props.edForms.id} className = "cv--body_education-children">
        {this.props.edForms.map((index => (
        <div className = "cv--body_education-children" key = {index.id}>
          <p className = "cv--body_school">{index.schoolname.value+', '}&nbsp;{index.schoolcity.value}</p>
          <p className = "cv--body_subject">Subject:{index.subject.value}</p>
          <p className = "cv--body_degree">Degree:{index.degree.value}</p>
        </div>
        )))}
      </div>
      </>
     
    </>

      )
    
     
    }
     
  }