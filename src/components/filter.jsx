import React from 'react';

const Filter = ({ filterText, onClick }) => {
  return (
    <span className="filterBtn mr-15"
      onClick={onClick}>
      {filterText}
    </span>
  );
}

export default Filter;



