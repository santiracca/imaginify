import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformationType = transformationTypes[type];
  return (
    <>
      <Header title={transformationType.title} subtitle={transformationType.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationTypePage;
