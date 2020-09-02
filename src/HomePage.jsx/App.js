import React from 'react';
import Seer_Logo from './Seer_Logo.png';
import './App.css'
import 'antd/dist/antd.css';
import LogInImg from'./logInImg.png';
import Intro from './Intro';
import SearchPart from'./SearchPart';
import Subject from'./Subject';
export default class App extends React.Component {
 
  render() {
    return (
      <div>
        <img src={Seer_Logo} alt="logo" className="AppLogo"></img>
       <a href="http://www.google.com"> <img src={LogInImg} alt="logo" className="loginIcon"></img></a>
        <br/><br/><br/>
        <Intro/>
        <SearchPart />
        <Subject />
      </div>

    )
  }
}
