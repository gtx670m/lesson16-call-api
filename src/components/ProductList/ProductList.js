import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Product list</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Model</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ProductItem/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
