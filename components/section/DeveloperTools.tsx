export default function DeveloperTools(){
    const tools = ['NextJS', 'Tailwind', 'NodeJS', 'Laravel', 'Figma', 'VSC']
    return(
        <>
            {tools.map((tool: string, index: number) => (
                <h1 key={index} className="border border-blue-900 py-2 px-2 text-sm items-center">{tool}</h1>
            ))}
        </>
    )

}