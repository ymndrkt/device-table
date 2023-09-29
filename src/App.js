import logo from './logo.svg';
import { useState } from "react";

import './App.css';


import Menu from './Components/Menu';
import UserTable from './UserTable';


function App() {
  return (
    <div className="App">
      <Menu/>
      <UserTable/>
      </div>
  );
  }

export default App;
