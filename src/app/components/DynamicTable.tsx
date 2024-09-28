"use client";

// components/DynamicTable.tsx
import React, { useEffect, useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import Pagination from "./Pagination";

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const DynamicTable: React.FC = () => {
  const [data, setData] = useState<University[]>([]);
  const [filteredData, setFilteredData] = useState<University[]>([]);
  const [countryFilter, setCountryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [countries, setCountries] = useState<string[]>([]); // Menyimpan daftar negara

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://universities.hipolabs.com/search");
      const result = await response.json();
      setData(result);
      setFilteredData(result);

      // Mengambil daftar negara unik
      const uniqueCountries: string[] = Array.from(new Set(result.map((item: University) => item.country)));
      setCountries(uniqueCountries);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let tempData = data;

    // Filter by country
    if (countryFilter) {
      tempData = tempData.filter((item) => item.country.toLowerCase().includes(countryFilter.toLowerCase()));
    }

    // Search by all words
    if (searchQuery) {
      const searchTerms = searchQuery
        .toLowerCase()
        .split(" ")
        .filter((term) => term);

      tempData = tempData.filter((item) => {
        const name = item.name.toLowerCase();
        const country = item.country.toLowerCase();
        return searchTerms.every((term) => name.includes(term) || country.includes(term));
      });
    }

    // Sort data
    if (sortColumn) {
      tempData = tempData.sort((a, b) => {
        const itemA = a[sortColumn as keyof University];
        const itemB = b[sortColumn as keyof University];

        const valueA = Array.isArray(itemA) ? itemA[0].toLowerCase() : itemA.toLowerCase();
        const valueB = Array.isArray(itemB) ? itemB[0].toLowerCase() : itemB.toLowerCase();

        return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      });
    }

    setFilteredData(tempData);
  }, [countryFilter, searchQuery, sortColumn, sortDirection, data]);

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-wrap justify-between mb-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter countryFilter={countryFilter} setCountryFilter={setCountryFilter} countries={countries} />
        <Sort sortColumn={sortColumn} setSortColumn={setSortColumn} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.country}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <a href={item.web_pages[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={filteredData.length} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default DynamicTable;
