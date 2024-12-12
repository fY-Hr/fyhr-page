import { DiGitBranch } from "react-icons/di"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Experiences',
  description: 'fY-Hr experiences page'
}

export default function Experiences(){
    return(
        <>
            <div className="my-8">
                <div className="border-b-2 pb-4 border-blue-900 animate-fadeUpLong">
                    <h1 className="text-xl font-bold-3 flex items-center gap-2 animate-fadeUpLong"><span className="font-bold">My Experiences</span> (and my Bio).<span className="text-2xl animate-fadeUpVeryLong"><DiGitBranch /></span></h1>
                    <h2 className="text-md text-blue-500 font-bold animate-fadeUpVeryLong">My Software-Engineering journey.</h2>
                </div>
                <div>
                    <div className="flex gap-4 mt-5 animate-fadeUpVeryLong">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white from-blue-900 to-white">2007</h1>
                        </div>                        
                        <div>
                            <p className="self-center text-gray-600">Born in Jakarta, Indonesia.</p>
                        </div>
                    </div>                
                    <div className="flex gap-4 mt-4 animate-fadeUpLast">
                        <div>
                            <h1 className="text-lg font-bold pl-2 pr-4 bg-gradient-to-r text-white from-blue-900 to-white">2022 - Present</h1>
                        </div>
                        <div>
                            <p className="self-center text-gray-600">Entering vocational highschool, majoring Software-Engineering. Currently Progressing for my graduation.</p>
                        </div>
                    </div>                
                </div>
            </div> 
        </>
    )
}