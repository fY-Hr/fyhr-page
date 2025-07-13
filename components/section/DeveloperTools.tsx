export default function DeveloperTools(){
    const tools = ['ReactJS', 'Laravel', 'NextJS', 'Tailwind CSS', 'InertiaJS', 'Shadcn']
    return(
        <>
            <div className="flex gap-2 w-max">
                {tools.map((tool: string, index: number) => (
                    <h1 key={index} className="border border-blue-900 py-2 px-2 text-sm items-center whitespace-nowrap">{tool}</h1>
                ))}
            </div>            
        </>
    )

}