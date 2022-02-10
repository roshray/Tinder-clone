import React from "react"
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header/>
     <h1> Tinder is being build here !</h1>
     <Router>
        <Switch>
          <Route path="/chat">
            <h1>
              I am a the ChatPage!
            </h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
