import React from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search";
import Login from "./Pages/Login";


export default function NavBar() {
  return (
    <header className="bg-dark p-1 border border-secondary  border-2 ">
      <nav className="nav nav-pills flex-row P-1 mt-2 ">
        <img
          src="https://media4.giphy.com/media/HK7H4rCNJXsrMP5u8W/giphy.gif?cid=ecf05e47wzrakgqqr8g5m3t4sbvjnixjf5868wbkkzd8dqa6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="mic"
          className=" navbar-brand rounded-circle mb-3 p-1"
          width="60"
          height="60"
        />
        <Link
          to="/"
          className="flex-sm-fill text-sm-center nav-link fw-bold  text-light"
          aria-current="page"
          href="#"
        >
          Home
        </Link>
        <a
          className="flex-sm-fill text-sm-center nav-link dropdown-toggle text-light  fw-bold"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          Genres
        </a>
        <ul className="dropdown-menu " data-bs-theme="dark">
          <li>
            <Link to="?genres=1" className="dropdown-item">
              Personal Growth
            </Link>
          </li>
          <li>
            <Link to="?genres=2" className="dropdown-item">
              True Crime& Investigative Journalim
            </Link>
          </li>
          <li>
            <Link to="?genres=3" className="dropdown-item">
              History
            </Link>
          </li>
          <li>
            <Link to="?genres=4" className="dropdown-item">
              Comedy
            </Link>
          </li>
          <li>
            <Link to="?genres=5" className="dropdown-item">
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="?genres=6" className="dropdown-item">
              Business
            </Link>
          </li>
          <li>
            <Link to="?genres=7" className="dropdown-item">
              Fiction
            </Link>
          </li>
          <li>
            <Link to="?genres=8" className="dropdown-item">
              News
            </Link>
          </li>
          <li>
            <Link to="?genres=9" className="dropdown-item">
              Kids & Family
            </Link>
          </li>
          <li>
            <Link to="." className="dropdown-item">
              Clear
            </Link>
          </li>
        </ul>
        <Link
          to="/podcasts"
          className="flex-sm-fill text-sm-center nav-link text-light  fw-bold"
          href="#"
        >
          Podcasts
        </Link>
        <Link
          to="/about"
          className="flex-sm-fill text-sm-center nav-link text-light  fw-bold"
          href="#"
        >
          About
        </Link>
        
        <Link
          to="/fav"
          className="flex-sm-fill text-sm-center nav-link text-light  fw-bold"
          href="#"
        >
         <img src="https://www.flaticon.com/free-icons/star" alt="pic" width="15"
          height="15" /> Favorites
        </Link>
        <Search />
        <Link
          to="/login"
          className="btn btn-outline-dark ms-2 text-secondary fw-bold mb-2 mt-1  "
        >
          login
        </Link>
        <Link
          to="/signOut"
          className="btn btn-outline-dark ms-2 text-secondary fw-bold mb-2 mt-1 "
        >
          sign Out
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}
