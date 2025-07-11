import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db } from '../../configs';
import { CarImages, CarListing } from '../../configs/schema';
import { and, eq, gte, lte } from 'drizzle-orm';
import Service from '../Shared/Service';
import Header from '../components/Header';
import Search from '../components/Search';
import CarItem from '../components/CarItem';
import Footer from '../components/Footer';

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [carlist, setCarList] = useState([]);

  const condition = searchParam.get('cars');
  const make = searchParam.get('make');
  const price = searchParam.get('price'); 

  useEffect(() => {
    GetCarList();
  }, [condition, make, price]);

  const GetCarList = async () => {
    const filters = [];

    if (condition) {
      filters.push(eq(CarListing.condition, condition));
    }

    if (make) {
      filters.push(eq(CarListing.make, make));
    }

    if (price) {
      const [min, max] = price.split('-').map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        filters.push(gte(CarListing.price, min));
        filters.push(lte(CarListing.price, max));
      }
    }

    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(filters.length > 0 ? and(...filters) : undefined);

    const formatted = Service.FormatResult(result);
    console.log(formatted);
    setCarList(formatted);
  };

  return (
    <div>
      <Header />
      <div className='p-16 bg-blue-950 flex justify-center'>
        <Search />
      </div>
      <div className='p-10 md:px-20'>
        <h2 className='font-bold text-4xl'>Search Result</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
          {carlist?.length > 0
            ? carlist.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className='h-[320px] rounded-xl bg-slate-200 animate-pulse'
                ></div>
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchByOptions;
