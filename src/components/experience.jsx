export default function Experience() {
    return (
        <div className="flex p-6 flex-col gap-8">
            <h1 className="text-5xl text-white font-[Geist-Bold] p-4">Experience & Education</h1>
            <div className="p-6 w-4/5 md:w-3/5 rounded-2xl border-2 border-white/50 hover:border-white/90 transition-all duration-300 bg-gradient-to-br from-[#0c0c0c] to-[#131313]">
                <h2 className="text-white font-[Geist-Medium] text-2xl pb-4">
                    Intern @ GIZ Algeria
                </h2>
                <p className="font-[Geist-Regular] text-white/70 text-xl">
                    Discovery internship within the PEFEVA project 
                    (Promotion de l’Entrepreneuriat Féminin dans l’Économie Verte en Algérie),
                    an international cooperation program led by GIZ.
                </p>
            </div>

            <div className="p-6 w-4/5 md:w-3/5 rounded-2xl border-2 border-white/50 hover:border-white/90 transition-all duration-300 self-end bg-gradient-to-br from-[#0c0c0c] to-[#131313]">
                <h2 className="text-white font-[Geist-Medium] text-2xl pb-4">
                    Computer Science Student @ ESI
                </h2>
                <p className="font-[Geist-Regular] text-white/70 text-xl">
                    2nd year computer science student at École nationale Supérieure d'Informatique.
                    Preparing an engineering degree in CS.
                </p>
            </div>

            <div className="p-6 w-4/5 md:w-3/5 rounded-2xl border-2 border-white/50 hover:border-white/90 transition-all duration-300 bg-gradient-to-br from-[#0c0c0c] to-[#131313]">
                <h2 className="text-white font-[Geist-Medium] text-2xl pb-4">
                    Baccalaureate
                </h2>
                <p className="font-[Geist-Regular] text-white/70 text-xl">
                    Graduated from high-school with honors in the experimental science stream, with a 
                    grade of 18.51/20.
                </p>
            </div>
        </div>
    );
}