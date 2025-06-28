import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const TopFoods = () => {
  const [allData, setAllData] = useState([]);

  // Move axios call to useEffect to handle data fetching properly
  useEffect(() => {
    axios
      .get(`http://localhost:5000/topFoods`)
      .then((res) => setAllData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <div className="text-3xl md:text-4xl text-[#cc3366] text-center my-10 font-raleway font-semibold">
        Top Food Section
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allData.map((item) => (
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
                  <button className="w-full bg-[#cc3366] hover:bg-[#b52d5a] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Show Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Foods Button */}
        <div className="text-center mb-10 mt-20">
          <Link to={`allFoods`}>
            <button className="bg-linear-65 from-[#b52d5a] via-pink-400 to-[#b52d5a] font-raleway  font-semibold py-2 px-4 rounded-lg">
              View All Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
