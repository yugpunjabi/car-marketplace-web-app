import React from 'react'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

function OwnersDetail({ carDetail }) {
    return (
        <div className='p-10 border rounded-xl shadow-md mt-7'>
            <h2 className='font-medium text-2xl mb-3'>Owner/Dealer</h2>
            <img src={carDetail?.userImageUrl} className='w-[70px] h-[70px] rounded-full' />
            <h2 className='mt-2 text-gray-500'>{carDetail?.userName}</h2>
            <h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>

            <Link to='https://mail.google.com/mail/u/0/#inbox'>
            <Button className='w-full mt-6 bg-blue-700 hover:bg-blue-500'>Message Owner</Button>
            </Link>
        </div>
    )
}

export default OwnersDetail