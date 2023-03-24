// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

// importing header css
import "./Header.css";

// exporting header component
export default function Header() {
  return (
    <nav className="bg-dark">
      <ul className="nav justify-content-end p-3 header display">
        {/* login link */}
        <li className="nav-item ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "inactive nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        {/* login link */}
        <li className="nav-item ms-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "inactive nav-link"
            }
            to="register"
          >
            Register
          </NavLink>
        </li>

        {/* login link */}
        <li className="nav-item ms-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "inactive nav-link"
            }
            to="contact-us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
