import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { LuFuel } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { Link} from 'react-router-dom';


function CarItem({ car }) {
  return (
    <Link to={'/listing-details/' + car?.id}>
      <div className='rounded-xl bg-white border hover:shadow-lg transition-shadow cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
        <img
          src={
            Array.isArray(car?.images) && car.images.length > 0
              ? car.images[0].imageUrl
              : 'https://placehold.co/400x300'
          }
          alt={car?.listingTitle || 'Car Image'}
          className='w-full h-[250px] object-cover rounded-xl'
        />

        <div className='p-4'>
          <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
          <Separator className='my-2 h-[1px] bg-gray-200' />
          <div className='grid grid-cols-3 mt-5'>
            <div className='flex flex-col items-center'>
              <LuFuel className='text-lg mb-2 ' />
              <h2>{car?.mileage} Miles</h2>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineSpeed className='text-lg mb-2' />
              <h2>{car?.fuelType}</h2>
            </div>
            <div className='flex flex-col items-center'>
              <GiGearStickPattern className='text-lg mb-2' />
              <h2>{car?.transmission}</h2>
            </div>
          </div>
          <Separator className='my-2 h-[1px] bg-gray-200' />
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-xl'>${car.sellingPrice}</h2>
            <h2 className='text-primary text-sm flex gap-2 items-center'>
              View Details <IoMdOpen /></h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarItem