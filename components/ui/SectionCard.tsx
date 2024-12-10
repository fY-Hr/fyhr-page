export default function SectionCard({title, subtitle, description}: { title: string, subtitle: string, description: string}){
    return(
        <>
            <h2 className="text-xl"><span className="font-bold">{title}</span></h2>
            <h2 className="text-md text-blue-500"><span className="font-bold">{subtitle}</span></h2>
            <p className="mt-2 text-gray-600">{description}</p>
        </>    
    )                        
}