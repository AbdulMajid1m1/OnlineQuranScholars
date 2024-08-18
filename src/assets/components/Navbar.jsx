import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            onClick={handleClick}
            src="./images/Group-25.jpeg"
            alt="Website Logo"
            style={{ cursor: "pointer" }}
            aria-label="Navigate to Home"
          />
        </div>

        <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packages"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div
          className={`hamburger ${isNavActive ? "hamburger-active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`menubar ${isNavActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packages"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleNav}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
