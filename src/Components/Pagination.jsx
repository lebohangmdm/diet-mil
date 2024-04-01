import { useState } from "react";
import { Link } from "react-router-dom";

const PaginationContainer = ({
  totalRecipes,
  pageSize,
  paginate,
  currentPage,
}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalRecipes / pageSize) },
    (_, i) => {
      return i + 1;
    }
  );

  return (
    <div className="my-4">
      {/* Display items for the current page */}
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((_, index) => (
          <li key={index}>
            <button
              className={`${
                currentPage === index + 1 ? " bg-greenish-1 text-white" : ""
              }   text-xl rounded-full px-4 py-2 `}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PaginationContainer;
