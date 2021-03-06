import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { css } from 'aphrodite/no-important'
import app from './styles/app_styl'

import Header from './components/Header'
import Home from './components/Home'
import Vote from './components/Vote'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <div className={css(app.container)}>
            <Route exact={true} path='/' component={Home}/>
            <Route path='/vote' component={Vote}/>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
