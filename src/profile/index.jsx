import React from 'react'
import Header from '../components/Header'
import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from '@clerk/clerk-react'

function Profile() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div className="text-center mt-20">Loading...</div>
  }

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="my-listing">My Listing</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>

          <TabsContent value="profile">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mt-6">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6">
                <img
                  src={user.imageUrl}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-sm"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {user.fullName || "John Doe"}
                  </h2>
                  <p className="text-gray-500">
                    {user.primaryEmailAddress?.emailAddress || ""}
                  </p>
                  <button className="mt-3 px-4 py-1 text-sm bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow">
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Stats */}

              <h2 className='mt-5 flex text-blue-700 font-bold justify-center'>Stats are hardcoded values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-gray-500 mb-1">Cars Listed</p>
                  <h3 className="text-3xl font-bold text-blue-700">8</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-gray-500 mb-1">Cars Favorited</p>
                  <h3 className="text-3xl font-bold text-blue-700">14</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-gray-500 mb-1">Recently Viewed</p>
                  <h3 className="text-3xl font-bold text-blue-700">5</h3>
                </div>
              </div>

              {/* Activity Section */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h4>
                <ul className="space-y-3">
                  <li className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition">
                    You listed a <span className="font-medium text-blue-700">2020 Hyundai Creta</span> for sale.
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition">
                    You favorited a <span className="font-medium text-blue-700">Maruti Suzuki Swift 2022</span>.
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition">
                    You visited the <span className="font-medium text-blue-700">Search</span> page to find SUVs.
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile
