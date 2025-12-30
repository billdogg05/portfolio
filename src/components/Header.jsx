import { useEffect, useRef, useState } from "react";
import BarsIcon from "../assets/icons/bars.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";

function Header() {
    const navbar = useRef(null);
    const header = useRef(null);

    useEffect(() => {
        if (!navbar.current) return;
        if (!header.current) return;

        const updateNavbarHeight = () => {
            const navbarHeight = navbar.current.clientHeight;
            header.current.style.setProperty('--navbar-height', `${navbarHeight}px`);
        }

        const handleScroll = () => {
            if (pageYOffset === 0) {
                navbar.current.classList.remove('shadow-bottom', 'xs:py-4', 'py-3');
                navbar.current.classList.add('xs:py-5', 'py-4');
            } else {
                navbar.current.classList.add('shadow-bottom', 'xs:py-4', 'py-3');
                navbar.current.classList.remove('xs:py-5', 'py-4');
            }
            updateNavbarHeight();
        }

        updateNavbarHeight();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    // Mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsMenuOpen(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                navbar.current &&
                !navbar.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <header className="mt-(--navbar-height)" ref={header}>
            <nav className="bg-surface xs:py-5 py-4 fixed top-0 right-0 left-0 z-50 duration-500 transition-[padding, box-shadow]" ref={navbar}>
                <div className="my-container flex justify-between items-center">
                    <div className="cursor-pointer xs:hidden">
                        <BarsIcon className={`h-4 w-auto ${isMenuOpen ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        <CloseIcon className={`h-4 w-auto ${isMenuOpen ? '' : 'hidden'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                    <ul className={`flex gap-x-8 gap-y-2 transition-discrete duration-300
                        max-xs:flex-col max-xs:fixed max-xs:top-(--navbar-height) max-xs:right-0 max-xs:left-0
                        max-xs:bg-surface max-xs:px-2 max-xs:py-4
                        ${isMenuOpen ? 'max-xs:translate-x-0' : 'max-xs:-translate-x-full'}`}>
                        {/* <li onClick={() => setIsMenuOpen(false)}><a href="#projects" className="font-medium text-heading hover:text-primary">Projects</a></li> */}
                        <li onClick={() => setIsMenuOpen(false)}><a href="#experience" className="font-medium text-heading hover:text-primary">Experience</a></li>
                        <li onClick={() => setIsMenuOpen(false)}><a href="#education" className="font-medium text-heading hover:text-primary">Education</a></li>
                        <li onClick={() => setIsMenuOpen(false)}><a href="#skills" className="font-medium text-heading hover:text-primary">Skills</a></li>
                    </ul>
                    {/* <select name="language" id="language-select" className="focus:outline-none shadow-card bg-white-bg text-text font-medium text-sm py-1 px-2 rounded-sm cursor-pointer">
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select> */}
                </div>
            </nav>
        </header>
    );
}

export default Header