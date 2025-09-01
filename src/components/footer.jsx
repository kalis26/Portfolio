export default function Footer() {
    return (
        <div className="w-full bg-[#121212] flex flex-col p-6 font-[Geist-Regular] border-t-2 border-solid border-white/10">
            <div>
                <h1 className="text-xl font-[Geist-Bold] text-[#EAEAEA] pb-2">Contact</h1>
                <p className="text-base text-white/50">E-mail: aminera2006@gmail.com</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                <p className="text-base text-white/50">Telephone: +213 798 19 92 08</p>
                <p className="text-base text-white/50">&copy; 2025 Made by Amine Mustapha Rachid</p>
            </div>
        </div>
    );
}