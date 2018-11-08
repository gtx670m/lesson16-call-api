import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" class="btn btn-primary mb-10">Add new product</button>
              <ProductList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
