import React, {useEffect, useState} from 'react';

import lightModeIcon from '../assets/icons/light.svg'
import darkModeIcon from '../assets/icons/dark.svg'

function Footer() {    

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const theme = localStorage.getItem('theme');
        if (theme !== null) {
            return theme === 'dark';
        }
        
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    function handleThemeChange() {
        setIsDarkMode(prev => !prev);
    }
    
    

    return (
        <footer className="bg-surface ">
            <div className="my-container py-5 flex justify-between items-center">
                <p className="font-medium">&copy; {new Date().getFullYear()} | Bunyod Aminov</p>
                <input type="checkbox" id="check" checked={isDarkMode} onChange={handleThemeChange} className='peer hidden' />
                <label htmlFor="check" className="w-16 h-5 bg-bg rounded-full shadow-inner cursor-pointer flex justify-around items-center relative duration-300 
                before:absolute before:content-[''] before:bg-primary before:w-8 before:h-4.5 before:rounded-full before:top-0 before:left-0 before:m-px before:z-10 before:duration-300 
                peer-checked:before:translate-x-7.5">
                    <img src={lightModeIcon} alt="light" className='w-3 z-20' />
                    <img src={darkModeIcon} alt="dark" className='w-3 z-20' />
                </label>
            </div>
        </footer>
    );
}

export default Footer