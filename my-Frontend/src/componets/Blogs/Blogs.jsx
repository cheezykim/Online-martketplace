/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../Shared/Heading";

//import images 
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

// Example Blog Data
const BlogData = [
  {
    id: 1,
    title: "How to Start Blogging",
    description: "Learn the basics of starting your own blog.",
    image: Img1,
  },
  {
    id: 2,
    title: "Top 10 Tips for Blogging Success",
    description: "Discover tips to make your blog successful.",
    image: Img2,
  },
  {
    id: 3,
    title: "The Future of Blogging",
    description: "Explore trends shaping the future of blogging.",
    image: Img3,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Head section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Cards */}
          {BlogData.map((data) => (
            <div key={data.id} className="p-4 shadow-lg rounded-lg border">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[180px] object-cover rounded-md mb-4"
              />
              <h2 className="font-semibold text-lg">{data.title}</h2>
              <p className="text-gray-600 mt-2">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
