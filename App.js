import React from 'react';
import LoginPage from './Pages/LoginPage';
import {Provider} from 'react-redux'
// ---------------------Custom Imports for redux---------------------------
import store from './Store/store.js'
// ------------------------------------------------


const App = ()=> {
  return(
    <>
      <Provider store={store}>
        <LoginPage></LoginPage>
      </Provider>
    </>
  )
};


export default App;
