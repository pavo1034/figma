import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <span style={{ color: "#0f182a", fontSize: "large" }}>LOGO</span>

      <div>
        <NavLink className="Nav" to="/">
          Product &#9660;
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className="Nav" to="/">
          Solution &#9660;
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className="Nav" to="/">
          Enterprice
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className="Nav" to="/">
          Pricing
        </NavLink>
        &nbsp;&nbsp;
      </div>
      <div>
        <NavLink className="Nav" to="/login">
          Login
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className="Nav" to="/signup">
          Sign Up
        </NavLink>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Nav;
