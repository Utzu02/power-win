import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaTiktok,
    FaTelegramPlane
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#141414] to-[#1b1b1b] text-white text-base pl-2 mt-10 pr-10 pt-16 pb-7">
            <div className="w-full px-4 md:px-16">
                <div className="flex flex-col md:flex-row justify-between gap-12 pb-8">
                    {/* Logo & info */}
                    <div className="flex flex-col gap-0.2 text-white text-sm">
                        <div className="flex items-center gap-4 cursor-pointer mb-5">
                            <svg width="48" height="44" viewBox="0 0 96 89 " fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.9624 32.1738L66.4352 57.396L73.1297 68.5603L96 32.1738H81.9624Z" fill="url(#paint0_linear_67_29)" />
                                <path d="M14.0418 32.1738L43.2134 77.0989L35.7238 89.0001L0 32.1738H14.0418Z" fill="url(#paint1_linear_67_29)" />
                                <path d="M72.9875 32.1737L49.0753 0L25.1632 32.1737L60.8829 89L68.3724 77.0987L56.0293 58.091L72.9875 32.1737ZM39.2009 32.1737L49.0753 18.4256L59.1297 32.1737L49.4561 47.9653L39.2009 32.1737Z" fill="url(#paint2_linear_67_29)" />
                                <defs>
                                    <linearGradient id="paint0_linear_67_29" x1="81.2176" y1="32.1738" x2="81.2176" y2="68.5603" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#C6933B" />
                                        <stop offset="1" stopColor="black" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_67_29" x1="6.48536" y1="28.4259" x2="40.0467" y2="86.5048" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#C6933B" />
                                        <stop offset="1" stopColor="black" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_67_29" x1="49.0753" y1="1.12229" x2="49.0753" y2="86.2613" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CB0033" />
                                        <stop offset="1" stopColor="black" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-black logofont font-bohme font-bold text-[12px]">POWER WIN</span>
                        </div>
                        <span>© Copyright PowerWin 2025</span>
                        <span>Registered Company Number: 11320154</span>
                        <span>England and Wales</span>
                        <span className="mt-6">18+</span>
                    </div>

                    {/* Linkuri Navigație */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-15 text-white text-sm md:text-base">
                        <ul className="flex flex-col gap-3.5">
                            <li className="hover:text-gray-300 cursor-pointer">Acasă</li>
                            <li className="hover:text-gray-300 cursor-pointer">Câștigători</li>
                            <li className="hover:text-gray-300 cursor-pointer">Întrebări Frecvente (FAQ)</li>
                            <li className="hover:text-gray-300 cursor-pointer">Contul Meu</li>
                        </ul>
                        <ul className="flex flex-col gap-3.5">
                            <li className="hover:text-gray-300 cursor-pointer">Aplicație Mobilă</li>
                            <li className="hover:text-gray-300 cursor-pointer">Refferal Win</li>
                            <li className="hover:text-gray-300 cursor-pointer">Extrageri Live</li>
                            <li className="hover:text-gray-300 cursor-pointer">Despre Noi</li>
                        </ul>
                        <ul className="flex flex-col gap-3.5">
                            <li className="hover:text-gray-300 cursor-pointer">Competiții</li>
                            <li className="hover:text-gray-300 cursor-pointer">Participare Prin Poștă</li>
                            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Buton Telegram */}
                    <div className="flex items-start justify-center md:justify-start">
                        <button className="bg-[#2177BC] hover:bg-[#1d6aa9] text-white rounded-xl pr-6 pl-4.5 py-3 text-base md:text-lg flex items-center cursor-pointer gap-5">
                            <FaTelegramPlane className="text-3xl" /> Join Telegram
                        </button>
                    </div>

                </div>

                {/* Separator SVG */}
                <div className="w-full my-6">
                    <svg width="100%" height="2" viewBox="0 0 2670 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L2670 0.999767" stroke="url(#paint0_linear_61_144)" />
                        <defs>
                            <linearGradient id="paint0_linear_61_144" x1="0" y1="1.5" x2="2670" y2="1.49977" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.5" stopColor="white" />
                                <stop offset="0.9" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm md:text-base gap-6 text-center md:text-left">
                    <div className="flex gap-4 flex-wrap justify-center">
                        {["applepay.svg", "visa.svg", "paypal.svg", "googlepay.svg", "mastercard.svg", "bitcoin.svg"].map((src, idx) => (
                            <div key={idx} className="rounded-md px-4 py-2 flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform bg-white w-[60px] h-[33px]">
                                <img
                                    src={`/assets/icons/${src}`}
                                    alt={src.split('.')[0]}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-gray-300 cursor-pointer">Terms & Conditions</span>
                        <span className="hover:text-gray-300 cursor-pointer">Acceptable Use Policy</span>
                        <span className="hover:text-gray-300 cursor-pointer">Cookie Policy</span>
                    </div>
                    <div className="flex gap-4 text-xl text-white justify-center">
                        {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 shadow-md bg-gradient-to-b from-black via-[#121212] to-[#161616] hover:via-[#1a1a1a] transition-all cursor-pointer"
                            >
                                <Icon className="text-lg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
