// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoMdSearch } from 'react-icons/io'; // Ensure this is installed: npm install react-icons

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

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500'>
      <div className='py-4'>
        <div className="container mx-auto px-4">
          {/* Logo and Links Section */}
          <div className='flex items-center justify-between'>
            <a
              href="#"
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
