function isEven(key) {
    return key % 2 === 0
}

const ExperienceDetails = ({imgsrc, title, date, place, description, keyValue}) => {
    return (
        <div className={`shadow-lg shadow-white/5 group p-6 w-full md:w-3/5 rounded-2xl border-2 border-white/15 hover:border-white/50 transition-all duration-300 bg-gradient-to-br from-[#0c0c0c] to-[#131313] ${isEven(keyValue) ? 'self-end' : 'self-start'}`}>
            <div className="flex flex-row items-center">
                {imgsrc &&
                <img src={imgsrc} className="mr-2 w-10 h-8 border-r-2 pr-2 border-white/10 invert-1"></img>}
                
                <h2 className="text-[#EAEAEA] font-[Geist-Medium] md:text-2xl text-xl pb-1 inline-block">
                    {title}
                </h2>
                <p className="text-white/50 inline-block pb-1 ml-auto">{date}</p>
            </div>
            <p className="text-white/50 pb-4">{place}</p>   
            <p className="font-[Geist-Regular] text-white/70 md:text-xl text-lg">
                {description}
            </p>
        </div>
    );
}

function ListExperience({exp}) {
    const listexp = exp.map(experience => 
        <ExperienceDetails 
            imgsrc={experience.imgsrc}
            title={experience.title} 
            date={experience.date} 
            place={experience.place}
            description={experience.description} 
            keyValue={experience.key}
            key={experience.key} 
        />
    );

    return (
        <div className="flex md:p-6 p-1 flex-col gap-8">
            <h1 className="text-center md:text-left text-5xl text-[#EAEAEA] font-[Geist-Bold] md:p-4 p-2">Experience & Education</h1>
            {listexp}
        </div>
    );
}

const exp = [
    {key: 1, imgsrc: '/images/esilogo.webp', title: 'Computer Science Student @ ESI', date: 'Sep. 2024 - Present', place: 'Oued Smar, 16309 Alger', description: '2nd year computer science student at École nationale Supérieure d\'Informatique. Preparing an engineering degree in CS.'},
    {key: 2, imgsrc: '/images/gizlogo.webp', title: 'Intern @ GIZ Algeria', date: 'Aug. 2025 - Sep. 2025', place: '34, rue Mohamed Khoudi, El Biar, 16606 Alger', description: 'Discovery internship within the PEFEVA project (Promotion de l’Entrepreneuriat Féminin dans l’Économie Verte en Algérie), an international cooperation program led by GIZ.'},
    {key: 3, imgsrc: '', title: 'Baccalaureate', date: 'July 2024', place: 'Lycée Taher Serir - Annexe Ahmed Hamissi, Ouled Chebel, 16118 Alger', description: 'Graduated from high-school with honors in the experimental science stream, with a grade of 18.51/20.'}
];

export default function Experience() {
    return (
        <ListExperience exp={exp} />
    );
}