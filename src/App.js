import React from 'react';
import './App.css';



import {BrowserRouter} from 'react-router-dom'
import AppRoute from './Assetes/Ruters/AppRoute';
function App() {
  return (
    <div>
          <BrowserRouter>
             <AppRoute/>
          </BrowserRouter>
    </div>
  );
}

export default App;
