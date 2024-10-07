import React from "react";
import Link from 'next/link';


function Navbar(){
    const setDarkMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","dark"); 
  };
  const setLightMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","light"); 
  };
  const togglTheme=(e:any)=>{
    if(e.target.checked){
       setDarkMode();
    }
    else{
      setLightMode();
    }
  };
    return(
        <>
        <nav className="bg-gray-800 navbar">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-[19px] w-[108px]" src="https://api.logo.com/api/v2/images?logo=lg_9nLJtcZZj3wM2cXSl9&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-10-05T12%3A53%3A32.193Z" alt="Your Company"/>
          <a href="/" id="steel" style={{textDecoration:"none"}}><span className=" block rounded-md px-3 py-1 text-xl font-medium" aria-current="page"></span></a>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 mt-[5px]">
            <a href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
            <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Download</a>
          </div>

        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
      <label className="inline-flex items-center cursor-pointer">
  <input  type="checkbox" value="" className="sr-only peer" onClick={togglTheme}/>
  <div id="dark" className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span id="dark1" className="ms-3 text-sm font-medium text-900 dark:text-gray-300">Dark</span>
</label>


        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
  
    <Link href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
      <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pricing</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Download</a>
    </div>
  </div>
</nav>
</>
    );

}

export default Navbar;