import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "both", 
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  filterItem = (item) => {
    const nameMatchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatchesFilter = this.state.type === "both" || item.type.toLowerCase() === this.state.type;

    return nameMatchesSearch && typeMatchesFilter;
  };

  handleTypeSelect = (eventKey) => {
    this.setState({ type: eventKey });
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        {/* Add more menu items with onSelect handlers */}
        <DropdownButton id="typeDropdown" title={"Select"} onSelect={this.handleTypeSelect}>
          <Dropdown.Item eventKey="both">Both</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
