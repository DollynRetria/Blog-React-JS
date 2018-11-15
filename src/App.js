import React, { Component } from 'react';
import Baniere from './components/Baniere'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nosservices from './components/Nosservices'
import Contact from './components/Contact'
import Post from './components/Post'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Baniere />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/nos-services' component={Nosservices} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
