import React from 'react';

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        validatedMail: true,
        validatedPassword: true,
    }
  }


  //I can guess that this is a pretty stupid way to go about this
  nextBtnClick = (event) => {
    event.preventDefault();

    if(this.validationMail() && this.validationPassword()) this.props.setCurrentStep(2);
  }

  //html tags validation didn't work properly, so went the manual way to save time 
  //didn't save time...
  validationPassword = () => {
    if((this.props.password == '') || (this.props.password !== this.props.confirmPassword)) {
        this.setState({validatedPassword: false});
        window.alert('Please check your password')
        //failed to call setState sync., don't really understand why, so for now plugged with this return
        return false;
    } else {
        this.setState({validatedPassword: true});
        return true;
    }
  }

  validationMail = () => {
    if((this.props.email == '') || (!/\S+@\S+\.\S+/.test(this.props.email))) {
        this.setState({validatedMail: false});
        window.alert('Please check your e-mail')
        return false;
    } else {
        this.setState({validatedMail: true});
        return true;
    }
  }

  render() {

    if(this.props.currentStep !== 1) return null;

    let validationMailClass = this.state.validatedMail ? '' : 'invalid';
    let validationPasswordClass = this.state.validatedPassword ? '' : 'invalid';

    return (
        <section>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' value={this.props.email} onChange={this.props.handleChange} className={validationMailClass}></input>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={this.props.password} onChange={this.props.handleChange} className={validationPasswordClass}></input>

            <label htmlFor='confirmPassword'>Confirm password</label>
            <input type='password' id='confirmPassword' value={this.props.confirmPassword} onChange={this.props.handleChange} className={validationPasswordClass}></input>

            <button className='nextBtn' onClick={this.nextBtnClick}>Next</button>
        </section>
    )
  }
}

export default Step1;