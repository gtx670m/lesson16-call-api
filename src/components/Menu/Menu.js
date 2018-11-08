import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product-list">Product Management</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
