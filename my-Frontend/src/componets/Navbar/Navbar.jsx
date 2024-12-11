import React from 'react'

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
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500 relative -z-40'>  
        <div className='py-4'> 
            <div className="container">
                {/*logo and links section */} 
                <div className='flex  items-center gap-4'>  
                    <a href="#"
                    className='text-Primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl '  
            

                    >
                       Marketplace
                    </a>

                    {/* Menu Items  */}
                    <div className='hidden lg:block'> 
                      <ul className='flex items-center gap-4'> 
                       {
                        MenuLinks.map((data, index) => (
                          <li key={index}>

                            <a 
                            
                            href={data.link}
                            className='inline-block px-4 font-semibold text-gray-500 hover:text-white dark:hover:text-white duration-500'>   
                            
                            {data.name} 
                            </a>   
                          </li>
                        )) 

                       }
                      </ul>
                    </div>
                    {/* Menu Items  */}
                    <div>
                    </div>
                </div>
                {/*Navbar Right  section */} 

                <div>
                {/* Search bar section  */}
                 <div>
                <input type="text" placeholder='Search'
                 className='' /> 
                 <IoMdSearch/> 
                 </div>
                {/* dark mod section  */}
                 <div></div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Navbar