import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostList from './containers/PostList';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

import './App.css';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
        </div>
        <div className="topMargin">
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/posts" component={PostList}/>
              <Route path="/about" component={About} />
              <Route path="/about" component={Contact} />
              {/* <Route component={PageNotFound} /> */}
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
