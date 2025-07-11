import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import carDetails from './../Shared/carDetails.json';
import InputField from './components/InputField';
import DropdownField from './components/DropdownField';
import TextAreaField from './components/TextAreaField';
import { Separator } from '@radix-ui/react-separator';
import { Checkbox } from "@/components/ui/checkbox";
import features from './../Shared/features.json';
import { Button } from '../components/ui/button';
import { db } from '../../configs';
import { CarImages, CarListing } from '../../configs/schema';
import IconField from './components/IconField';
import UploadImages from './components/UploadImages';
import { BiLoaderAlt } from "react-icons/bi";
import { Toaster, toast } from 'sonner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import moment from 'moment';
import { eq } from 'drizzle-orm';
import Service from '../Shared/Service';

function AddListing() {
  const [formData, setFormdata] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [triggerUploadImages, setTriggerUploadImages] = useState(null);
  const [searchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [carInfo, setCarInfo] = useState();
  const navigate = useNavigate();
  const { user } = useUser();

  const mode = searchParams.get('mode');
  const recordId = searchParams.get('id');

  // Load car data if in edit mode
  useEffect(() => {
    if (mode === 'edit' && recordId) {
      GetListingDetail();
    }
  }, []);

  // Navigate after upload is complete
  useEffect(() => {
    if (!loader && triggerUploadImages && mode !== 'edit') {
      navigate('/profile');
    }
  }, [loader, triggerUploadImages]);

  const GetListingDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, Number(recordId)));

    const formatted = Service.FormatResult(result);
    console.log("🛠️ Edit Mode - Car Info Fetched:", formatted[0]);
    setCarInfo(formatted[0]);
    setFormdata(formatted[0]);
    setFeaturesData(formatted[0].features || {});
  };

  const handleInputChange = (name, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    toast('Please Wait');

    if (!formData.type) {
      formData.type = "SUV";
    }

    try {
      if (mode === 'edit') {
        const result = await db.update(CarListing)
          .set({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            postedOn: moment().format('DD/MM/yyyy')
          })
          .where(eq(CarListing.id, recordId))
          .returning({ id: CarListing.id });

        toast.success('Listing updated successfully!');
        setLoader(false);
        navigate('/profile');
      } else {
        const result = await db.insert(CarListing).values({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          postedOn: moment().format('DD/MM/yyyy')
        }).returning({ id: CarListing.id });

        const newListingId = result?.[0]?.id;

        if (newListingId) {
          // Set image upload trigger
          setTriggerUploadImages(newListingId);
        }
      }
    } catch (e) {
      console.error("Submission Error:", e);
      toast.error('Something went wrong');
      setLoader(false);
    }
  };

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>
          {mode === 'edit' ? 'Edit Listing' : 'Add New Listing'}
        </h2>
        <form className='p-10 border rounded-xl mt-10'>
          {/* Car Details */}
          <div>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm flex gap-2 items-center mb-1'>
                    <IconField icon={item?.icon} />
                    {item?.label} {item.required && <span className='text-red-500'>*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField item={item} handleInputChange={handleInputChange} value={formData?.[item.name] || ''} />
                  ) : item.fieldType === 'dropdown' ? (
                    <DropdownField item={item} handleInputChange={handleInputChange} value={formData?.[item.name] || ''} />
                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange} value={formData?.[item.name] || ''} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className='my-6 h-[2px] bg-gray-200' />

          {/* Features */}
          <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {features.features.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <Checkbox
                    checked={featuresData?.[item.name] || false}
                    onCheckedChange={(value) =>
                      handleFeatureChange(item.name, value === true)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className='my-6 h-[2px] bg-gray-200' />

          {/* Upload Images */}
          <UploadImages
            triggerUploadImages={triggerUploadImages}
            carInfo={carInfo}
            mode={mode}
            setLoader={setLoader}
          />

          <div className='mt-10 flex justify-end'>
            <Button type="button" disabled={loader} onClick={onSubmit}>
              {!loader ? 'Submit' : <BiLoaderAlt className='animate-spin text-lg' />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
