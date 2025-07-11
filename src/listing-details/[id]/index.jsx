import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom';
import { db } from '../../../configs';
import { CarImages, CarListing } from '../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '../../Shared/Service';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import OwnersDetail from '../components/OwnersDetail';
import Footer from '../../components/Footer';
import FinancialCalculator from '../components/FinancialCalculator';
import MostSearchedCar from '../../components/MostSearchedCar'

function ListingDetail() {
    const { id } = useParams();
    const [carDetail, setCarDetail] = useState();

    useEffect(() => {
        GetCarDetail();
    }, []);

    const GetCarDetail = async () => {
        const result = await db
            .select()
            .from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.id, Number(id)));

        const resp = Service.FormatResult(result);
        setCarDetail(resp[0]);
        console.log("Fetched car:", resp[0]);
    };

    return (
        <div>
            <Header />

            <div className='p-10 md:px-20'>
                {/* Header Detail Component */}
                <DetailHeader carDetail={carDetail} />

                <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
                    {/* Left */}
                    <div className='md:col-span-2'>
                        {/* Image Gallery */}
                        <ImageGallery carDetail={carDetail} />
                        {/* Description */}
                        <Description carDetail={carDetail} />
                        {/* Features List */}
                        <Features features={carDetail?.features} />
                        {/* Financial Calculator */}
                        <FinancialCalculator carDetail={carDetail} />
                    </div>
                    {/* Right */}
                    <div>
                        {/* Pricing */}
                        <Pricing carDetail={carDetail} />
                        {/* Car Specification */}
                        <Specification carDetail={carDetail} />
                        {/* Owners Details */}
                        <OwnersDetail carDetail={carDetail} />
                    </div>
                </div>
                <MostSearchedCar />
            </div>
            <Footer />

        </div>
    )
}

export default ListingDetail