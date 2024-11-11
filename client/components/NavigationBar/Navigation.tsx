"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCarSide, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import KarunakarPatelImage from "@Public/karunakarImage.svg";
import Wave from "react-wavify";
import { useAppDispatch } from "../../app/GlobalStore/store";

const Navigation = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [homePage, setHomePage] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const navigate = useRouter();
  const pathName = usePathname();

  const onOpenClickHandler = () => {
    console.log(openMobileMenu, "OPEN");
    setOpenMobileMenu(true);
  };

  const onCloseClickHandler = () => {
    console.log(openMobileMenu, "CLOSE");
    setOpenMobileMenu(false);
  };

  const onLogoClickHandler = () => {
    navigate.push("/");
    // On Logo CLick clear out the Payment Order
    // dispatch(clearPaymentOrder({}));
  };

  useEffect(() => {
    const renderBrandLogoPic = () => {
      if (pathName === "/") {
        setHomePage(true);
      } else {
        setHomePage(false);
      }
    };

    renderBrandLogoPic();
  }, [pathName]);

  // const onLogOutClickHandler = () => {
  //   dispatch(logOutUser());
  //   dispatch(clearPaymentOrder({}));
  //   dispatch(clearUserDetailsService({}));
  //   dispatch(sendNotificationToast({ Toast: { message: "User Logged Out Successfully", variant: "info" } }));
  //   navigate.push("/");
  // };

  return (
    <>
      <div
        className={
          !openMobileMenu
            ? "h-16  bg-brandColor border-b border-b-slate-700 dark:bg-slate-900 dark:border-b dark:border-b-slate-700  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"
            : ""
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>
        <div
          className="col-span-9 md:col-span-4 border-0 border-green-800 mt-1 ml-0 cursor-pointer"
          onClick={onLogoClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox="0 0 345 88">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M64,5H10A10,10,0,0,0,0,15V62A10,10,0,0,0,10,72H64A10,10,0,0,0,74,62V15A10,10,0,0,0,64,5Z"
              transform="translate(0 11)"
              // fill="#ffca3c"
              fill="white"
            />
            <text
              id="Text_2_Image"
              data-name="Karunakar Patel"
              transform="translate(89)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="40">
                {/* Made In Love */}
              </tspan>
            </text>
            <text
              id="Converter"
              transform="translate(89 79)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="-20">
                Subhx infotech
              </tspan>
            </text>
            <path
              id="Path_8"
              data-name="Path 8"
              d="M57.441,14.809A2.014,2.014,0,0,1,56.872,17l-3.849,3.5a16.943,16.943,0,0,1,0,4.516l3.849,3.5a2.014,2.014,0,0,1,.569,2.187,22.034,22.034,0,0,1-1.4,3.049l-.418.72a22.619,22.619,0,0,1-1.965,2.773,2.013,2.013,0,0,1-2.178.6l-4.951-1.573a17.1,17.1,0,0,1-3.911,2.258L41.5,43.61a2.009,2.009,0,0,1-1.618,1.582,23.093,23.093,0,0,1-7.556,0,2.009,2.009,0,0,1-1.618-1.582L29.6,38.535a17.1,17.1,0,0,1-3.911-2.258l-4.942,1.582a2.029,2.029,0,0,1-2.178-.6A22.62,22.62,0,0,1,16.6,34.481l-.418-.72a22.034,22.034,0,0,1-1.4-3.049,2.014,2.014,0,0,1,.569-2.187l3.849-3.5a17.44,17.44,0,0,1-.151-2.267A17.2,17.2,0,0,1,19.2,20.5L15.35,17a2.014,2.014,0,0,1-.569-2.187,22.034,22.034,0,0,1,1.4-3.049l.418-.72a22.619,22.619,0,0,1,1.965-2.773,2.013,2.013,0,0,1,2.178-.6L25.7,9.236a17.105,17.105,0,0,1,3.911-2.258L30.72,1.9A2.009,2.009,0,0,1,32.337.32,22.037,22.037,0,0,1,36.115,0a22.969,22.969,0,0,1,3.778.311,2.009,2.009,0,0,1,1.618,1.582l1.111,5.076a17.1,17.1,0,0,1,3.911,2.258l4.951-1.573a2.029,2.029,0,0,1,2.178.6,22.62,22.62,0,0,1,1.965,2.773l.418.72a22.033,22.033,0,0,1,1.4,3.049ZM36.115,29.868A7.111,7.111,0,1,0,29,22.756a7.111,7.111,0,0,0,7.111,7.111Z"
              transform="translate(1.338 27)"
              fill="black"
            />
          </svg>
        </div>
        <div className="hidden md:block col-span-6 border-0 border-purple-400 m-0 p-0 ">
          <ul className="list-none flex space-x-6 text-white justify-end mt-2">
            <li>
              <Link href="/" className="text-white">
                <FaHome size={27} />
                {/* Login */}
              </Link>
            </li>

            {/* <li className={loginClassName}>
              <Link href="/login" className="text-white no-underline px-2">
                Login
              </Link>
            </li>

            <li className={registerClassName}>
              <Link href="/register" className="text-white no-underline px-2 text-center ">
                Register
              </Link>
            </li>
            <li className={logOutClassName}>
              <button onClick={onLogOutClickHandler} className="text-white px-2 no-underline">
                Logout
              </button>
            </li> */}

            {/* <li>
              <Link
                href="/"
                className=" text-white p-2 px-6 border no-underline rounded-md hover:bg-purple-500 hover:text-white ease-in-out"
              >
                Contact Me
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="md:hidden border-0 col-span-3 flex justify-center items-center  cursor-pointer">
          <GiHamburgerMenu size={27} fill="white" onClick={onOpenClickHandler} />
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
          Right
        </div>

        <div className="bg-brandColor dark:bg-slate-900 border-red-800">
          {/* React Wavify */}
          <Wave
            // fill={process.env.brandColor}
            fill="#36106A"
            paused={false}
            className="rotate-180 absolute top-0 right-0 left-0 -bottom-20 -z-40  "
            options={{
              height: 70,
              amplitude: 10,
              speed: 0.25,
              points: 3,
            }}
          />
        </div>
      </div>
      {/* Mobile */}
      <div
        className={
          openMobileMenu
            ? "mobile block md:block bg-slate-900 w-full h-screen z-50 p-0 m-0 fixed top-0 right-0 ease-in-out"
            : "hidden"
        }
      >
        <div
          className="mt-1 ml-0 cursor-pointer p-1 pb-4 mb-4 border-b border-b-slate-700"
          onClick={onLogoClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox="0 0 345 88">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M64,5H10A10,10,0,0,0,0,15V62A10,10,0,0,0,10,72H64A10,10,0,0,0,74,62V15A10,10,0,0,0,64,5Z"
              transform="translate(0 11)"
              // fill="#ffca3c"
              fill="white"
            />
            <text
              id="Text_2_Image"
              data-name="Text 2 Image"
              transform="translate(89)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="40">
                Karunakar Patel
              </tspan>
            </text>
            <text
              id="Converter"
              transform="translate(89 79)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="0">
                Good Boy
              </tspan>
            </text>
            <path
              id="Path_8"
              data-name="Path 8"
              d="M57.441,14.809A2.014,2.014,0,0,1,56.872,17l-3.849,3.5a16.943,16.943,0,0,1,0,4.516l3.849,3.5a2.014,2.014,0,0,1,.569,2.187,22.034,22.034,0,0,1-1.4,3.049l-.418.72a22.619,22.619,0,0,1-1.965,2.773,2.013,2.013,0,0,1-2.178.6l-4.951-1.573a17.1,17.1,0,0,1-3.911,2.258L41.5,43.61a2.009,2.009,0,0,1-1.618,1.582,23.093,23.093,0,0,1-7.556,0,2.009,2.009,0,0,1-1.618-1.582L29.6,38.535a17.1,17.1,0,0,1-3.911-2.258l-4.942,1.582a2.029,2.029,0,0,1-2.178-.6A22.62,22.62,0,0,1,16.6,34.481l-.418-.72a22.034,22.034,0,0,1-1.4-3.049,2.014,2.014,0,0,1,.569-2.187l3.849-3.5a17.44,17.44,0,0,1-.151-2.267A17.2,17.2,0,0,1,19.2,20.5L15.35,17a2.014,2.014,0,0,1-.569-2.187,22.034,22.034,0,0,1,1.4-3.049l.418-.72a22.619,22.619,0,0,1,1.965-2.773,2.013,2.013,0,0,1,2.178-.6L25.7,9.236a17.105,17.105,0,0,1,3.911-2.258L30.72,1.9A2.009,2.009,0,0,1,32.337.32,22.037,22.037,0,0,1,36.115,0a22.969,22.969,0,0,1,3.778.311,2.009,2.009,0,0,1,1.618,1.582l1.111,5.076a17.1,17.1,0,0,1,3.911,2.258l4.951-1.573a2.029,2.029,0,0,1,2.178.6,22.62,22.62,0,0,1,1.965,2.773l.418.72a22.033,22.033,0,0,1,1.4,3.049ZM36.115,29.868A7.111,7.111,0,1,0,29,22.756a7.111,7.111,0,0,0,7.111,7.111Z"
              transform="translate(1.338 27)"
              fill="black"
              // fill="#36106a"
            />
          </svg>
        </div>

        <div className={openMobileMenu ? "absolute right-5 top-5 cursor-pointer border" : ""}>
          <IoMdClose size={26} fill="white" onClick={onCloseClickHandler} />
          {/* <button className="text-white bg-slate-500 px-9 py-1" onClick={onCloseClickHandler}> */}
          {/* Close */}
          {/* </button> */}
        </div>
        <ul className="list-none  text-white p-0 m-0">
          <li className="p-3 m-0">
            <Link
              href="/"
              className="border-b border-dotted no-underline text-white pb-3 flex gap-3 ml-2 mr-2"
              onClick={onCloseClickHandler}
            >
              <span>
                <FaHome size={27} />{" "}
              </span>
              Home
            </Link>
          </li>
          <li className="p-3 m-0 -mt-0">
            <Link
              href="/Blog/nextjs-installation"
              className="border-b border-dotted no-underline text-white pb-3 m-0 flex gap-3 ml-2 mr-2"
              onClick={onCloseClickHandler}
            >
              <span>
                <FaCarSide size={25} className="pt-0" />
              </span>
              Cars Blog
            </Link>
          </li>
          {/* <li className="p-3 m-0 -mt-2">
            <Link href="/" className="border-b block no-underline text-white pb-2 m-0" onClick={onCloseClickHandler}>
              Contact Me
            </Link>
          </li> */}
        </ul>
      </div>
      <div className=" relative">
        <div
          className={` ${
            homePage
              ? "bg-brandColor dark:bg-slate-900 dark:border-b dark:border-b-slate-700  border-0 border-red-900 px-10"
              : "hidden"
          }`}
        >
          {/* <div className="border-0 border-white text-white   max-w-7xl m-auto pt-14">
            <div className="kpImage border-0 border-sky-800 flex justify-center">
              <Image src={KarunakarPatelImage} alt="Karunakar Patel Image" className="ring-2  rounded-full" />
            </div>
            <div className="text-white border-0 text-center pb-6">
              <h1 className="text-white font-bold text-3xl md:text-4xl">Welcome To VehicleMasti</h1>
              <p className="text-white font-semibold text-xl">A Place where you will learn about Automobiles</p>
            </div>
          </div> */}
        </div>
        <div>
          {/* React Wavify */}
          <Wave
            fill="#36106A"
            // fill={process.env.brandColor}
            paused={false}
            className="rotate-180 absolute top-0 -bottom-20 -z-10 dark:bg-slate-600 "
            options={{
              height: 50,
              amplitude: 20,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
