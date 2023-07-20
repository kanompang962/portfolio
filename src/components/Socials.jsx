import React, { useContext } from "react";
import {
  ImFacebook,
  ImInstagram,
  ImYoutube,
  ImPinterest,
  ImTwitter,
} from "react-icons/im";

// import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  //   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="hidden xl:flex ml-24 ">
      <ul className="flex gap-x-2">
        <li className="cursor-pointer flex items-center rounded-full p-2 hover:bg-black hover:text-white transition duration-500 ease-out">
          <a href="http://www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li className="cursor-pointer flex items-center rounded-full p-2 hover:bg-black hover:text-white transition duration-500 ease-out">
          <a href="http://www.twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li className="cursor-pointer flex items-center rounded-full p-2 hover:bg-black hover:text-white transition duration-500 ease-out">
          <a href="http://www.pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li className="cursor-pointer flex items-center rounded-full p-2 hover:bg-black hover:text-white transition duration-500 ease-out">
          <a href="http://www.instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li className="cursor-pointer flex items-center rounded-full p-2 hover:bg-black hover:text-white transition duration-500 ease-out">
          <a href="http://www.youtobe.com" target="_blank">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
