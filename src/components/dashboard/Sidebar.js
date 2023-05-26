import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ urls = [], username }) => {
  return (
    <div className="flex flex-col justify-between items-start min-h-screen w-full bg-black py-10 flex-grow">
      <div className="flex flex-col items-start gap-4 w-[80%] mx-auto">
        <div className="block py-2 px-4 font-bold text-2xl uppercase">{username}</div>
        <ul className="mt-4">
          {urls.map((e, i) => (
            <li key={e.link + i}>
              <Link
                to={e.link}
                className="block py-2 px-4 capitalize">
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className="block py-2 px-4 bg-[#85714D] w-[80%] mx-auto">
        Deposit funds
      </button>
    </div>
  );
};

export default Sidebar;
