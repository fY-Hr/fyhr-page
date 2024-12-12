'use client'

import Link from "next/link"
import { clsx } from "clsx"
import { usePathname } from "next/navigation"

export default function PopupMenu({handleClick, style} : {handleClick: () => void, style: string }){

    const pathname = usePathname();

    return(
        <>
            <div className={style}>
                <ul className="py-2">
                    <li>
                        <Link onClick={handleClick} href="/works" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900 underline': pathname === '/works',
                        })}>
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href="/experiences" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900 underline': pathname === '/experiences',
                        })}>
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href="/me" className={clsx('block px-4 py-2 hover:bg-blue-900 hover:text-white', {
                            'text-white bg-blue-900 underline': pathname === '/me',
                        })}>
                            Me
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}