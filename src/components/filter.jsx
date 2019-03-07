import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <span className="filterBtn mr-15"
        onClick={this.props.filterTask}>
      {this.props.filterText}</span>
    );
  }
}

export default Filter;



