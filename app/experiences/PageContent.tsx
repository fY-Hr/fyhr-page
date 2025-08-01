"use client"

import { DiGitBranch } from "react-icons/di"
import { usePathname } from "next/navigation"

export default function PageContent(){
    const pathname = usePathname()

    return(
        <div key={pathname} className="my-8 animate-fadeDown">
                <div className="border-b-2 pb-4 border-blue-900 animate-fadeUpLong">
                    <h1 className="text-xl font-bold-3 flex items-center gap-2 animate-fadeUpLong"><span className="font-bold">My Experiences</span> (and my Bio).<span className="text-2xl animate-fadeUpVeryLong"><DiGitBranch /></span></h1>
                    <h2 className="text-md text-blue-500 font-bold animate-fadeUpVeryLong">My Software-Engineering journey.</h2>
                </div>
                <>
                    <div className="flex gap-4 mt-5 animate-fadeUpVeryLong">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white bg-blue-900 ">2007</h1>
                        </div>                        
                        <div>
                            <p className="self-center text-gray-600">Born in Jakarta, Indonesia.</p>
                        </div>
                    </div>                
                    <div className="flex gap-4 mt-4 animate-fadeUpLast">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white bg-blue-900 ">2022</h1>
                        </div>
                        <div>
                            <p className="self-center text-gray-600">Entering vocational high school, majoring Software-Engineering.</p>
                        </div>
                    </div>                
                    <div className="flex gap-4 mt-4 animate-fadeUpLast">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white bg-blue-900 whitespace-nowrap">2023 - 2024</h1>
                        </div>
                        <div>
                            <p className="self-center text-gray-600"><span className="font-bold">Junior Programmer</span>&nbsp;| Internship at <span className="underline">PT. Biggy Cemerlang</span>.</p>
                        </div>
                    </div>                
                    <div className="flex gap-4 mt-4 animate-fadeUpLast">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white bg-blue-900 ">2025</h1>
                        </div>
                        <div>
                            <p className="self-center text-gray-600">Graduated from vocational high school, majoring Software-Engineering.</p>
                        </div>
                    </div>                
                    <div className="flex gap-4 mt-4 animate-fadeUpVeryLast">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white bg-blue-900 ">Present</h1>
                        </div>
                        <div>
                            <p className="self-center text-gray-600"><span className="font-bold">IT Support</span>&nbsp;| at vocational high school.</p>
                        </div>
                    </div>          
                </>
            </div> 
    )
}