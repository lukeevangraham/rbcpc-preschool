import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Footer from './Footer'
import history from '../history';
import Home from '../pages/Home/Home'

const App = () => {
  return (
      <div>
          <Router history={history}>
<div>
    <Header />
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
    <Footer />
</div>
          </Router>
      </div>
  )
};

export default App;
