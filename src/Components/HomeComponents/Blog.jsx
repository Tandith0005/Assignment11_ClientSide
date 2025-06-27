import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Learn to make cake",
            date: "June 15, 2023",
            description: "Discover the secrets to baking perfect cakes every time with our comprehensive guide for beginners and experts alike.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "Decorating Techniques",
            date: "July 22, 2023",
            description: "Master professional cake decorating techniques that will take your baked goods to the next level.",
            image: "https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            title: "Vegan Baking Tips",
            date: "August 5, 2023",
            description: "Learn how to create delicious vegan cakes that are just as good as traditional recipes without any animal products.",
            image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center text-[#cc3366] font-bold font-raleway text-[30px] md:text-[40px] mb-10 mt-10">Our Blogs</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Blog Image */}
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-48 object-cover"
                        />
                        
                        {/* Blog Content */}
                        <div className="p-6">
                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                            
                            {/* Date */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <FaCalendarAlt className="mr-2" />
                                <span>{blog.date}</span>
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            
                            {/* Read More Button */}
                            <button className="flex items-center text-[#cc3366] font-medium hover:text-[#a82a55] transition-colors">
                                Read More <FaArrowRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;