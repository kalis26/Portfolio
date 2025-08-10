import { useEffect, useState } from 'react';
import About from './components/about.jsx';
import Navbar from './components/navbar.jsx';
import Experience from './components/experience.jsx'
import Skills from './components/skills.jsx'

function SetMainSection() {
    return (
        <div className="p-10 flex flex-col gap-52">
            <img src="/images/panel.png" alt="Logo" className="mx-auto rounded-2xl" />
            <About />
            <Skills />
            <Experience />
        </div>
    );
}

export default function SetApp() {
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

    return (
        <div className="min-h-screen bg-black">
            <Navbar scrollY={scrollY} />
            <div className="pt-24">
                <SetMainSection />
            </div>
        </div>
    );
}