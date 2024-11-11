"use client";
import React, { useEffect } from "react";
import { AppDispatch, useAppDispatch, useAppSelector } from "../../app/GlobalStore/store";
import { useDispatch } from "react-redux";
import { callTotalURLService } from "../../app/GlobalStore/Slices/getTotalURLSlice/getTotalURLSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { sendNotificationToast } from "../../app/GlobalStore/Slices/UISlice/UISlice";

const URLCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const urlShortenerServiceData = useAppSelector((state) => state.URLShortenerSlice.getURLShortenerService);

  const getAllURLServiceData = useAppSelector(
    (state) => state.getTotalURLSlice.getTotalURLService.getTotalURLServiceData
  );
  const getAllURLServiceDataStatus = useAppSelector(
    (state) => state.getTotalURLSlice.getTotalURLService.getTotalURLServiceStatus
  );

  if (getAllURLServiceData === null) {
    return <div className="max-w-6xl m-auto p-3 shadow-lg text-lg text-center">No ShortURL Created Yet...!</div>;
  }

  if (getAllURLServiceDataStatus === "PENDING") {
    return <div className="max-w-6xl m-auto p-3 shadow-lg text-lg text-center">Fetching ShortURLs From DB</div>;
  }

  const onDeleteClickHandler = async (userSelectedObj: any) => {
    console.log(userSelectedObj.shortId);
    const url = `http://localhost:8000/api/deleteURL/${userSelectedObj.shortId}`;
    const deleteData = await axios.get(url);
    dispatch(sendNotificationToast({ Toast: { message: "Successfully Deleted", variant: "success" } }));
    console.log(deleteData);
    dispatch(callTotalURLService());
  };

  if (getAllURLServiceData !== null && getAllURLServiceDataStatus === "FULFILLED") {
    return (
      <div className="grid grid-cols-12">
        {getAllURLServiceData
          .map((singleShortURLObj: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-1 border border-slate-100  text-center text-xl font-semibold py-2 drop-shadow-lg">
                  {index}
                </div>
                <div className="col-span-4 border border-slate-100 border-l-0 flex py-2 drop-shadow-lg">
                  <h4 className="font-semibold pl-7">Original URL :-</h4>
                  <a href={singleShortURLObj.redirectURL} className="ml-3 text-brandColor underline underline-offset-2">
                    {singleShortURLObj.redirectURL}
                  </a>
                </div>
                <div className="col-span-4 border border-slate-100 border-l-0 flex py-2 drop-shadow-lg">
                  <h4 className="font-semibold pl-7">Short URL :-</h4>
                  <a
                    href={`http://localhost:8000/api/${singleShortURLObj.shortId}`}
                    className="ml-3 text-brandColor underline underline-offset-2"
                    target="_blank"
                  >
                    {singleShortURLObj.shortId}
                  </a>
                </div>
                <div className="col-span-2 border border-slate-100 border-l-0 flex py-2 drop-shadow-lg">
                  <h4 className=" font-semibold pl-7">Number of visitors:-</h4>
                  <p className="text-brandColor font-semibold pl-3">{singleShortURLObj.visitHistory.length}</p>
                </div>
                <button
                  className="col-span-1 border rounded-md my-1 mx-1 border-brandColor text-brandColor hover:bg-brandColor hover:text-white"
                  onClick={() => onDeleteClickHandler(singleShortURLObj)}
                >
                  Delete
                </button>
              </React.Fragment>
            );
          })
          .reverse()}
      </div>
    );
  }
};

export default URLCard;
