import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import { Switch, Route } from "react-router-dom";
import Users from "./Components/Pages/Users";
import Posts from "./Components/Pages/Posts";
import MainNavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
