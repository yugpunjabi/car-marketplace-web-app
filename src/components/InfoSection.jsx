import React from 'react'

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <img 
              src="/InfoSectionImg.png"
              className="rounded w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          <div>
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Find Your Perfect Drive
              </h2>

              <p className="mt-4 text-gray-700 text-xl">
                Discover a wide selection of new and pre-owned cars, all in one place. Whether you're looking for fuel efficiency, electric innovation, or powerful performance, we’ve got a car that fits your lifestyle and budget.
                Browse. Compare. Buy with confidence — your next car is just a click away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
