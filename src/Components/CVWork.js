import React, { Component } from'react'


export default class CVWork extends Component {
  constructor(props){
    super(props);
}
render(){
  return(
    <>
     <>
      <div  key = {this.props.workForms.id} className = "cv--body_work-children">
        {this.props.workForms.map((index => (
        <div className = "cv--body_work-children" key = {index.id}>
          <p className = "cv--body_job-title">{index.jobtitle.value}</p>
          <p className = "cv--body_company">{index.companyname.value+', '}&nbsp;{index.companycity.value}</p>
            <div className = "cv--body_date-div">
              <p className = "cv--body_start-date">From:{index.startdate.value}</p>
              <p className = "cv--body_end-date">To:{index.enddate.value}</p>
            </div>
            <p className = "cv--body_description">Job Description:</p>
            <p className = "cv--body_work-description">{index.description.value}</p>
          </div>
        )))}
      </div>
      </>
     
    </>

      )
    
     
    }
     
  }