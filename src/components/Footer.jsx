import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            MovieApp
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
