import React, { Component, useState } from 'react'
import Info from './Info'
import EducationForm from './EducationForm'
import WorkForm from './WorkForm'
import CV from './CV'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info:{
        first:'',
        last:'',
        job:'',
        address:'',
        phone:'',
        email:''
      },
      edForms:
      [
        {
          id:uuidv4(),
          schoolname:{value:"",id:uuidv4()},
          schoolcity:{value:"",id:uuidv4()},
          subject:{value:"",id:uuidv4()},
          degree:{value:"",id:uuidv4()}
          
        },
      ],
      workForms:
      [
        {
          id:uuidv4(),
          jobtitle:{value:"",id:uuidv4()},
          companyname:{value:"",id:uuidv4()},
          companycity:{value:"",id:uuidv4()},
          startdate:{value:"",id:uuidv4()},
          enddate:{value:"",id:uuidv4()},
          description:{value:"",id:uuidv4()}
        },
      ],
      
      }
    
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
    this.handleEmail = this.handleEmail.bind(this)

    this.handleAddEducation = this.handleAddEducation.bind(this)
    this.handleRemoveEducation = this.handleRemoveEducation.bind(this)
    this.handleEducationInput = this.handleEducationInput.bind(this)

    this.handleAddWork = this.handleAddWork.bind(this)
    this.handleRemoveWork = this.handleRemoveWork.bind(this)
    this.handleWorkInput = this.handleWorkInput.bind(this)
} 

//info
handleFirstName(e){
  this.setState({
    first:this.state.info.first = e.target.value
  })
  return this.state.info.first
}
handleLastName(e){
  this.setState({
    last:this.state.info.last = e.target.value
  })
  return this.state.info.last
}
handleTitle(e){
  this.setState({
    title:this.state.info.title = e.target.value
  })
  return this.state.info.title
}
handleAddress(e){
  this.setState({
    address:this.state.info.address = e.target.value
  })
  return this.state.info.address
}
handlePhone(e){
  this.setState({
    phone:this.state.info.phone = e.target.value
  })
  return this.state.info.phone
}
handleEmail(e){
  this.setState({
    email:this.state.info.email = e.target.value
  })
  return this.state.info.email
}

//education

handleAddEducation(){
  const newEducation = {
    id:uuidv4(),
    schoolname:{value:"",id:uuidv4()},
    schoolcity:{value:"",id:uuidv4()},
    subject:{value:"",id:uuidv4()},
    degree:{value:"",id:uuidv4()}
    
  }
  this.setState ({
    edForms:this.state.edForms.concat(newEducation)
  })
  return this.state.edForms
};

handleRemoveEducation(e){
  this.setState({
    edForms:this.state.edForms.filter(forms => forms.id !==e.target.id)
  })
  return this.state.edForms
}

handleEducationInput(e){
  e.preventDefault()
  for(let i = 0; i < this.state.edForms.length; i++){
    Object.values(this.state.edForms[i]).forEach(value => {
      if (e.target.id == value.id){
        let temp = value
        let valueWord = e.target.value
      this.updateEducationInput(temp,valueWord)
    }
  })
  }
}

updateEducationInput(val,valueWord){
  this.setState({
    val:val.value = valueWord
  })
return this.state.edForms
}

//work

handleAddWork(){
  const newJob = {
    id:uuidv4(),
    jobtitle:{value:"",id:uuidv4()},
    companyname:{value:"",id:uuidv4()},
    companycity:{value:"",id:uuidv4()},
    startdate:{value:"",id:uuidv4()},
    enddate:{value:"",id:uuidv4()},
    description:{value:"",id:uuidv4()}
  }
  this.setState ({
    workForms:this.state.workForms.concat(newJob)
  })
  return this.state.workForms
};

handleRemoveWork(e){
  this.setState({
    workForms:this.state.workForms.filter(forms => forms.id !==e.target.id)
  })
  return this.state.workForms
}


handleWorkInput(e){
  e.preventDefault()
  for(let i = 0; i < this.state.workForms.length; i++){
    Object.values(this.state.workForms[i]).forEach(value => {
      if (e.target.id == value.id){
        let temp = value
        let valueWord = e.target.value
      this.updateWorkInput(temp,valueWord)
    }
  })
  }
}

updateWorkInput(val,valueWord){
  this.setState({
    val:val.value = valueWord
  })
return this.state.workForms
}

render(){
    return (

    <div>
      <div className = "app--header">
        <h1>CV Builder</h1>
      </div>
      <Info
        handleFirstName = {this.handleFirstName}
        handleLastName = {this.handleLastName}
        handleTitle = {this.handleTitle}
        handleAddress = {this.handleAddress}
        handlePhone = {this.handlePhone}
        handleEmail = {this.handleEmail}
      />
      <EducationForm
        handleAddEducation = {this.handleAddEducation}
        handleRemoveEducation = {this.handleRemoveEducation}
        handleEducationInput = {this.handleEducationInput}
        edForms = {this.state.edForms}
      />
      <WorkForm
        handleAddWork = {this.handleAddWork}
        handleRemoveWork = {this.handleRemoveWork}
        handleWorkInput = {this.handleWorkInput}
        workForms = {this.state.workForms}
      />

       <CV 
        info = {this.state.info}
        edForms = {this.state.edForms}
        workForms = {this.state.workForms}
        renderEdForms = {this.renderEdForms}
      />
    </div>
    )
  }
}

export default App;
