// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import React, { useEffect, useState } from 'react'
// import { IoMdCloseCircle } from "react-icons/io";
// import { storage } from '../../../configs/firebaseConfig';
// import { Button } from '../../components/ui/button';
// import { db } from '../../../configs';
// import { CarImages } from '../../../configs/schema';

// function UploadImages({triggerUploadImages,setLoader}) {
//     const [selectedFileList, setSelectedFileList] = useState([]);

//     useEffect(()=>{
//         if(triggerUploadImages){
//             UploadImageToServer();
//         }
//     },[triggerUploadImages])

//     const onFileSelected = (event) => {
//         const files = event.target.files;

//         for (let i = 0; i < files?.length; i++) {
//             const file = files[i];
//             setSelectedFileList((prev) => [...prev, file])
//         }

//         const onImageRemove=(image,index)=>{
//             const result = selectedFileList.filter((item)=>item!=image);
//             setSelectedFileList(result);
//         }
//     }

//     const UploadImageToServer=async()=>{
//         setLoader(true);
//         await selectedFileList.forEach((file)=>{
//             const fileName=Date.now()+'.jpeg';
//             const storageRef=ref(storage,'car-marketplace/'+fileName);
//             const metaData={
//                 contentType:'image/jpeg'
//             }
//             uploadBytes(storageRef,file,metaData).then((snapShot)=>{
//                 console.log('Uploaded File');
//             }).then(resp=>{
//                 getDownloadURL(storageRef).then(async(downloadUrl)=>{
//                     console.log(downloadUrl);
//                     await db.insert(CarImages).values({
//                         imageUrl:downloadUrl,
//                         CarListingId:triggerUploadImages
//                     })
//                 })
//             })
//             setLoader(false);
//         })
//     }

//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//                 {selectedFileList.map((image,index)=>(
//                     <div key={index}>
//                         <IoMdCloseCircle className='absolute m-2 h-7 text-lg text-white'
//                         onClick={()=>onImageRemove(image,index)}
//                         />
//                         <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted
//                 border-blue-500 bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
//                         <h2 className='text-lg text-center text-primary'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className='opacity-0' />
//             </div>
//         </div>
//     )
// }

// export default UploadImages
//-----------------------------------------------------------------------------------------------------

// ✅ UploadImages.jsx (Firebase replaced with Cloudinary)
import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from '../../components/ui/button';
import { db } from '../../../configs';
import { CarImages } from '../../../configs/schema';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoader, carInfo, mode }) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [EditCarImageList, setEditCarImageList] = useState([]);

  useEffect(() => {
    if (mode === 'edit') {
      setEditCarImageList([]);
      carInfo?.images?.forEach((image) => {
        setEditCarImageList((prev) => [...prev, image?.imageUrl]);
        console.log("Edit Mode Existing Image:", image);
      });
    }
  }, [carInfo]);

  useEffect(() => {
    if (triggerUploadImages) {
      console.log("Triggered upload for carListingId:", triggerUploadImages);
      uploadImagesToCloudinary();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    const result = await db.delete(CarImages).where(eq(CarImages.id, carInfo?.images[index].id)).returning({ id: CarImages.id });
    const imageList = EditCarImageList.filter(item => item !== image);
    setEditCarImageList(imageList);
    console.log("Removed image from DB:", result);
  };

  const uploadImagesToCloudinary = async () => {
    setLoader(true);

    for (let i = 0; i < selectedFileList.length; i++) {
      const file = selectedFileList[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_car_marketplace");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dt93jh7vh/image/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("Cloudinary response:", data);

        if (data.secure_url) {
          console.log("Saving to DB =>", {
            imageUrl: data.secure_url,
            carListingId: triggerUploadImages
          });

          await db.insert(CarImages).values({
            imageUrl: data.secure_url,
            carListingId: triggerUploadImages,
          });

          console.log("Image uploaded & saved to DB:", data.secure_url);
        }

      } catch (error) {
        console.error("Upload error:", error);
      }
    }

    setLoader(false);
  };

  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

        {mode === 'edit' && EditCarImageList.map((image, index) => (
          <div key={index} className='relative'>
            <IoMdCloseCircle
              className='absolute m-2 h-7 text-lg text-white cursor-pointer z-10'
              onClick={() => onImageRemoveFromDB(image, index)}
            />
            <img
              src={image}
              className='w-full h-[130px] object-cover rounded-xl'
              alt='preview'
            />
          </div>
        ))}

        {selectedFileList.map((image, index) => (
          <div key={index} className='relative'>
            <IoMdCloseCircle
              className='absolute m-2 h-7 text-lg text-white cursor-pointer z-10'
              onClick={() => onImageRemove(image)}
            />
            <img
              src={URL.createObjectURL(image)}
              className='w-full h-[130px] object-cover rounded-xl'
              alt='preview'
            />
          </div>
        ))}

        <label htmlFor='upload-images'>
          <div className='border rounded-xl border-dotted border-blue-500 bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
            <h2 className='text-lg text-center text-primary'>+</h2>
          </div>
        </label>
        <input
          type='file'
          multiple={true}
          id='upload-images'
          onChange={onFileSelected}
          className='hidden'
        />
      </div>
    </div>
  );
}

export default UploadImages;

