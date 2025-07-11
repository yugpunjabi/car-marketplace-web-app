import React from 'react'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button';
import { NavLink, Link } from 'react-router-dom';

function Header() {
    const { user, isSignedIn } = useUser();

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'font-medium text-blue-600 scale-105 transition-all cursor-pointer'
            : 'font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary';

    return (
        <div className='flex justify-between items-center shadow-sm p-5'>
            <img src="/CarWaleFull.svg" alt="CarWale Logo" className="h-8 text-teal-600" />

            <ul className='hidden md:flex gap-16'>
                <NavLink to='/' className={navLinkClass}>
                    Home
                </NavLink>

                <NavLink to='/search' className={navLinkClass}>
                    Search
                </NavLink>

                <NavLink to='/about-us' className={navLinkClass}>
                    AboutUs
                </NavLink>
            </ul>

            {isSignedIn ? (
                <div className='flex items-center gap-5'>
                    <UserButton />
                    <Link to={'/profile'}>
                        <Button className='bg-blue-700 hover:bg-blue-500'>Submit Listing</Button>
                    </Link>
                </div>
            ) : (
                <Button>Submit Listing</Button>
            )}
        </div>
    );
}

export default Header;
