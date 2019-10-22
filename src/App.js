import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './static/css/styles.css';

import Layout from './hoc/Layout';
import Home from './containers/Home/Home';
import Calculator from './containers/Calculator/Calculator'


class App extends Component {
  render(){
    return(
      <div>
        <Layout>
          <Switch>
            <Route path="/page-1" component={Home} />
            <Route path="/page-2" component={Calculator}/>
          </Switch>
        </Layout>
        
      </div>
    )
  }
}

export default App;
