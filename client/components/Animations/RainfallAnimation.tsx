"use client";

import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";
import { useAppDispatch, useAppSelector } from "../../app/GlobalStore/store";
import { sendConfetti } from "../../app/GlobalStore/Slices/UISlice/UISlice";

const RainfallAnimation = () => {
  const { width, height } = useWindowSize();
  const dispatch = useAppDispatch();
  const showConfetti = useAppSelector((state) => state.UISlice.showConfetti);

  useEffect(() => {
    if (showConfetti) {
      const intervalId = setTimeout(() => {
        dispatch(sendConfetti(false));
      }, 7000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    showConfetti && (
      <ReactConfetti width={width} height={height} numberOfPieces={1400} recycle={false} style={{ zIndex: 99999999 }} />
    )
  );
};

export default RainfallAnimation;
