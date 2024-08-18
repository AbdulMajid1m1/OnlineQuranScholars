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
      <div className="navvv">
        <nav>
          <div className="logo">
            <img
              onClick={handleClick}
              src="./images/Group-25.jpeg"
              alt="logo"
              style={{ cursor: "pointer" }}
            />
          </div>

          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger ${isNavActive ? "hamburger-active" : ""}`}
            onClick={toggleNav}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
        <div className={`menubar ${isNavActive ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={toggleNav}
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                onClick={toggleNav}
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                onClick={toggleNav}
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? "#13B3AD" : "initial",
                })}
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" onClick={toggleNav} activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleNav}
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
