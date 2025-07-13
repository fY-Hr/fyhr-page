"use client"

import SectionCard from "@/components/ui/SectionCard"
import Projects from "@/components/section/Projects"
import { IoTelescope } from "react-icons/io5"  
import { usePathname } from "next/navigation"

export default function PageContent(){
    const pathname = usePathname()

    return(
        <div key={pathname} className="animate-fadeDown">
            <main className="my-8">
                <div className="animate-fadeUp border-b-2 border-blue-900 pb-4">
                    <h1 className="text-2xl"><IoTelescope /></h1><h1 className="font-semibold text-3xl text-white bg-gradient-to-r from-blue-900 to-transparent">Works.</h1>
                    <SectionCard 
                        title=""
                        subtitle="My slowly and lovely progress."
                        description="Some of these is not really optimized, but it's a part of my work, so i proudly share it."
                    />
                    <p> (The Icon on the top right of the card indicate the responsiveability). </p>
                </div>
                <div className="mt-7 animate-fadeUpLong">
                    <Projects />
                </div>
            </main>
        </div>
    )
}