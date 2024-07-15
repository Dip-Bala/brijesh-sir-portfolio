import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const linkStyle = (path) => {
    return activeLink === path
      ? 'bg-purple-400 border rounded-full text-white'
      : 'bg-white text-gray-700 hover:bg-gray-200 hover:border rounded-full ';
  };

  return (
    <div className="flex flex-col flex-nowrap w-100 mt-4 justify-center items-end bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ...">
      <div className="flex flex-row flex-nowrap gap-6 p-4 mr-8 text-lg font-semibold ">
        <Link
          to="/"
          className={`flex-1 px-4 py-2 ${linkStyle('/')}`}
          onClick={() => handleLinkClick('/')}
        >
          <p>Home</p>
        </Link>
        <Link
          to="/research"
          className={`px-4 py-2 ${linkStyle('/research')}`}
          onClick={() => handleLinkClick('/research')}
        >
          <p>Research</p>
        </Link>
        <Link
          to="/publications"
          className={`px-4 py-2 ${linkStyle('/publications')}`}
          onClick={() => handleLinkClick('/publications')}
        >
          <p>Publications</p>
        </Link>
        <Link
          to="/events"
          className={`px-4 py-2 ${linkStyle('/events')}`}
          onClick={() => handleLinkClick('/events')}
        >
          <p>Events</p>
        </Link>
        <Link
          to="/resume"
          className={`px-4 py-2 ${linkStyle('/resume')}`}
          onClick={() => handleLinkClick('/resume')}
        >
          <p>Resume</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
