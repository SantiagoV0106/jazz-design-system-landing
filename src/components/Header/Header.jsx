import { useState, useEffect } from "react";
import logo from "../../assets/images/logos/Jazz-logo.webp";
import { navLinks } from "../../data/navlinks";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between py-6 px-28 max-lg:px-14">
            {/* Fondo dinámico */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                    scrolled ? "bg-primary-blue opacity-100" : "bg-primary-blue opacity-0"
                }`}
            ></div>

            <div className="relative flex w-full justify-between items-center">
                {/* Logo */}
                <div>
                    <img className="w-[30px]" src={logo} alt="Jazz" />
                </div>

                {/* Botón Hamburguesa */}
                <button
                    className="text-white text-2xl lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navegación */}
                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-primary-blue lg:bg-transparent`}
                >
                    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-0">
                        {navLinks.map(({ id, name }) => (
                            <li className="text-white cursor-pointer" key={id}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
