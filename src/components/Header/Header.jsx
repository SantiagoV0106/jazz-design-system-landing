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

  const HEADER_OFFSET = 85;

  const handleNavClick = (id, isExternal) => {
    if (isExternal) {
      window.open(
        "https://www.figma.com/design/R0euCPDfQnGlKY9JdyrK8o/Jazz-Design-System?node-id=2436-1434&t=5B36PkvSurRkZ9G9-1",
        "_blank",
        "noopener noreferrer"
      );
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - HEADER_OFFSET;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false); // Cierra el menú hamburguesa
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Fondo dinámico */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? "bg-primary-blue opacity-100" : "bg-primary-blue opacity-0"
          }`}
      ></div>

      <div className="relative flex w-full justify-between items-center py-4 px-28 max-lg:px-14">
        {/* Logo */}
        <div>
          <img className="w-[30px]" src={logo} alt="Jazz" />
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="text-white text-2xl lg:hidden z-50"
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
          className={`${menuOpen
            ? "fixed inset-0 h-[100dvh] z-40 bg-primary-blue flex flex-col items-center justify-center gap-8"
            : "hidden lg:static lg:w-auto"
            } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 text-center gap-9">
            {navLinks.map(({ id, name, isExternal }) => (
              <li
                className="text-white text-2xl lg:text-base cursor-pointer hover:text-gray-400"
                key={id}
                onClick={() => handleNavClick(id, isExternal)}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
