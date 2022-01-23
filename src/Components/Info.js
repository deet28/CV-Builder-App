import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Info extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className = 'form--container'>
      <div className = 'form--section' id = {uuidv4()}>
        <h2 className = 'form--title'>Personal Info</h2>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "First Name" 
          onChange = {this.props.handleFirstName}>
        </input>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "Last Name"
          onChange = {this.props.handleLastName}>
        </input>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "Title"
          onChange = {this.props.handleTitle}>
        </input>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "Address"
          onChange = {this.props.handleAddress}>
        </input>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "Phone Number"
          onChange = {this.props.handlePhone}>
        </input>
        <input 
          className = "input--primary" 
          type = "text" 
          placeholder = "Email"
          onChange = {this.props.handleEmail}>
        </input>
      </div>
    </div>
    )
  }
}

