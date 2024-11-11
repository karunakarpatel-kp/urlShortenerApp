"use client";

import React, { useEffect } from "react";
import Form from "./Form";
import URLCard from "./urlCard";
import { AppDispatch, useAppSelector } from "../../app/GlobalStore/store";
import { useDispatch } from "react-redux";
import { callTotalURLService } from "../../app/GlobalStore/Slices/getTotalURLSlice/getTotalURLSlice";

const ShortnerForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(callTotalURLService());
  }, [dispatch]);

  const onRefreshBtnClickHandler = () => {
    dispatch(callTotalURLService());
  };
  return (
    <div className="border-0  mt-32">
      <Form />
      <div className="mt-10 shadow-sm">
        <div
          className="px-3 py-2 bg-brandColor w-fit rounded-md focus:ring-1 text-white  mt-6 mb-3 font-semibold text-lg cursor-pointer hover:bg-white hover:text-brandColor hover:border-brandColor hover:border"
          onClick={onRefreshBtnClickHandler}
        >
          Refresh the List
        </div>

        <URLCard />
      </div>
    </div>
  );
};

export default ShortnerForm;
