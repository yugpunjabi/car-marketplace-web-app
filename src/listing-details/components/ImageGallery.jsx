import React from 'react';

function ImageGallery({ carDetail }) {
  const imageUrl = carDetail?.images?.[0]?.imageUrl;
  console.log("ImageGallery loaded image URL:", imageUrl); // ✅ Debug log

  if (!imageUrl) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-gray-200 rounded-xl">
        <p className="text-gray-500">No image available</p>
      </div>
    );
  }

  return (
    <div>
      <img
        src={imageUrl}
        alt="Car Image"
        className="w-full h-[500px] object-cover rounded-xl"
      />
    </div>
  );
}

export default ImageGallery;
