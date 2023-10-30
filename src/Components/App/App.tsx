import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App (): JSX.Element {

  const [isLoggedIn, setIsLoggedIn] = React.useState <boolean> (false);


  return (
    <div className="app">
      <Routes>
        <Route path='/sign-up' element={<ProtectedRoute element={Register} isLoggedIn={!isLoggedIn} />} />
        <Route path='/sign-in' element={<ProtectedRoute element={Login} isLoggedIn={!isLoggedIn} />} />
        <Route path='/' element={<ProtectedRoute element={Main} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
