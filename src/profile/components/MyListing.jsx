import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { useUser } from '@clerk/clerk-react';
import { db } from "../../../configs";
import { desc, eq } from 'drizzle-orm'
import { CarImages, CarListing } from '../../../configs/schema';
import Service from '../../Shared/Service';
import CarItem from '../../components/CarItem';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'sonner';

function MyListing() {
    const { user } = useUser();
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        user && GetUserCarListing();
    }, [user]);

    const GetUserCarListing = async () => {
        const result = await db.select().from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(CarListing.id));

        const resp = Service.FormatResult(result);
        setCarList(resp);
    }

    //DELETE FUNCTIONALITY
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?");
        if (!confirm) return;

        try {
            // 1. Delete related images first (if needed)
            await db.delete(CarImages).where(eq(CarImages.carListingId, id));

            // 2. Then delete the listing
            await db.delete(CarListing).where(eq(CarListing.id, id));

            // 3. Update UI
            setCarList(prev => prev.filter(item => item.id !== id));

            toast.success("Listing deleted successfully.");
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete listing.");
        }
    }

    return (
        <div className='mt-6'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button className='bg-blue-700 hover:bg-blue-500'>+ Add New Listing</Button>
                </Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
                {carList.map((item, index) => (
                    <div key={index}>
                        <CarItem car={item} />
                        <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                            <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                                <Button variant="outline" className="w-full">Edit</Button>
                            </Link>
                            <Button variant="destructive" onClick={() => handleDelete(item.id)}>
                                <FaTrashAlt />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyListing;
