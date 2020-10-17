import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter } from "react-router-dom";

//What I really failed at:
//Router - can't figure out how to push the change without the <Link> (found some soultions with hooks, but decided not to refactor classes to Functions ->
//      might break something else and already out of time
//Synchronous setState calls - should be really easy with a callback option but doesn't work, probably missing something obvious here but for now plugged it in
//      with some return statements. Looks horrible but works. (remaining symbols in textarea are not always correct because of this)
//I know that there are available solutions for forms, validations and ets.

//Things I'd do better given more time:
//The validation right now works(more or less) but is pretty basic and the code is meh...
//Showing mistakes on validation as an alert is very bad, I know, so there should be a custom pop up of some sorts
//Calendar for Date of birth might cause problems on Safari
//Design was sacrifised completely - css is messy. Looks aside, it should work on mobile

ReactDOM.render(
  <BrowserRouter>
    <RegistrationForm />
  </BrowserRouter>,
  document.getElementById('root')
);

