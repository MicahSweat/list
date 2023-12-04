import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Add a new key/value pair in the state to keep track of type
    this.state = {
      search: "",
      type: "both", // Default to "all" to show all types initially
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Checks if the current item satisfies both the search and type conditions
  filterItem = (item) => {
    const nameMatchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatchesFilter = this.state.type === "both" || item.type.toLowerCase() === this.state.type;

    return nameMatchesSearch && typeMatchesFilter;
  };

  // Event handling method for when an item in the dropdown is selected
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
