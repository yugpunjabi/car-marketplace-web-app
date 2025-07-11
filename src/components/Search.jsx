import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Data from '@/Shared/Data';

function Search() {
    const [cars, setCars] = useState();
    const [make, setMake] = useState();
    const [priceRange, setPriceRange] = useState({ min: null, max: null });

    return (
        <div className='p-2 md:p-5 bg-white rounded-md
        md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center
        w-[60%]'>

            <Select onValueChange={(value) => setCars(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Used">Used</SelectItem>
                    <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => setMake(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Car Makes" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarMakes.map((maker, index) => (
                        <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => {
                const parsed = JSON.parse(value);
                setPriceRange(parsed);
            }}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {Data.Pricing.map((price, index) => (
                        <SelectItem key={index} value={JSON.stringify({ min: price.min, max: price.max })}>
                            {price.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Link to={`search?cars=${cars}&make=${make}&minPrice=${priceRange.min}&maxPrice=${priceRange.max}`}>
                <CiSearch className='text-[50px] bg-[#405ef2] rounded-full p-3 text-white
            hover:scale-105 transition-all cursor-pointer' />
            </Link>
        </div>
    )
}

export default Search;
