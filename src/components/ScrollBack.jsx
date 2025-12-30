import { useEffect, useRef } from 'react';
import BackTop from '../assets/icons/back-to-top.svg?react';

function ScrollBack() {

    const backTop = useRef(null);

    useEffect(() => {
        if (!backTop.current) return;

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        const handleScroll = () => {
            if (window.pageYOffset > 240) {
                // backTop.current.classList.remove('hidden');
                backTop.current.classList.remove('translate-y-40');
                backTop.current.classList.add('translate-y-0');
            } else {
                // backTop.current.classList.add('hidden');
                backTop.current.classList.add('translate-y-40');
                backTop.current.classList.remove('translate-y-0');
            }
        }

        backTop.current.addEventListener('click', handleClick)
        window.addEventListener('scroll', handleScroll);

        return () => {
            backTop.current?.removeEventListener('click', handleClick)
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, [])

    return(
        <div className="max-w-6xl w-full mx-auto px-4 fixed bottom-20 right-0 left-0 flex justify-end pointer-events-none">
            <BackTop className="pointer-events-auto text-primary w-10 cursor-pointer shadow-card rounded-full translate-y-0 transition-transform duration-500 z-50 fill-white-bg hover:fill-primary hover:stroke-white"
            ref={backTop} />
        </div>
    )
}

export default ScrollBack;