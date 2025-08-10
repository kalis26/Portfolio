export default function Navbar({ scrollY }) {
    return (
        <nav className='fixed top-4 lg:top-6 z-50 w-full'>
            <div className="container mx-auto max-w-[1672px] px-12 md:px-14">
                <div className={`navbar flex items-center relative bg-black rounded-2xl p-4 font-[Geist-Medium] transition-all duration-500 ease-out ${scrollY > 50 ? 'border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.08)]' : 'border border-transparent'}`}>
                    <div className='flex-1'>
                        <a href='/' className='text-[#ebebed] font-[Bebas-Neue] text-3xl'>
                            <img src="/images/logo.png" alt="Logo" className="inline-block h-8 w-8 mr-2" />
                            AMR
                        </a>
                    </div>
                    <ul className="flex space-x-4 justify-center text-base absolute left-1/2 transform -translate-x-1/2">
                        <a href="/" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Home</a>
                        <a href="/" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">About</a>
                        <a href="/" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Experience</a>
                        <a href="/projects.html" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Projects</a>
                        <a href="/contact.html" className="text-[#ceced3] px-3 py-1 hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.15)] rounded-lg transition-all duration-300 text-center">Contact</a>
                    </ul>
                    <div className='flex-1 flex justify-end items-center space-x-4'>
                        <button className="text-black text-sm px-2 py-2 bg-white rounded-lg transition-all duration-300 hover:bg-[rgb(188,185,185)]">
                            <img src="/images/pdf.png" alt="Avatar" className="inline-block h-4 w-4 mr-1" />
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}