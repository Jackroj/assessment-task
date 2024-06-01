import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

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
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
