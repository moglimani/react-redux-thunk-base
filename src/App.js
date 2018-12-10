import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/HomePage';
import Admin from './containers/AdminPage';
import Menus from './components/Menus';
import { Provider} from 'react-redux';
import store from './store';

import './styles/App.css';

class App extends Component {

  
  render() {
    return (
        <Provider store = {store}>
          <div className="App">
            <Header />
            <Menus />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Admin" component={Admin} />
            </Switch>
            <Footer />
          </div>
        </Provider>
    );
  }
}


export default App;
