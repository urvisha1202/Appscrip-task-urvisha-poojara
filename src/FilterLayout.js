// src/FilterLayout.js
import React, { useState } from 'react';
import './FilterLayout.css';

const FilterLayout = () => {
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  return (
    <div className="filter-layout">
      <div className="filter-section">
        <h3>3425 ITEMS</h3>
        <button className="hide-filter">HIDE FILTER</button>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable">CUSTOMIZABLE</label>
          </div>
          <div className="filter-category">
            <h4>IDEAL FOR</h4>
            <a href="#">Unselect all</a>
            <div className="filter-option">
              <input type="checkbox" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="women" />
              <label htmlFor="women">Women</label>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="sort-dropdown">
          <span>{selectedSort}</span>
          <div className="dropdown-menu">
            <div onClick={() => handleSortChange('RECOMMENDED')}>
              <span>RECOMMENDED</span>
              {selectedSort === 'RECOMMENDED' && <span>✔</span>}
            </div>
            <div onClick={() => handleSortChange('NEWEST FIRST')}>
              <span>NEWEST FIRST</span>
              {selectedSort === 'NEWEST FIRST' && <span>✔</span>}
            </div>
            <div onClick={() => handleSortChange('POPULAR')}>
              <span>POPULAR</span>
              {selectedSort === 'POPULAR' && <span>✔</span>}
            </div>
            <div onClick={() => handleSortChange('PRICE : HIGH TO LOW')}>
              <span>PRICE : HIGH TO LOW</span>
              {selectedSort === 'PRICE : HIGH TO LOW' && <span>✔</span>}
            </div>
            <div onClick={() => handleSortChange('PRICE : LOW TO HIGH')}>
              <span>PRICE : LOW TO HIGH</span>
              {selectedSort === 'PRICE : LOW TO HIGH' && <span>✔</span>}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FilterLayout;
