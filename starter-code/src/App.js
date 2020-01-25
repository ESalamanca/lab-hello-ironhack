import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="navBar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </div>
          <div className="content">
            <h1> Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer
            </p>
            <a href="">Awesome!</a>
          </div>
        </div>
        <div className="bottom">
          <div className="box">
            <img src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="box">
            <img src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated Components that manage their state</p>
          </div>
          <div className="box">
            <img src="/images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div className="box">
            <img src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
