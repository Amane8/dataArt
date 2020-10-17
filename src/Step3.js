import React from 'react';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  submitData = (event) => {
    event.preventDefault();
    window.alert('Submitted')
  }

  prevBtnClick = (event) => {
    this.props.setCurrentStep(2);
  }

  // Thought renderind everything as key-value was a good idea, but faced issues with names and the fields that shouldn't be there
  // Left it as a comment to at least show the idea 
  render() {

    if(this.props.currentStep !== 3) return null;

    return (
      <section>
        <h2>Please confirm your information</h2>
        <dl>
          {/* {Object.keys(this.props.info).map( key => {
            return (
              <div>
                <dt>{key}</dt>
                <dd>{this.props.info[key]}</dd>
              </div>
            )
          })} */}

          <div>
            <dt>E-mail</dt>
            <dd>{this.props.info.email}</dd>
          </div>
          <div>
            <dt>Password</dt>
            <dd>{this.props.info.password}</dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{this.props.info.name}</dd>
          </div>
          <div>
            <dt>Date of Birth</dt>
            <dd>{this.props.info.dateOfBirth}</dd>
          </div>
          <div>
            <dt>Additional Information</dt>
            <dd>{this.props.info.additionalInfo}</dd>
          </div>
        </dl>
        <div className='controlBtn'>
          <button className='prevBtn' onClick={this.prevBtnClick}>Previous</button>
          <button onClick={this.props.submitForm}>Submit (fake)</button>
        </div>
      </section>
    )
  }
}

export default Step3;