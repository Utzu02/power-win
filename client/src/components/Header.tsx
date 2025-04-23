import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/Group.svg";

export const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-card rounded-b-2xl shadow-md">
    <Link to="/" className="flex items-center gap-2 text-xl font-bold">
      {/* Logo Placeholder */}
        <span className="text-accent">
            <img className="max-w-50" src={ logo } />
        </span> 
        PowerWin
    </Link>
    <nav className="flex gap-6 items-center text-primary-dim">
      {[
        ["Home", "/"],
        ["Competitions", "/competitions"],
        ["Winners", "/winners"],
        ["Referral", "/referral"],
      ].map(([label, path]) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
    <Button variant="accent" className="px-6">
      £12.50
    </Button>
  </header>
);