import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Group.svg";

/* SVG Icons */
const Wallet = ({ s = 16 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h18" />
    <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8" />
    <path d="M21 13h-6a2 2 0 0 1 0-4h6" />
  </svg>
);

const User = ({ s = 16 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  </svg>
);

const Cart = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.4 12.3a2 2 0 0 0 2 1.7h10.2a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

const pill = "rounded-bl-[40px] rounded-br-[40px] border border-white/20 bg-card py-2";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 py-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* LOGO + NAME */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="PowerWin" className="w-12 sm:w-[60px]" />
          <span className="hidden sm:inline text-xl sm:text-2xl font-semibold">
            POWER&nbsp;WIN
          </span>
        </Link>

        {/* Hamburger Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border border-white/30 px-3 py-2 rounded-full bg-card"
          >
            ☰
          </button>
        </div>

        {/* NAVIGATION - desktop */}
        <nav
          className={`${
            pill
          } hidden sm:flex gap-6 px-6 flex-1 justify-center transition-all`}
        >
          {[
            ["Home", "/"],
            ["Competitions", "/competitions"],
            ["Winners", "/winners"],
            ["Referral Win", "/referral"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                [
                  "px-8 py-4 text-base transition-colors",
                  isActive
                    ? "bg-white/20 text-white rounded-full py-2"
                    : "text-neutral-300 hover:bg-white/10 hover:text-white rounded-full py-2",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Wallet */}
          <div className="rounded-[32px] border border-white/20 bg-card px-4 py-3 text-sm text-left">
            <div className="flex items-center gap-2 mb-1">
              <Wallet s={14} />
              <span className="font-medium">Wallet</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="opacity-70">Credit</span>
              <span>£125.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="opacity-70">Rotiri</span>
              <span>27</span>
            </div>
          </div>

          {/* Profile */}
          <div className="rounded-[32px] border border-white/20 bg-card px-4 py-3 text-center text-sm">
            <User s={16} />
            <div className="font-medium mt-1">John&nbsp;Doe</div>
            <div className="opacity-60 text-xs">johndoe@gmail.com</div>
          </div>

          {/* Cart + Lang */}
          <div className="flex flex-col items-center gap-4">
            <button className="rounded-[32px] border border-white/20 bg-card px-4 py-3 text-sm">
              EN
            </button>
            <button className="rounded-[32px] border border-white/20 bg-card p-3">
              <Cart s={18} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="flex flex-col sm:hidden mt-4 gap-2 text-center">
          {[
            ["Home", "/"],
            ["Competitions", "/competitions"],
            ["Winners", "/winners"],
            ["Referral Win", "/referral"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
