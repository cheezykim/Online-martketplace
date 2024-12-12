// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Shared/Button';
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* first category */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-Primary-100 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
              <p className='mb-[2px] text-white'>Enjoy</p>
              <p className='text-2xl font-semibold mb-[2px'>With</p>
              <p className='text-4xl xl:text-5xl font-bold opacity-40'>Laptop</p>
              <Button
              text="Browse"
              bgColor={"bg-Primary"}
              textColor={"text-white"}
              />
              </div>
            </div>
            <img src={Image1} alt="" 
            className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'/>
          </div>
          {/* second category */}
          <div className='py-10 pl-5 bg-gradient-to-br from-BrandGreen/90 to-BrandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='mb-4'>
              <p className='mb-[2px] text-white'>Enjoy</p>
              <p className='text-2xl font-semibold mb-[2px'>With</p>
              <p className='text-4xl xl:text-5xl font-bold opacity-20'>Earphone</p>
              <Button
              text="Browse"
              bgColor={"bg-white"}
              textColor={"text-BrandGreen"}
              />
              </div>
            </div>
            <img src={Image2} alt="" 
            className='w-[320px] absolute bottom-0'/>
          </div>
          {/* Third category */}
          <div className='py-10 pl-5 bg-gradient-to-br from-BrandBlue to-BrandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='mb-4'>
              <p className='mb-[2px] text-white'>Enjoy</p>
              <p className='text-2xl font-semibold mb-[2px'>Gadget</p>
              <p className='text-4xl xl:text-5xl font-bold opacity-20'>Earphone</p>
              <Button
              text="Browse"
              bgColor={"bg-white"}
              textColor={"text-BrandBlue"}
              />
              </div>
            </div>
            <img src={Image3} alt="" 
            className='w-[220px] absolute buttom-0 lg:top-[40px]'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Category
