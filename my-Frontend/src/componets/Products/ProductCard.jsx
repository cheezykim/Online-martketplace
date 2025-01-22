import React from "react";
import Button from "../Shared/Button"; // Ensure the import path is correct

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card Section */}
        {data.map((item) => (
          <div key={item.id} className="group relative">
            <div className="relative">
              <img
                src={item.img}
                alt={item.name || "Product"}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              h-full w-full text-center backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text="Add to cart"
                  bgColor="bg-red-500" // Red background color
                  textColor="text-white"
                />
              </div>
            </div>
            <div className="leading-7 mt-2 text-center">
              <h2 className="font-semibold">{item.title}</h2>
              <h3 className="font-bold text-lg">${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
