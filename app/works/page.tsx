import SectionCard from "@/components/ui/SectionCard"
import Projects from "@/components/section/Projects"
import { IoTelescope } from "react-icons/io5"  

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Works',
  description: 'fY-Hr Personal Page'
}

export default function Works(){
    return(
        <>
        <div>
            <main className="my-8">
                <div className="animate-fadeUp border-b-2 border-blue-900 pb-4">
                    <IoTelescope /><h1 className="font-bold text-xl text-white bg-gradient-to-r from-blue-900 to-slate-100">Works.</h1>
                    <SectionCard 
                        title=""
                        subtitle="My slowly and lovely progress."
                        description="Some of these is not really optimized, but it's a part of my work, so i proudly share it."
                    />
                </div>
                <div className="mt-7 animate-fadeUpLong">
                    <Projects />
                </div>
            </main>
        </div>
        </>
    )
}