function Tag({tag}) {
    return (
        <span className="rounded-2xl bg-white/10 px-3 py-1 text-white font-[Geist-Regular] text-sm">{tag}</span>
    );
}

function ListTags({tags}) {
    const listtags = tags.map((tag, index) =>
        <Tag key={index} tag={tag} />
    )

    return (
        <div className="flex flex-wrap gap-2">
            {listtags}
        </div>
    );
}

const Project = ({title, details, tags, link, featured}) => {
    return (
        <div className={`flex flex-col gap-4 bg-white/5 p-8 rounded-2xl w-full lg:w-[calc(50%-1rem)] shadow-[0_0_20px_rgba(255,255,255,0.08)] border-2 ${featured ? "border-white/25 hover:border-white/40" : "border-white/5 hover:border-white/15"} transition-all duration-300`}>
            <div className="flex gap-4 flex-row items-center">
                <h1 className="text-white text-2xl font-[Geist-Bold]">{title}</h1>
                {featured && 
                <p className="rounded-2xl pt-1 pb-1 pl-2 pr-2 bg-white/20 text-white text-sm font-[Geist-Regular]">Featured</p>}
            </div>
            <p className="text-white/50 text-lg font-[Geist-Regular]">{details}</p>
            <ListTags tags={tags} />
            <div className="flex flex-row gap-4 items-center">
                {featured &&
                <a href={link + '/releases'} target="blank" className="transition-all duration-300 hover:bg-[rgb(188,185,185)] text-black bg-white pt-1 pb-1 pl-2 pr-2 font-[Geist-Regular] rounded-xl text-base">Download</a>}
                <a href={link} target='blank' className="shadow-white/10 shadow-sm border-2 border-white/10 hover:border-white/30 transition-all duration-300 text-white pt-1 pb-1 pl-2 pr-2 text-base font-[Geist-Regular] rounded-xl flex items-center">
                    <svg className="mr-2" width="16" height="16" viewBox="0 0 96 98" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                    Code
                </a>
            </div>
            
        </div>
    );
}

function ListProjects({projects}) {
    const listprojects = projects.map(project =>
        <Project title={project.title} details={project.details} tags={project.tags} link={project.link} featured={project.featured} key={project.key} />
    )
    return (
        <div className="flex md:p-6 p-1 flex-col gap-8">
            <h1 className="text-center md:text-left text-5xl text-white font-[Geist-Bold] md:p-4 p-2">Projects</h1>
            <div className="flex flex-row flex-wrap gap-8">
                {listprojects}
            </div>
        </div>
    );
}

const listprojects = [
    {key: 1, title: 'iTuneUp', details: 'iTuneUp is a standalone Windows desktop application that lets you build a local .m4a music library styled after Apple Music, using content sourced from YouTube and metadata from Apple’s own public database. Unlike conventional downloaders, iTuneUp delivers an authentic, metadata-rich music collection — with cover art, track order, release dates, and more — just like purchased albums in iTunes.', tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'Apple Music', 'Metadata', 'Music library'], link: 'https://github.com/kalis26/iTuneUp', featured: true},
    {key: 2, title: 'Apple Music Metadata Retriever', details: 'Apple Music Metadata Retriever (AMMR) is a Python-based tool designed to extract rich metadata from Apple Music directly through the web. With a simple input — song title or album, & artist name — AMMR performs a search on the Apple Music website, retrieves the relevant result, and collects detailed metadata associated with it.', tags: ['Python', 'Apple Music', 'Metadata', 'Metadata Fetcher'], link: 'https://github.com/kalis26/Apple-Music-Metadata-Retriever', featured: true},
    {key: 3, title: 'Optimized Word Search Using BST Variants', details: 'Second trial work of the module "Algorithmics and dynamic data structures". This project explores the optimization of word search operations through customized Binary Search Tree (BST) structures. Implemented using the educational Z programming language with the Khawarizm II+ AFE (2023) - Copyright © Pr D.E ZEGOUR 2023 - IDE, and translated to C for performance and result enhancement, it also employs Python for data visualization and statistical analysis.', tags: ['C', 'Python', 'Binary Search Tree', 'Algorithmics', 'Data Structures'], link: 'https://github.com/kalis26/Optimized-Word-Search-Using-BST-Variants', featured: false},
    {key: 4, title: 'Adress Book Management System', details: 'First trial work of the module "Introduction to Operating Systems 2", this project consists in developing a fully functional address book management system using 8086 assembly language. The system allows users to manage a contact list of up to 16 entries. Each contact is composed of: A name (maximum 10 characters), A phone number (exactly 10 digits).', tags: ['Assembly', 'Adress Book', 'Management'], link: 'https://github.com/kalis26/Adress-Book-Management-System', featured: false},
    {key: 5, title: 'Occupational Health Medical Visit Management', details: 'This project is the first major assignment for the "Algorithmics and Dynamic Data Structures" module. It consists of a console-based C application designed to automate and manage medical consultations for employees in an industrial company. All functionalities are implemented using core C language, with a strong focus on dynamic data structures.', tags: ['C', 'Linked List', 'Priority Queue', 'Algorithmics', 'Data Structures'], link: 'https://github.com/kalis26/Occupational-Health-Medical-Visit-Management', featured: false}
];

export default function Projects() {
    return (
        <ListProjects projects={listprojects} />
    );
}