// SideMenu.js
import React, { useState } from 'react';
import './SideMenu.css'; // Make sure to create and link the CSS file

const SideMenu = () => {
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    babyKids: false,
  });

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="side-menu">
      <div className="menu-header">
        <h3>3425 ITEMS</h3>
      </div>
      
      <div className="menu-section">
        <label>
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
      </div>

      <div className="menu-section">
        <h4>IDEAL FOR</h4>
        <div>
          <label>
            <input
              type="checkbox"
              name="men"
              checked={filters.men}
              onChange={handleCheckboxChange}
            />
            Men
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="women"
              checked={filters.women}
              onChange={handleCheckboxChange}
            />
            Women
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="babyKids"
              checked={filters.babyKids}
              onChange={handleCheckboxChange}
            />
            Baby & Kids
          </label>
        </div>
      </div>

      <div className="menu-section">
        <h4>OCCASION</h4>
        <label>
          <input type="checkbox" />
          All
        </label>
      </div>

      <div className="menu-section">
        <h4>WORK</h4>
        <label>
          <input type="checkbox" />
          All
        </label>
      </div>

      <div className="menu-section">
        <h4>FABRIC</h4>
        <label>
          <input type="checkbox" />
          All
        </label>
      </div>
    </div>
  );
};

export default SideMenu;
