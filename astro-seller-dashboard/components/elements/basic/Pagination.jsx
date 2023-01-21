import React, { useState, useEffect } from 'react';

const Pagination = () => {
  // Declare state variables to store the products and the current page
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch the products from the API when the component mounts
  const id = '635d1da77ccbaf6af3b5c8dc';
  useEffect(() => {
    fetch('http://localhost:5000/Astro/seller/users/'+id)
      .then((response) => response.json())
      .then((data) => {
        // Set the products in the state
        setProducts(data);
      });
  }, []);

  // Divide the products into pages based on the desired number of products per page
  const productsPerPage = 3;
  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

  // Function to handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display the products */}
      {displayedProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}

      {/* Pagination */}
      <ul className="pagination">
        {/* Previous button */}
        {currentPage > 1 && (
          <li>
            <a onClick={() => handlePageChange(currentPage - 1)}>
              <i className="icon icon-chevron-left"></i>
            </a>
          </li>
        )}
        {/* Page buttons */}
        {[...Array(pages)].map((_, i) => (
          <li key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
            <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
          </li>
        ))}
        {/* Next button */}
        {currentPage < pages && (
          <li>
            <a onClick={() => handlePageChange(currentPage + 1)}>
              <i className="icon-chevron-right"></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
