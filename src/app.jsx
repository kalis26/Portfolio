import { useEffect, useState } from 'react';
import About from './components/about.jsx';
import Navbar from './components/navbar.jsx';
import Experience from './components/experience.jsx'
import Skills from './components/skills.jsx'
import Footer from './components/footer.jsx'

function SetMainSection() {
    return (
        <>
            <div className="p-5 md:p-10 flex flex-col gap-16 lg:gap-36">
                <div className='rounded-lg pt-6 pl-6 pr-6 md:rounded-2xl md:pt-16 md:pl-6 md:pr-6 bg-[linear-gradient(red,transparent),linear-gradient(to_top_left,lime,transparent),linear-gradient(to_top_right,blue,transparent)] bg-[length:auto] bg-blend-screen relative'>
                    <div className='flex flex-col items-center justify-center pb-28 md:hidden'>
                        <h1 className='text-white font-[Geist-Bold] text-6xl text-center'>Amine Rachid</h1>
                        <p className='text-white/70 font-[Geist-Light] text-2xl text-center'>Computer Science Student & Junior Dev</p>
                    </div>
                    <img src='/images/panel2.png' alt='Panel' className='hidden md:block mx-auto'></img>
                    <img src='/images/panelmobile.png' alt='PanelMobile' className='md:hidden'></img>
                    <div className="hidden absolute bottom-10 md:right-24 md:flex flex-row gap-3">
                        <div className='rounded-lg border border-white/20 hover:border-white transition-all duration-200'>
                            <button className="m-1 bg-white text-black px-6 py-3 rounded-md font-[Geist-Medium] text-sm transition-all duration-300 flex items-center justify-center">
                                View My Work
                            </button> 
                        </div>
                        <div className='rounded-lg border border-white/20 hover:border-white transition-all duration-200'>
                            <button className="m-1 bg-black text-white px-6 py-3 rounded-lg font-[Geist-Medium] text-sm flex items-center justify-center">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-56 md:hidden absolute bg-gradient-to-b from-white/0 to-black bottom-0 left-0 pointer-events-none z-20'>
                    
                    </div>
                    <div className='p-4 flex flex-col gap-3 md:hidden z-30 absolute bottom-8 left-0 right-0'>
                        <div className='flex w-full rounded-lg border border-white/20 hover:border-white transition-all duration-200'>
                            <button className="flex-1 m-1 bg-white text-black px-6 py-3 rounded-md font-[Geist-Medium] text-sm transition-all duration-300 flex items-center justify-center">
                                View My Work
                            </button> 
                        </div>
                        <div className='flex w-full rounded-lg border border-white/20 hover:border-white transition-all duration-200'>
                            <button className="flex-1 m-1 bg-black text-white px-6 py-3 rounded-md font-[Geist-Medium] text-sm transition-all duration-300 flex items-center justify-center">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
                <About />
                <Skills />
                <Experience />
                
            </div>
            <Footer />
        </>
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