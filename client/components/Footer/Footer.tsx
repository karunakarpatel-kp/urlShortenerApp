import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className={
          " bg-brandColor dark:bg-slate-900 dark:border-t dark:border-t-slate-800 md:ml-0 pl-2 md:grid grid-cols-12 w-full h-16 "
        }
      >
        {/* Desktop */}
        <div className="Left border-0 border-white col-span-1 invisible">Left</div>
        <div className="copyrightMessage border-0 border-green-500 col-span-3 cursor-pointer text-white flex items-center font-semibold text-base justify-center md:justify-start">
          Karunakar Patel @All Rights Reserved
        </div>
        <div className="privacyLinks border-0 border-red-800 col-span-4">
          <ul className="list-none flex space-x-6 text-white justify-center md:justify-end mt-3">
            <li>
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-white">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className="socialShare border-yellow-600 col-span-3">
          <ul className="list-none flex space-x-6 text-white justify-center md:justify-end mt-3">
            <li>
              <Link href="/" className="text-white">
                <FaFacebookSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                <FaTwitterSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <ImInstagram size={23} className="pt-0" />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <FaPinterestSquare size={23} className="pt-0" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="Right border-0 border-white col-span-1 invisible">Right</div>
      </div>
    </>
  );
};

export default Footer;

{
  /* <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>

        <div className="col-span-9 md:col-span-4 border border-green-800 mt-1 ml-0 cursor-pointer text-white flex items-center font-semibold text-base">
          Karunakar Patel @All Rights Reserved
        </div>

        <div className="hidden md:block col-span-6 border border-purple-400 m-0 p-0 items-center ">
          <div className="lists">
            <ul className="list-none flex space-x-6 text-white justify-end mt-3">
              <li>
                <Link href="/privacy" className="text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <ul className="list-none flex space-x-6 text-white justify-end mt-3">
            <li>
              <Link href="/" className="text-white">
                <FaFacebookSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                <FaTwitterSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <ImInstagram size={23} className="pt-0" />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <FaPinterestSquare size={23} className="pt-0" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
          Right
        </div> */
}
