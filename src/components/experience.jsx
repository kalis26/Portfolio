function isEven(key) {
    return key % 2 === 0
}

const ExperienceDetails = ({title, date, description, keyValue}) => {
    return (
        <div className={`p-6 w-full md:w-3/5 rounded-2xl border-2 border-white/50 hover:border-white/90 transition-all duration-300 bg-gradient-to-br from-[#0c0c0c] to-[#131313] ${isEven(keyValue) ? 'self-end' : 'self-start'}`}>
            <div className="flex flex-row items-center">
                <h2 className="text-white font-[Geist-Medium] md:text-2xl text-xl pb-4 inline-block">
                    {title}
                </h2>
                <p className="text-white/50 inline-block pb-4 ml-auto">{date}</p>
            </div>   
            <p className="font-[Geist-Regular] text-white/70 md:text-xl text-lg">
                {description}
            </p>
        </div>
    );
}

function ListExperience({exp}) {
    const listexp = exp.map(experience => 
        <ExperienceDetails 
            title={experience.title} 
            date={experience.date} 
            description={experience.description} 
            keyValue={experience.key}
            key={experience.key} 
        />
    );

    return (
        <div className="flex md:p-6 p-3 flex-col gap-8">
            <h1 className="text-center md:text-left text-5xl text-white font-[Geist-Bold] md:p-4 p-2">Experience & Education</h1>
            {listexp}
        </div>
    );
}

const exp = [
    {key: 1, title: 'Intern @ GIZ Algeria', date: 'Aug. 2025 - Sep. 2025', description: 'Discovery internship within the PEFEVA project (Promotion de l’Entrepreneuriat Féminin dans l’Économie Verte en Algérie), an international cooperation program led by GIZ.'},
    {key: 2, title: 'Computer Science Student @ ESI', date: 'Sep. 2024 - Present', description: '2nd year computer science student at École nationale Supérieure d\'Informatique. Preparing an engineering degree in CS.'},
    {key: 3, title: 'Baccalaureate', date: 'July 2024', description: 'Graduated from high-school with honors in the experimental science stream, with a grade of 18.51/20.'}
];

export default function Experience() {
    return (
        <ListExperience exp={exp} />
    );
}