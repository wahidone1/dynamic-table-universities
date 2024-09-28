// components/Sort.tsx
import React from "react";

interface SortProps {
  sortColumn: string;
  setSortColumn: (column: string) => void;
  sortDirection: string;
  setSortDirection: (direction: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortColumn, setSortColumn, sortDirection, setSortDirection }) => {
  const handleSort = (column: string) => {
    const direction = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => handleSort("name")} className={`border border-gray-300 rounded p-2 ${sortColumn === "name" ? "bg-gray-200" : ""}`}>
        Sort by Name {sortColumn === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
      </button>

      <button onClick={() => handleSort("country")} className={`border border-gray-300 rounded p-2 ${sortColumn === "country" ? "bg-gray-200" : ""}`}>
        Sort by Country {sortColumn === "country" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
      </button>
    </div>
  );
};

export default Sort;
