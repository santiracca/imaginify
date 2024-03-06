"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChanged: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({ onValueChanged, setImage, image, publicId, type }: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureUrl: result?.info?.secure_url,
    }));
    onValueChanged(result?.info?.public_id);
    toast({
      title: "Image uploaded successfully",
      description: "1 credit has been deducted from your account.",

      duration: 5000,
      className: "error-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Something wen wrong while uploading",
      description: "Please try again",

      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset='jsm_imaginify'
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className='flex flex-col gap-4'>
          <h3 className='h3-bold text-dark-600'>Original</h3>
          {publicId ? (
            <>
              <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt='image'
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className='media-uploader_cldImage'
                />
              </div>
            </>
          ) : (
            <div className='media-uploader_cta' onClick={() => open()}>
              <div className='media-uploader_cta-image'>
                <Image src='/assets/icons/add.svg' alt='add image' width={24} height={24} />
              </div>
              <p className='p-14-medium'>Click here to upload image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;