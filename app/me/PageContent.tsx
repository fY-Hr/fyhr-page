'use client'

import Image from "next/image"
import SectionCard from "@/components/ui/SectionCard"
import DeveloperTools from "@/components/section/DeveloperTools"
import ContactMe from "@/components/section/ContactMe"
import { usePathname } from "next/navigation"

import ageConverter from "@/lib/ageConverter"

export default function PageContent(){
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    return (
        <div key={pathname} className="animate-fadeDown">
            <main className="my-8">
                <div className="hero-container w-full overflow-hidden animate-fadeUp">
                    <Image src="/yoneyama.webp" priority={true} width={600} height={600} alt="yoneyama art" className="h-full w-full object-contain" />
                </div>
                <h1 className="mb-7 text-sm animate-fadeUp">yoneyama mai art. (my fav illustrator)</h1>

                <div className="about-container sm:flex-row flex flex-col gap-4 justify-between border-b-2 border-blue-900 pb-4 animate-fadeUpLong">
                    <div className="about-text">
                        <SectionCard 
                            title="Muhammad Fakhry Haidar."
                            subtitle="Web Developer."
                            description={`Hello there, welcome to my 'me' page. I'm a ${ageConverter('2007-05-28')} y.o guy from Jakarta, Indonesia. Self-taught developer, and also a Web-Developer enthusiast.
                                ${ 
                                    currentYear >= 2025 
                                        ? 'Graduated from a vocational school in 2025.'
                                        : 'Currently studying in a vocational school and will graduate in 2025.' 
                                }`}
                        />
                    </div>
                </div>

                <div className="developing-tools-container mt-4 border-b-2 border-blue-900 pb-5 animate-fadeUpVeryLong">
                    <SectionCard 
                        title="Developing Tools."
                        subtitle="Tools that i mainly use as a Web Developer."
                        description="I don't really master all of these, but i can use it. Beside of that, I'd love to learn more :)"
                    />
                    <div className="flex gap-2 mt-3 w-auto h-full overflow-x-auto animate-fadeUpLast">
                        <DeveloperTools />
                    </div>
                </div>

                <div className="contact-person-container mt-4 animate-fadeUpLast">
                    <SectionCard 
                        title="Contact Me."
                        subtitle="It is my pleasure to connect with more people."
                        description=""
                    />
                    <div className="flex animate-fadeUpVeryLast">
                        <ContactMe />
                    </div>
                </div>

            </main>
        </div>   
    )
}