const Todo = ({title, details, imgsrc}) => {
    return (
        <div className="bg-black shadow-[0_0_20px_rgba(255,255,255,0.08)] rounded-xl flex flex-col border-2 border-white/15 hover:border-white/50 transition-all duration-300 flex-1 min-w-[280px] max-w-sm">
            <div className="w-full relative">
                <img className="w-full rounded-t-xl z-20" src={imgsrc}></img>
                <div className="h-32 w-full absolute bg-gradient-to-b from-white/0 to-black z-40 bottom-0 left-0 pointer-events-none"></div>
            </div>       
            <div className="flex flex-col items-center justify-center flex-1 p-4">
                <h2 className="font-[Geist-Bold] text-white text-xl text-center mb-4">{title}</h2>
                <span className="block w-full font-[Geist-Regular] text-white/70 text-lg break-words text-center">{details}</span>
            </div>
        </div>
    );
}

function Alltodo({todo}) {
    const listtodo = todo.map(exp =>
        <Todo title={exp.title} details={exp.details} imgsrc={exp.imgsrc} key={exp.key} />
    );
    return (
        <div className="flex-grow-0 flex md:p-4 items-stretch justify-center flex-wrap gap-6 md:gap-12 min-w-0">
            {listtodo}
        </div>
    );
}

const whatido = [
    {key: 1, title: 'Frontend Development', details: 'Using frameworks like Next.js, powered by React and styled with Tailwind CSS, I design and build responsive, user-friendly web applications. My focus is on creating intuitive interfaces that combine strong UI/UX principles with visually appealing designs.', imgsrc: '/images/code.gif'},
    {key: 2, title: 'Exploring Backend Development', details: "I’m building a solid foundation in backend development by experimenting with server-side technologies, databases, and APIs. This journey is helping me understand how to design efficient, secure, and scalable systems that power real-world applications.", imgsrc: '/images/sql.gif'},
    {key: 3, title: 'Open Source Contributions', details: 'I often contribute to open source projects, from improving documentation to building other apps that are free to use and modify. This not only strengthens my technical skills but also allows me to collaborate with a global community of developers, share knowledge, and give back to the tech ecosystem that has fueled my learning.', imgsrc: '/images/github.gif'}
];

export default function About() {
    return (
        <div className="md:p-6 p-1">
            <h1 className="text-center md:text-left text-5xl font-[Geist-Bold] text-white p-4">
                About Me
            </h1>
            <p className="text-white/70 md:text-2xl text-lg inline-block font-[Geist-Regular] p-4">
                I am a student at École Nationale Supérieure d'Informatique (ESI) in Algiers. 
                Curious and passionate about technology, I'm always looking for opportunities to learn, innovate, and contribute to concrete projects.
            </p>
            <h2 className="md:text-2xl text-lg font-[Geist-Bold] text-white/90 pl-4 pb-4 inline">My goal ?</h2>
            <p className="text-white/70 inline-block md:text-2xl text-lg font-[Geist-Regular] pl-4 pb-4">
                Use my technical & analytical skills to create impactful and sustainable solutions.
            </p>
            <h1 className="text-center md:text-left text-5xl font-[Geist-Bold] text-white p-4 pb-8">
                What I Do
            </h1>
            <div className="flex-grow-0 flex p-4 items-stretch justify-center flex-wrap gap-6 md:gap-12 min-w-0">
                <Alltodo todo={whatido} />
            </div>
        </div>
    );
}