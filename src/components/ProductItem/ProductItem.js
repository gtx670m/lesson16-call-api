import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>iPhone 7 plus</td>
        <td>10500000</td>
        <td>Made in China</td>
        <td>
          <span class="label label-success">Available</span>
        </td>
        <td>
          <button type="button" class="btn btn-warning mr-10">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
