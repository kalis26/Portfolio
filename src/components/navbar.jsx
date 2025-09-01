import { useState, useEffect } from "react";

export default function Navbar({ scrollY }) {

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showOverlay]);

    return (
        <>
            <nav className='fixed top-4 lg:top-6 z-50 w-full'>
                <div className="container mx-auto max-w-[1672px] px-2 md:px-14">
                    <div className={`navbar flex items-center relative bg-[#121212] rounded-2xl p-4 font-[Geist-Medium] transition-all duration-500 ease-out ${scrollY > 50 && !showOverlay ? 'border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]' : 'border border-transparent'}`}>
                        <div className='flex-1 items-center justify-center'>
                            <a href='/' className='text-[#ebebed] font-[Michroma] text-xl font-bold'>
                                <img src="/images/logo.webp" alt="Logo" className="inline-block h-8 w-8 mr-2" />
                                AMR
                            </a>
                        </div>
                        <ul className="hidden lg:flex space-x-4 justify-center text-base absolute left-1/2 transform -translate-x-1/2">
                            <a href="#root" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Home</a>
                            <a href="#about" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">About</a>
                            <a href="#skills" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Skills</a>
                            <a href="#projects" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Projects</a>
                            <a href="#experience" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Experience</a>
                            <a href="#contact" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Contact</a>
                        </ul>
                        <div className='hidden lg:flex flex-1 justify-end items-center space-x-4'>
                            <a href="downloadable/Rachid Mustapha Amine.pdf" download className="cursor-pointer text-black text-sm px-2 py-2 bg-[#EAEAEA] rounded-lg transition-all duration-300 hover:bg-[rgb(188,185,185)] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                                Download Resume
                            </a>
                        </div>
                        {!showOverlay && (
                            <div className="lg:hidden flex flex-1 justify-end items-center">
                                <button onClick={() => setShowOverlay(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </button>
                            </div>
                        )}     
                        {showOverlay && (
                            <div className="lg:hidden flex flex-1 justify-end items-center">
                                <button onClick={() => setShowOverlay(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {showOverlay && (
                <div className="bg-black h-screen fixed inset-0 z-40">
                    <div className="flex items-center justify-center h-full pt-16">
                        <div className="flex flex-col items-center space-y-8">
                            <a onClick={() => setShowOverlay(false)} href="#root" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">Home</a>
                            <a onClick={() => setShowOverlay(false)} href="#about" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">About</a>
                            <a onClick={() => setShowOverlay(false)} href="#skills" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">Skills</a>
                            <a onClick={() => setShowOverlay(false)} href="#projects" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">Projects</a>
                            <a onClick={() => setShowOverlay(false)} href="#experience" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">Experience</a>
                            <a onClick={() => setShowOverlay(false)} href="#contact" className="text-[#ceced3] px-6 py-3 hover:text-[#FFFFFF] transition-all duration-300 text-2xl text-center">Contact</a>
                            
                            <div className="mt-8">
                                <a href="downloadable/Rachid Mustapha Amine.pdf" download className="cursor-pointer text-black font-[Geist-Medium] text-xl px-6 py-3 bg-[#EAEAEA] rounded-lg transition-all duration-300 hover:bg-[rgb(188,185,185)] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}