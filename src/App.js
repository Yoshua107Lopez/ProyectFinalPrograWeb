import React from 'react'
import { LoginButton } from 'components/Login';
import { Profile } from 'components/Profile';
import { LogoutButton } from 'components/Logout';
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <LoginButton />
      <Profile />
      <LogoutButton />
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
