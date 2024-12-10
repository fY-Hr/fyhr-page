import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2"


export default function Home() {

  const welcome: string[] = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '.'];

  return (
    <>
      <div 
        className=" flex  flex-col items-center justify-center h-screen w-screen "
      >

        <div className="flex justify-center h-20">

          {welcome.map((e: string, index: number) => (
            <h1 key={index} className="text-5xl md:text-6xl select-none animate-pulse hover:animate-none transition-all hover:-translate-y-6 text-blue-900">{e}</h1>
          ))}

        </div>

          <div className="flex gap-2 -mt-4 md:mt-2">
            <Link href="/portofolios" className="text-blue-900 rounded-md px-2 py-1 bg-slate-50 flex gap-2 hover:bg-slate-200 transition-all duration-300 text-sm md:text-md md:px-4 md:py-2">see more<HiArrowRight className="self-center" /></Link>
            <h1 className="select-none py-1 text-blue-900 text-sm md:text-md md:py-2">to my page</h1>
          </div>
        
      </div>
    </>
  );
}
