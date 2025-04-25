import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Group.svg";

/* ─── SVG ICONS ──────────────────────────────────────────── */
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
/* ────────────────────────────────────────────────────────── */

const pill = "rounded-bl-[40px] rounded-br-[40px] border border-white/20 bg-card py-2";

export const Header = () => (
  <header className="w-full pl-12 pr-6 text-white mb-12">
    <div className="flex items-center justify-between gap-8">
      {/* LOGO LEFT */}
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img src={logo} alt="PowerWin" className="w-[90px] h-auto" />
        <span className="hidden sm:inline text-2xl logofont text-black font-400">POWER&nbsp;WIN</span>
      </Link>

      {/* NOTCH NAV CENTERED */}

      <nav className={`flex gap-6 px-8 pb-4 mt-[-24px] ${pill} justify-center bg-stone-900`}>

        {[
          ["Home", "/competitions"],
          ["Competitions", "/"],
          ["Winners", "/winners"],
          ["Referral Win", "/referral"],
        ].map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              [
                "px-8 py-4 text-base transition-colors border-1 border-white",
                isActive
                  ? "bg-white/30 text-black rounded-full py-2"
                  : "text-neutral-300 bg-white/7.5 hover:bg-white/10 hover:text-white rounded-full py-2",
              ].join(" ")
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* RIGHT GROUP */}
      <div className="flex items-center gap-3 shrink-0">
        {/* WALLET */}
        <div className="p-[1px] ml-2 rounded-[16px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
          <div className="rounded-[16px]  cursor-pointer  bg-card px-4 py-3 text-sm text-left bg-[linear-gradient(90deg,var(--pw-button-primary-color),var(--pw-button-secondary-color))]">
            <div className="flex items-center gap-2 mb-1">
              <Wallet s={14} />
              <span className="font-medium">Wallet</span>
            </div>
            <div className="flex text-xs gap-2 justify-center">
              <span className="opacity-100 font-medium">Credit</span>
              <span className="font-extralight">£125.00</span>
            </div>
            <div className="flex text-xs gap-2 justify-center">
              <span className="opacity-100 font-medium">Rotiri</span>
              <span className="font-extralight">27</span>
            </div>
          </div></div>

        {/* PROFILE */}
        <div className="p-[1px] ml-2 rounded-[16px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
          <div className="rounded-[16px] cursor-pointer  flex flex-col items-center bg-card px-4 py-3 text-center text-sm bg-[linear-gradient(90deg,var(--pw-button-primary-color),var(--pw-button-secondary-color))]">
            <User s={16} />
            <div className="font-medium mt-1">John&nbsp;Doe</div>
            <div className="opacity-60 text-xs font-medium">johndoe@gmail.com</div>
          </div>
        </div>

        {/* LANGUAGE & CART STACKED */}
        <div className="flex flex-col pt-1 items-center justify-center gap-1">
          <div className="p-[1px] ml-1.5 rounded-[8px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
            <button className="rounded-[8px]  cursor-pointer  px-4 py-3 text-sm  bg-[linear-gradient(90deg,var(--pw-button-primary-color),var(--pw-button-secondary-color))]">
              EN
            </button>
          </div>
          <div className="p-[1px] ml-1.5 rounded-[8px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit transition duration-200">
            <button className="rounded-[8px] cursor-pointer px-4 py-3 text-sm bg-[linear-gradient(90deg,var(--pw-button-primary-color),var(--pw-button-secondary-color))]">
              <svg width="18" height="18" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.492 1.3657C16.8428 0.958135 17.278 0.626306 17.7693 0.391612C18.2607 0.156918 18.7975 0.0245715 19.3449 0.0031079C19.8924 -0.0183557 20.4384 0.0715404 20.9478 0.266998C21.4571 0.462456 21.9185 0.759135 22.3022 1.1379L22.5139 1.3657L30.2217 10.3219H36.073C36.4844 10.3211 36.8913 10.4044 37.2671 10.5664C37.6429 10.7284 37.9792 10.9655 38.2538 11.2621C38.5284 11.5587 38.7353 11.9081 38.8608 12.2875C38.9863 12.6669 39.0276 13.0677 38.982 13.4636L38.8017 14.9177L38.6057 16.3225L38.4449 17.3741L38.2587 18.5036L38.047 19.6901L37.8078 20.9202L37.5412 22.1749C37.4001 22.8077 37.2485 23.4398 37.0865 24.0713C36.6526 25.7381 36.1078 27.376 35.4555 28.9747L35.0223 29.9998L34.6028 30.9261L34.2069 31.75L34.0226 32.1183L33.5345 33.0484C32.9072 34.2064 31.7232 34.8898 30.4706 34.9885L30.157 34.9999H8.82937C8.14407 35.0049 7.47024 34.8295 6.87986 34.4925C6.28947 34.1554 5.8047 33.6695 5.47733 33.0864L5.02255 32.2322L4.66971 31.5298L4.48348 31.1406L4.09143 30.2883C3.19618 28.2752 2.46984 26.1955 1.91947 24.0694C1.81305 23.6567 1.71111 23.2428 1.61367 22.828L1.33531 21.5979L1.08636 20.3943L0.866808 19.2307L0.670782 18.1164L0.50024 17.0647L0.355181 16.0909L0.178758 14.7943L0.0493811 13.7389L0.0160568 13.4484C-0.0244921 13.0755 0.0119455 12.6984 0.12325 12.3393C0.234554 11.9801 0.418503 11.6459 0.664396 11.3562C0.910288 11.0665 1.21321 10.8271 1.55555 10.6518C1.89789 10.4765 2.2728 10.3689 2.65848 10.3352L2.92508 10.3219H8.78428L16.492 1.3657ZM15.506 19.2857C15.3734 18.8378 15.0753 18.4528 14.6685 18.204C14.2617 17.9551 13.7747 17.8599 13.3 17.9363C12.8254 18.0128 12.3964 18.2556 12.0947 18.6185C11.793 18.9815 11.6397 19.4392 11.6639 19.9046L11.6894 20.1248L12.6695 25.8197L12.7185 26.0361C12.8511 26.484 13.1492 26.869 13.556 27.1178C13.9628 27.3667 14.4499 27.4619 14.9245 27.3855C15.3991 27.309 15.8281 27.0662 16.1298 26.7033C16.4315 26.3403 16.5849 25.8826 16.5606 25.4172L16.5351 25.197L15.555 19.5021L15.506 19.2857ZM25.7052 17.9417C25.2314 17.8652 24.7451 17.9598 24.3386 18.2075C23.9321 18.4553 23.6336 18.839 23.4999 19.2857L23.4509 19.5021L22.4708 25.197C22.389 25.6747 22.4987 26.1645 22.7775 26.5664C23.0563 26.9682 23.4831 27.2518 23.9707 27.3589C24.4582 27.4661 24.9696 27.3889 25.4002 27.143C25.8309 26.8971 26.1483 26.5011 26.2874 26.0361L26.3364 25.8197L27.3165 20.1248C27.4016 19.6284 27.2796 19.1196 26.9775 18.7103C26.6753 18.3009 26.2177 18.0245 25.7052 17.9417ZM19.503 3.79553L13.8868 10.3219H25.1191L19.503 3.79553Z" fill="white" />
              </svg>

            </button></div>
        </div>
      </div>
    </div>
  </header>
);