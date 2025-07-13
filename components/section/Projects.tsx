import ProjectCard from "../ui/ProjectCard"

interface Work {
    title: string,
    description: string,
    source: string,
    demo: string,
    media: string

}

const works: Work[] = [
    {
        title: 'simple-pomodoro',
        description: 'Simple pomodoro timer that i make for exercise.',
        source: 'https://github.com/fY-Hr/simple-pomodoro-app',
        demo: 'https://simple-pomodoro-ecru.vercel.app/',
        media: 'desktop'
    },
    {
        title: 'flow-tracker',
        description: 'A simple app for managing your taks.',
        source: 'https://github.com/fY-Hr/flow-tracker',
        demo: '',
        media: 'desktop'
    },
    {
        title: 'seragam-app-v2',
        description: 'A new version of seragam-app that is developed by my school team and me.',
        source: 'https://github.com/abhipraya-kusuma-dev/seragam-app-v2',
        demo: '',
        media: 'desktop'
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
                    media={work.media}
                />
            ))}
         
        </>
    )
}