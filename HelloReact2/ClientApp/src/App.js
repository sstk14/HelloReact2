import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';


import { Hello } from './components/Hello';
import { Dice } from './components/Dice/Dice';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/hello' component={Hello} />
        <Route path='/dice' component={Dice} />
      </Layout>
    );
  }
}
