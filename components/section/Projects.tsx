import ProjectCard from "../ui/ProjectCard"

interface Work {
    title: string,
    description: string,
    source: string,
    demo: string

}

const works: Work[] = [
    {
        title: 'simple-pomodoro',
        description: 'Simple pomodoro timer that i make for exercise.',
        source: 'https://github.com/fY-Hr/simple-pomodoro-app',
        demo: 'https://simple-pomodoro-ecru.vercel.app/'
    },
    {
        title: 'flow-tracker',
        description: 'A simple app for managing your taks.',
        source: 'https://github.com/fY-Hr/flow-tracker',
        demo: ''
    }
]



export default function Projects(){
    return(
        <>
            {works.map((work, index) => (
                <ProjectCard key={index}
                    title={work.title}
                    description={work.description}
                    source={work.source}
                    demo={work.demo}
                />
            ))}
         
        </>
    )
}