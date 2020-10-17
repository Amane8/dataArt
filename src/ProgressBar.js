import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    //Didn't have anough time left for anything more decent
    let result;
    let currentStep = this.props.currentStep;
    if(currentStep == 1) {
        result = (
            <div id='progressBar'>
                <div className='active'>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        )
    } else if (currentStep == 2) {
        result = (
            <div id='progressBar'>
                <div className='available'>1</div>
                <div className='active'>2</div>
                <div>3</div>
            </div>
        )
    } else {
        result = (
            <div id='progressBar'>
                <div className='available'>1</div>
                <div className='available'>2</div>
                <div className='active'>3</div>
            </div>
        )
    }

    return (
        <div>{result}</div>
    )
  }
}

export default ProgressBar;