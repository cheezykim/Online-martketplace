// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoMdSearch } from 'react-icons/io'; // Ensure this is installed: npm install react-icons
import { FaCaretDown } from "react-icons/fa";
import DarkMod from './DarkMod';
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#Shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#About",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#Blog",
  },
];
const DropdownLinks =[
  {
    id:1,
    name:"Trending Products",
    link:"/#",
},
{
  id:2,
  name:"Best Selling",
  link:"/#",
   
},
{
  id:3,
  name:"Top Rated",
  link:"/#",
   
},
]

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500'>
      <div className='py-4'>
        <div className="container mx-auto px-4">
          {/* Logo and Links Section */}
          <div className='flex items-center justify-between'>
            <a
              href="#"
              className='text-Primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
            >
              Marketplace
            </a>

            {/* Menu Items */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className='inline-block px-4 font-semibold text-gray-500 hover:text-white dark:hover:text-white duration-500'
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                 {/*Dropdown*/}
                 <li className="relative cursor-pointer group">
                  <a href='#' className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    QuickLinks
                    <span>
                  <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                  </span>
                  </a>
              {/*Dropdown Links*/}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                  <ul className="space-y-2">
                  {DropdownLinks.map((data, index) => (
                       <li key={index}> 
                          <a 
                          className="text-gray-500  hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-Primary/20 rounded-md font-semibold"
                          href={data.link}>{data.name}</a> 
                          </li>
                           ))}
                  </ul>
                </div>
                </li>
              </ul>
            </div>
            


            {/* Search Bar Section */}
            <div className='flex items-center gap-4'>
              <div className='flex items-center bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md'>
                <input
                  type="text"
                  placeholder='Search'
                  className='bg-transparent text-gray-500 dark:text-white focus:outline-none'
                />
                <IoMdSearch className='text-gray-500 dark:text-white ml-2' />
              </div>

              {/* Dark Mode Toggle Placeholder */}
              <div>
                
                {/* Add your dark mode toggle button here */}
                <DarkMod/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
