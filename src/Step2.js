import React from 'react';

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validatedName: true,
      validatedDate: true,
    }
  }

  prevBtnClick = (event) => {
    this.props.setCurrentStep(1);
  }

  nextBtnClick = (event) => {
    event.preventDefault();

    if(this.validationName() && this.validationDate()) this.props.setCurrentStep(3);
  }

  validationName() {
    if(this.props.name == '') {
      this.setState({validatedName: false});
      window.alert('Please check your name')
      return false;
    } else {
      this.setState({validatedName: true})
      return true;
    }
  }

  validationDate() {
    let today = new Date();
    let inputDate = new Date(this.props.dateOfBirth);
      if ((inputDate == 'Invalid Date') || (inputDate.getTime() > today.getTime())){
        this.setState({validatedDate: false})
        window.alert('Please check your Date of Birth')
        return false;
      } else {
        this.setState({validatedDate: true})
        return true;
      }
  }

  render() {

    if(this.props.currentStep !== 2) return null;

    let validationNameClass = this.state.validatedName ? '' : 'invalid';
    let validationDateClass = this.state.validatedDate ? '' : 'invalid';

    return (
      <section>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={this.props.name} onChange={this.props.handleChange} className={validationNameClass}></input>

        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <input type="date" id='dateOfBirth' max="2020-10-17" value={this.props.dateOfBirth} onChange={this.props.handleChange} className={validationDateClass}></input>

        <label htmlFor='additionalInfo'>Additional Information</label>
        <p id='symbolsAvailable'>Symbols available: {this.props.symbolsAvailable}</p>
        <textarea id='additionalInfo' value={this.props.additionalInfo} onChange={this.props.handleChange} maxLength='512'></textarea>
        <div className='controlBtn'>
          <button className='prevBtn' onClick={this.prevBtnClick}>Previous</button>
          <button className='nextBtn' onClick={this.nextBtnClick}>Next</button>
        </div>
      </section>
    )
  }
}

export default Step2;