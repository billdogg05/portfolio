import { useEffect, useRef } from "react";

function Header() {
    const navbar = useRef(null);
    const header = useRef(null);

    useEffect(() => {
        if (!navbar.current) return;
        if (!header.current) return;

        const navbarHeight = navbar.current.clientHeight;
        header.current.style.setProperty('--navbar-height', `${navbarHeight}px`);

        window.addEventListener('scroll', () => {
            if (pageYOffset === 0) {
                navbar.current.classList.remove('shadow-bottom');
                navbar.current.classList.remove('py-3');
                navbar.current.classList.add('py-5');
            } else {
                navbar.current.classList.add('shadow-bottom');
                navbar.current.classList.add('py-3');
                navbar.current.classList.remove('py-5');
            }
        })
    })



    return (
        <header className="mt-(--navbar-height)" ref={header}>
            <nav className="bg-surface py-5 fixed top-0 right-0 left-0 z-50 duration-500 transition-[padding, box-shadow]" ref={navbar}>
                <div className="my-container flex justify-between items-center">
                    <ul className="flex gap-8">
                        {/* <li><a href="#projects" className="font-medium text-heading hover:text-primary">Projects</a></li> */}
                        <li><a href="#experience" className="font-medium text-heading hover:text-primary">Experience</a></li>
                        <li><a href="#education" className="font-medium text-heading hover:text-primary">Education</a></li>
                        <li><a href="#skills" className="font-medium text-heading hover:text-primary">Skills</a></li>
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