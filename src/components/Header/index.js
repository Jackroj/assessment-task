import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({open, setOpen}) {

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="">Welcome</span>
          </a>
        </div>
       
          <Link to={"/posts"} className="text-sm font-semibold leading-6 text-gray-900">
            Post section
          </Link>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
          </div>
        </div>
      </nav>
    </header>
  )
}
