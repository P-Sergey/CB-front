import React from 'react';
import './App.css';
import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <UsersList />
      <CreateUser />
    </div>
  );
}

export default App;
