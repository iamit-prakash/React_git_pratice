import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <NavLink to="/" className="brand">
          Wonders
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/architecture">Architecture</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}
