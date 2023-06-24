import React, { Component } from 'react'
import User from './components/User';
import './App.css'
import Kullanicilar from './components/Kullanicilar';

export default class App extends Component {

  state ={
    users : [
      {
        id:1,
        name: "Furkan Gülenç",
        department: "Information Technology",
        salary: "5000"
      },
      {
        id:2,
        name: "Ali Gülenç",
        department: "Marketing",
        salary: "5000"
      },
      {
        id:3,
        name: "Mehmet Gülenç",
        department: "Strategist",
        salary: "5000"
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <Kullanicilar users ={this.state.users}/>

      </div>
    )
  }
}


