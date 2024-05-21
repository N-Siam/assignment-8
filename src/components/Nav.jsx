import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-color nav-border rounded-lg" : "text-black"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-color nav-border rounded-lg" : "text-black"
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-color nav-border rounded-lg" : "text-black"
          }
          to="/pages-to-read"
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar font-sans">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 font-normal text-lg"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold">
          BookBlitz
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal text-lg gap-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end rounded-lg gap-4 font-semibold text-lg">
        <a className="btn theme-color text-white">Sign In</a>
        <a className="btn theme-color2 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
