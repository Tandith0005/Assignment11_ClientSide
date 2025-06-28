import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFoodsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [allFoods, setAllFoods] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  // Get data from backend of all foods
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allFoods?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => {
        setAllFoods(res.data.foods);
        setTotalItems(res.data.totalItems);
      })
      .catch((err) => console.error("Error fetching data from backend:", err));
  }, [currentPage,itemsPerPage]);
  // Generate total page numbers
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Make array of page numbers
  const pageNumber = [...Array(totalPages).keys()];

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
  };

  return (
    <div className="min-h-screen ">
      <div className="text-4xl text-center my-10 font-raleway font-semibold text-[#cc3366]">
        All Foods Section
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {allFoods.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Food Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={`https://images.weserv.nl/?url=${encodeURIComponent(
                    item.image
                  )}&w=400&h=300&fit=cover&q=80`}
                  alt={item.name}
                  loading="lazy"
                />
              </div>

              {/* Food Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#333] font-raleway">
                    {item.name}
                  </h3>
                  <span className="bg-[#cc3366] text-white text-sm font-semibold px-2 py-1 rounded-full">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? "fill-current"
                            : "fill-none stroke-current"
                        }`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-1">
                    {item.rating} ({item.stock} in stock)
                  </span>
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#cc3366] mb-1">
                    Ingredients:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f8e1ea] text-[#cc3366] text-xs px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Show Details Button */}
                <Link to={`/allFoods/${item._id}`} className="mt-auto">
                  <button className="w-full bg-[#cc3366] hover:bg-[#b52d5a] font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Show Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="text-center">
        <button
          className={
            currentPage === 0
              ? "disabled w-20"
              : "btn bg-[#cc3366] border border-none w-20"
          }
          onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {pageNumber.map((page) => (
          <button
            key={page}
            className={
              currentPage === page
                ? "btn mx-2 border-none bg-[#ff00dd] font-raleway font-semibold py-2 px-4 rounded-lg"
                : "btn mx-2 border-none bg-[#cc3366]  font-raleway font-semibold py-2 px-4 rounded-lg"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={
            currentPage === totalPages - 1
              ? "disabled w-20"
              : "btn bg-[#cc3366] border border-none w-20"
          }
          onClick={() =>
            currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <select
          onChange={handleItemsPerPage}
          name="page"
          className="text-[#cc3366] font-semibold font-raleway border border-[#cc3366]"
        >
          <option value="10">10</option>
          <option value="5">5</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoodsPage;
