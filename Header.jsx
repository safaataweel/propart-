
// import React, { useState } from "react";
// import { BsMoonFill, BsSunFill } from "react-icons/bs";

// const Header = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     // Additional logic for dark mode can be implemented here
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-3 bg-white shadow-md">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-4 text-[#1D3557]">
//         <div className="w-4 h-4">
//           <svg
//             viewBox="0 0 48 48"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g clipPath="url(#clip0_6_543)">
//               <path
//                 d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
//                 fill="currentColor"
//               ></path>
//             </g>
//             <defs>
//               <clipPath id="clip0_6_543">
//                 <rect width="48" height="48" fill="white"></rect>
//               </clipPath>
//             </defs>
//           </svg>
//         </div>
//         <h2 className="text-[#1D3557] text-lg font-bold leading-tight tracking-[-0.015em]">
//           Recommendation System
//         </h2>
//       </div>

//       {/* Navigation Links, Dark Mode Toggle, and Profile Picture */}
//       <div className="flex items-center space-x-9">
//         <nav className="flex space-x-5">
//           <a
//             href="#"
//             className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
//           >
//             Users
//           </a>
//           <a
//             href="#"
//             className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
//           >
//             Profile
//           </a>
//         </nav>
//         <button
//           onClick={toggleDarkMode}
//           className="flex items-center justify-center h-10 w-10 rounded-xl bg-gray-200 text-[#1D3557]"
//         >
//           {darkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
//         </button>
//         <div
//           className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10"
//           style={{
//             backgroundImage:
//               'url("https://cdn.usegalileo.ai/stability/90e338a6-2c0e-44ba-81c4-acb4b89c363b.png")',
//           }}
//         ></div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import matchifyLogo from './assets/matchify_logo1.jpg'; // Adjust the path according to your folder structure

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Additional logic for dark mode can be implemented here
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 bg-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src={matchifyLogo}
          alt="Matchify Logo"
          className="h-12 object-contain"  
        />
        <h2 className="text-[#1D3557] text-2xl font-bold leading-tight tracking-[-0.015em]">
          Matchify
        </h2>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center w-1/3">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for articles, ads, or people"
            className="block w-full pl-10 p-2.5 bg-[#FFFAFA] text-[#1D3557] border border-[#1D3557] rounded-xl shadow-sm focus:outline-none focus:ring-[#33527A] focus:border-[#33527A]"
          />
        </div>
      </div>

      {/* Navigation Links, Dark Mode Toggle, and Profile Picture */}
      <div className="flex items-center space-x-9">
        <nav className="flex space-x-5">
          <a
            href="#"
            className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
          >
            Users
          </a>
          <a
            href="#"
            className="text-[#1D3557] text-sm font-medium leading-normal hover:bg-[#33527A] hover:text-white py-2 px-4 rounded-full transition duration-300"
          >
            Profile
          </a>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#FFFAFA] text-[#1D3557] border border-[#1D3557] shadow-sm"
        >
          {darkMode ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
        </button>
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-[#1D3557]"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/90e338a6-2c0e-44ba-81c4-acb4b89c363b.png")',
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
