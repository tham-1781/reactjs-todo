import React from 'react';

const Filter = ({ active, children, onClick }) => {
  return (
    <button className="filterBtn mr-15"
      onClick={onClick} disabled={active}>
      {children}
    </button>
  );
}

export default Filter;



