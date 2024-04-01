import React, { useState } from 'react';

const PropertyList = ({ properties }) => {
  const [sortBy, setSortBy] = useState('asc');
  const [filterBy, setFilterBy] = useState('');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const filteredProperties = properties.filter(property => {
    if (filterBy === '') return true;
    return property.tenant_preferred === filterBy;
  });

  const sortedProperties = filteredProperties.sort((a, b) => {
    if (sortBy === 'asc') {
      return a.rent - b.rent;
    } else {
      return b.rent - a.rent;
    }
  });

  return (
    <div>
      <div>
        <label>
          Sort by price:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Filter by tenant preferred:
          <select value={filterBy} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Family">Family</option>
            <option value="Bachelors/Family">Bachelors/Family</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedProperties.map(property => (
          <li key={property._id}>
            <div>Furnishing: {property.furnishing}</div>
            <div>Location: {property.location}</div>
            <div>Plot Area: {property.plot_area}</div>
            <div>Rent: {property.rent}</div>
            <div>Security Deposit: {property.security_deposit}</div>
            <div>Specification: {property.specification}</div>
            <div>Tenant Preferred: {property.tenant_preferred}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
