import React from 'react';
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import ProgressBar from './ProgressBar.js'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      dateOfBirth: '',
      additionalInfo: '',
      symbolsAvailable: 512,
    }
  }

  setCurrentStep = (step) => {
    this.setState({currentStep: step})
  }

  handleChange = (event) => {
    let field = event.target.id;
    let value = event.target.value;

    this.setState({[field]: value})

    if(field == 'additionalInfo') this.calculateSymbols();
  }

  calculateSymbols = (event) => {
    let available = 512 - this.state.additionalInfo.length-1;
    if(available < 0) available = 0;
    this.setState({symbolsAvailable: available}) 
  }

  submitForm = (event) => {
    event.preventDefault();
    window.alert('Submitted')
    this.setState({
      currentStep: 1,
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      dateOfBirth: '',
      additionalInfo: '',
      symbolsAvailable: 512,
    })
  }

  //Passing the entire state to the Step components (like in step 3) is an option to make it shorter, but I'm not sure which is the better practice

  render() {
    return (
      <>
        <ProgressBar currentStep={this.state.currentStep}/>
        <form>
          <Step1 
            currentStep = {this.state.currentStep}
            email = {this.state.email}
            password = {this.state.password}
            confirmPassword = {this.state.confirmPassword}
            handleChange = {this.handleChange}
            setCurrentStep = {this.setCurrentStep}
          />
          <Step2 
            currentStep = {this.state.currentStep}
            name = {this.state.name}
            dateOfBirth = {this.state.dateOfBirth}
            additionalInfo = {this.state.additionalInfo}
            handleChange = {this.handleChange}
            symbolsAvailable = {this.state.symbolsAvailable}
            setCurrentStep = {this.setCurrentStep}
          />
          <Step3 
            currentStep = {this.state.currentStep}
            setCurrentStep = {this.setCurrentStep}
            submitForm = {this.submitForm}
            info = {this.state}
          />
        </form>
      </>
    )
  }
}

export default RegistrationForm;
