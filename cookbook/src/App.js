import React from 'react';
import './App.css';
import Users from './components/Users';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <select>
          <option value='value1'>value 1</option>
          <option value='value2'>value 2</option>
          <option value='value3'>value 3</option>
        </select>
      </header>
      <Users />
    </div>
  );
}

export default App;
