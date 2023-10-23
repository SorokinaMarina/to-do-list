import React from 'react';
import './App.css';
import Input from '../Input/Input';
import Burger from '../Burger/Burger';
import TasksList from '../TasksList/TasksList';

function App (): JSX.Element {
  return (
    <div className="app">
      <Input />
      <Burger />
      <TasksList />
    </div>
  );
}

export default App;
