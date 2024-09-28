// components/Filter.tsx
import React from "react";

interface FilterProps {
  countryFilter: string;
  setCountryFilter: (country: string) => void;
  countries: string[];
}

const Filter: React.FC<FilterProps> = ({ countryFilter, setCountryFilter, countries }) => {
  return (
    <div className="flex items-center">
      <label className="mr-2">Filter by Country:</label>
      <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)} className="border border-gray-300 rounded p-2">
        <option value="">All Countries</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
