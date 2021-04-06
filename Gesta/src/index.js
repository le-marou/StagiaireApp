import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import Firebase,{FirebaseContext} from './components/Firebase'
import StepContext from './StepContext'
ReactDOM.render(
 // <FirebaseContext.Provider value= {new Firebase()}> </FirebaseContext.Provider>
  <StepContext>
  <React.StrictMode>
  <App/>
  </React.StrictMode>
  </StepContext>,
 // ,
  document.getElementById('root')
);

