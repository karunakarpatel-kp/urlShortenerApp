"use client";
import React, { useRef } from "react";
import { useAppDispatch } from "../../app/GlobalStore/store";
import {
  sendUserEnteredURL,
  getURLShortenerService,
} from "../../app/GlobalStore/Slices/URLShortenerSlice/URLShortenerSlice";
import { callTotalURLService } from "../../app/GlobalStore/Slices/getTotalURLSlice/getTotalURLSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const urlRef = useRef<any>("");

  const onFormSubmitClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const URL = formData.get("url");

    dispatch(sendUserEnteredURL(URL));
    dispatch(getURLShortenerService({ url: URL }));
    // Called two Time to ReRender - Dont try this is a trick
    dispatch(callTotalURLService());
    dispatch(callTotalURLService());

    // clearing textField
    urlRef.current.value = "";
  };

  return (
    <div className="border border-slate-100 rounded-md shadow-md w-5/6 m-auto  py-4 px-6">
      <form onSubmit={onFormSubmitClickHandler} name="registration-form">
        <label className="block">
          <span className="block  font-semibold mt-3 pl-1">Please Enter the URL to be Shortened</span>
          <input
            type="url"
            alt="url"
            name="url"
            title="url"
            autoComplete="false"
            required
            ref={urlRef}
            placeholder="Please Enter Your URL"
            className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
          />
        </label>
        {/* Submit */}
        <label className="block mt-3">
          <input
            type="submit"
            name="submit"
            autoComplete="false"
            required
            className="px-3 py-2 bg-brandColor block  rounded-md focus:ring-1 text-white w-3/6 mt-6 mb-3 font-semibold text-lg m-auto cursor-pointer hover:bg-white hover:text-brandColor hover:border-brandColor hover:border"
            placeholder="Submit"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
