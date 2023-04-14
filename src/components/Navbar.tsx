import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            MarketPlace
          </span>
        </a>
   
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
            
                 <SignInButton>
                     <span className="text-white cursor-pointer hover:text-blue-700">Sign in</span>
                 </SignInButton>
            </li>
       
              
              <li>
                <UserButton />
              </li>
              
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
