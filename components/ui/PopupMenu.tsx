'use client'

import Link from "next/link"
import { clsx } from "clsx"
import { usePathname } from "next/navigation"

export default function PopupMenu({handleClick, } : {handleClick: () => void }){

    const pathname = usePathname();

    return(
        <>
            <div className={`absolute right-6 top-14 z-50 w-32 bg-white border-blue-900 border  flex justify-center items-center animate-fadeDown`}>
                <ul className="py-2">
                    <li>
                        <Link onClick={handleClick} href="/works" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900': pathname === '/works',
                        })}>
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href="/experiences" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900': pathname === '/experiences',
                        })}>
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href="/me" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900': pathname === '/me',
                        })}>
                            Me
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}