import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';

function App (): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
