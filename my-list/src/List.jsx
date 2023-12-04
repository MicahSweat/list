import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => (
      // Include the data-type attribute with the value of item.type
      <li key={item.name} data-type={item.type}>
        {item.name}
      </li>
    ));
    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
