import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2"


export default function Home() {

  const welcome: string[] = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '.'];

  return (
    <>
      <div className=" flex flex-col items-center justify-center h-screen ">

        <div className="flex h-20">

          {welcome.map((e: string, index: number) => (
            <h1 key={index} className="text-5xl md:text-6xl select-none animate-pulse hover:animate-none transition-all hover:-translate-y-6 ">{e}</h1>
          ))}

        </div>

          <div className="flex gap-3 -mt-4 md:mt-2">
            <Link href="/me" className=" rounded-md px-2 py-1 bg-slate-50 flex gap-2 hover:bg-slate-200 transition-all duration-300 text-sm md:text-md md:px-4 md:py-2">see more<HiArrowRight className="self-center" /></Link>
            <h1 className="select-none py-1  text-sm md:text-md md:py-2">to my page</h1>
          </div>
        
      </div>
    </>
  );
}
