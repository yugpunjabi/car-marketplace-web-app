import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Header/>
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center">About CarWale</h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 mt-2">
          Driving Dreams. Simplifying Choices. Making Car Buying Effortless.
        </p>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">CarWale</span> – India’s trusted online car marketplace where passion meets precision. Whether you're on the hunt for a sleek new vehicle or a reliable pre-owned one, we make your journey smooth and transparent.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Our platform brings together buyers and sellers in a trusted environment, backed by real-time data, reviews, and expert advice. With CarWale, you’re not just buying a car — you’re making a smart investment.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded with a mission to digitize the automotive buying experience, CarWale continues to innovate and redefine how India drives.
            </p>
          </div>

          <div>
            <img
              src="https://getwallpapers.com/wallpaper/full/6/8/c/171271.jpg"
              alt="CarWale Marketplace"
              className="rounded-xl shadow-xl w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose CarWale?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              "🚗 Extensive database of new and used cars",
              "🔍 Powerful search & comparison tools",
              "🤝 Verified dealers & user reviews",
              "💡 Real-time pricing and car trends",
              "📱 User-friendly interface on all devices",
              "📞 Dedicated support & after-sales guidance",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower every car buyer in India with information, trust, and simplicity — transforming car buying from a stressful decision to an exciting milestone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become India’s most preferred digital destination for all things automobiles — from research and reviews to final purchase and beyond.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Drive?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join millions of satisfied users who found their perfect car on CarWale.
          </p>
          <Link to='/'>
          <a
            href="/cars"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Explore Cars
          </a>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
