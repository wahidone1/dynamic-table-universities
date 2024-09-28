// components/Search.tsx
import React from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="border border-gray-300 rounded p-2 flex-grow min-w-[200px] mb-2 md:mb-0"
    />
  );
};

export default Search;
