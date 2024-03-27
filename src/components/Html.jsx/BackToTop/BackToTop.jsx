import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>{scrollY > 20 && (
            <div onClick={scrollToTop} className="fixed bg-slate-800 bottom-5 right-5 p-3 rounded-circle border duration-200 z-50 text-slate-400 border-slate-400 hover:border-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16">
                    <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
                </svg>
            </div>
        )}
        </div>
    );
};

export default BackToTop;
