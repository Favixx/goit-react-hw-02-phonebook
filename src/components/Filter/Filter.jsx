import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
  }
  render() {
    const { filter, handleFilterChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    );
  }
}