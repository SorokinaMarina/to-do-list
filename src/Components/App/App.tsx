import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App (): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
