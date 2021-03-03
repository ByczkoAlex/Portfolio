import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import RemoteWork from "./RemoteWork/Remote";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <MyWorks/>
      <RemoteWork/>
      <Contacts/>
      <Footer/>
    </div> 
  );
}

export default App;
