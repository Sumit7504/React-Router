import { BrowserRouter, NavLink } from "react-router-dom";

export function MyMenu() {
  const activeStyle = { color: "red", fontWeight: "bold" };
  // We use a function to check if the link is active
  // If isActive is true, we make the text red. If false, we do nothing (null).
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        About
      </NavLink>

      {/* We add "end" so Dashboard only lights up exactly at "/host" */}
      <NavLink
        to="/host"
        end
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Dashboard
      </NavLink>

      {/* Child link: lights up at "/host/income" */}
      <NavLink
        to="/host/income"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Income
      </NavLink>
    </nav>
  );
}

export default function NavLinkApp() {
  return (
    <BrowserRouter>
      <MyMenu />
    </BrowserRouter>
  );
}
