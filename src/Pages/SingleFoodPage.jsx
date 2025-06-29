import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const SingleFoodPage = () => {
    const food = useLoaderData();
    
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link 
                    to="/allFoods" 
                    className="inline-flex items-center mb-8 text-[#cc3366] hover:text-[#b52d5a] transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Foods
                </Link>

                <div className=" rounded-xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Food Image */}
                        <div className="md:w-1/2">
                            <img
                                src={`https://images.weserv.nl/?url=${encodeURIComponent(
                                    food.image
                                )}&w=800&h=600&fit=cover&q=80`}
                                alt={food.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Food Details */}
                        <div className="p-8 md:w-1/2">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-gray-900 font-raleway">
                                    {food.name}
                                </h1>
                                <span className="bg-[#cc3366] text-white text-lg font-semibold px-3 py-1 rounded-full">
                                    ${food.price.toFixed(2)}
                                </span>
                            </div>

                            {/* Rating and Stock */}
                            <div className="flex items-center mb-6">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < Math.floor(food.rating)
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
                                <span className="text-gray-600 text-sm">
                                    {food.rating} ({food.stock} in stock)
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-[#cc3366] mb-2">Description</h2>
                                <p className="text-gray-700">{food.description}</p>
                            </div>

                            {/* Ingredients */}
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-[#cc3366] mb-2">Ingredients</h2>
                                <div className="flex flex-wrap gap-2">
                                    {food.ingredients.map((ingredient, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#f8e1ea] text-[#cc3366] text-sm px-3 py-1 rounded-full"
                                        >
                                            {ingredient}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Nutritional Info */}
                            {food.nutritionalInfo && (
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold text-[#cc3366] mb-2">Nutritional Information</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(food.nutritionalInfo).map(([key, value]) => (
                                            <div key={key} className="bg-gray-100 p-3 rounded-lg">
                                                <span className="block text-sm font-medium text-gray-500">{key}</span>
                                                <span className="block text-lg font-semibold">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Add to Cart Button */}
                            <button className="w-full bg-[#cc3366] hover:bg-[#b52d5a] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodPage;