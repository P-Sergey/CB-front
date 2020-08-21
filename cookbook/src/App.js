import React from 'react';
import './App.css';
import UsersList from './components/users/UsersList';
import RecipesList from './components/recipes/RecipesList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div>
        <UsersList />
      </div>
      <div>
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
