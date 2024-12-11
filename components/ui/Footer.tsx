'use client';

import { usePathname } from "next/navigation";

export default function Footer(){

    const pathname = usePathname();
    const homePage = pathname === '/';

    return(
        <>
        {!homePage &&

            <footer className="py-2 flex justify-between animate-fadeUpVeryLast">
                <p>© {new Date().getFullYear()} </p>
                <p>fY-Hr</p>
            </footer>
        
        }
        </>
    )
}