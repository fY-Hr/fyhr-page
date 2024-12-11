'use client';

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { MdDevices, MdComputer, MdPhone } from "react-icons/md";

export default function ProjectCard({
    title,
    description,
    source,
    demo,
    media
}:{
    title: string,
    description: string,
    source: string,
    demo: string,
    media: string

}){
    return(
        <>
            <div className="border-2 border-transparent hover:border-blue-900 w-full shadow-lg px-4 py-3 mt-5 animate-fadeUpLast">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="font-semibold text-xl underline animate-fadeUpLong">{title}</h1>
                        <p className="text-gray-700 animate-fadeUpVeryLong">{description}</p>
                    </div>

                    <div>
                        {media === 'all' &&
                            <MdDevices />
                        }
                        {media === 'mobile' &&
                            <MdPhone />
                        }
                        {media === 'desktop' &&
                            <MdComputer />
                        }
                        
                    </div>
                </div>

                <div className="mt-6 flex gap-2">
                    <div>
                        <Link href={source} target="blank" className="
                        animate-fadeUpLast text-lime-800 hover:text-lime-300 underline hover:bg-blue-900 px-2 items-center gap-1 py-1 w-full flex border border-lime-800 hover:border-lime-300"
                        ><FaGithub />GitHub</Link>
                    </div>
                    <div>
                        {demo !== '' && (
                            <Link href={demo} target="blank" className="
                            animate-fadeUpLast text-lime-800 hover:text-lime-300 underline hover:bg-blue-900 px-2 items-center gap-1 py-1 w-full flex border border-lime-800 hover:border-lime-300"
                            >Demo<GoLinkExternal /></Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}