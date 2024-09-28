// components/Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  const maxPagesToShow = 5; // jumlah maksimum halaman yang ingin ditampilkan
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button onClick={() => setCurrentPage(currentPage - 1)} className="px-3 py-1 border rounded bg-white text-blue-500">
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)} className={`px-3 py-1 border rounded ${currentPage === number ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-1 border rounded bg-white text-blue-500">
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
