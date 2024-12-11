'use client'

import { usePathname } from "next/navigation"
import Link from "next/link";
import {clsx} from 'clsx';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import PopupMenu from "./PopupMenu";



export default function Navbar(){

    const pathname = usePathname();
    const homePage = pathname === '/';
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClick = () => {
        setIsPopupOpen(!isPopupOpen)
    };

    return(
        <>
        {!homePage && 
        <>
        <nav className="pt-4 pb-2 fixed bg-white/55 w-screen backdrop-blur-lg">
            <div className="nav-content container mx-auto lg:px-32 xl:px-64 px-7  flex justify-between">
                <Link href="/me" className="text-lg md:text-2xl font-semibold hover:text-blue-500">fY-Hr</Link>
                <div className="hidden sm:flex gap-5 items-center">
                    <Link href="/works" className={clsx('text-xl px-2 hover:bg-blue-900 hover:text-white border', {
                        'bg-blue-900 text-white': pathname === '/works'
                    })}>Works</Link>
                    <Link href="/experiences" className={clsx('text-xl px-2 hover:bg-blue-900 hover:text-white border', {
                        'bg-blue-900 text-white': pathname === '/experiences'
                    })}>Experiences</Link>
                </div>
                <div className="burger self-center sm:hidden">
                    <button className="self-center text-xl border border-blue-900 p-2 -m-5 hover:text-white hover:bg-blue-900" onClick={handleClick}><RxHamburgerMenu /></button>
                    {isPopupOpen && 
                        <PopupMenu handleClick={handleClick} />
                    }
                    
                    
                </div>
            </div>
        </nav>
        <div className="replacer pt-14 "></div>
        </>
        }
        </>
    )
}