import { useEffect, useState } from 'react';

function SetNav({ scrollY }) {
    return (
        <nav className='fixed top-4 lg:top-6 z-50 w-full'>
            <div className="container mx-auto max-w-[1672px] px-12 md:px-14">
                <div className={`navbar bg-black rounded-2xl p-4 font-[Geist-Medium] transition-all duration-500 ease-out ${scrollY > 50 ? 'border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.08)]' : 'border border-transparent'}`}>
                    <ul className="flex space-x-10 justify-center text-base">
                        <a href="/" className="text-[#E0E0E6] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 basis-24 text-center">Home</a>
                        <a href="/projects.html" className="text-[#E0E0E6] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 basis-24 text-center">Projects</a>
                        <a href="/contact.html" className="text-[#E0E0E6] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 basis-24 text-center">Contact</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function SetMainSection() {
    return (
        <div className="p-10">
            <img src="/panel.png" alt="Logo" className="mx-auto rounded-2xl" />
            
            <div className="mt-20 space-y-8">
                <div className="h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <p className="text-white/70">Scroll down to see the navbar border effect</p>
                </div>
                <div className="h-96 bg-gray-800/30 rounded-lg flex items-center justify-center">
                    <p className="text-white/70">Keep scrolling...</p>
                </div>
                <div className="h-96 bg-gray-800/20 rounded-lg flex items-center justify-center">
                    <p className="text-white/70">More content here</p>
                </div>
            </div>
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
            <SetNav scrollY={scrollY} />
            <div className="pt-24">
                <SetMainSection />
            </div>
        </div>
    );
}