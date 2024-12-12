'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import PopupMenu from "./PopupMenu";

export default function Navbar() {
    const pathname = usePathname();
    const homePage = pathname === '/';
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const togglePopup = (): void => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setIsPopupOpen(false);
            }
        };

        const handleScroll = () => {
            setIsPopupOpen(false);
        };

        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {!homePage && (
                <>
                    <nav className="pt-4 pb-2 fixed bg-white/55 w-screen backdrop-blur-md">
                        <div className="nav-content container mx-auto lg:px-32 xl:px-64 px-7 flex justify-between">
                            <Link href="/me" className="text-lg md:text-2xl font-semibold hover:text-blue-500">
                                fY-Hr
                            </Link>
                            <div className="hidden sm:flex gap-5 items-center">
                                <Link
                                    href="/works"
                                    className={clsx('text-xl px-2 hover:bg-blue-900 hover:text-white border', {
                                        'bg-blue-900 text-white': pathname === '/works'
                                    })}
                                >
                                    Works
                                </Link>
                                <Link
                                    href="/experiences"
                                    className={clsx('text-xl px-2 hover:bg-blue-900 hover:text-white border', {
                                        'bg-blue-900 text-white': pathname === '/experiences'
                                    })}
                                >
                                    Experiences
                                </Link>
                            </div>
                            <div className="burger self-center sm:hidden mb-2" ref={popupRef}>
                                <div
                                    className="self-center text-xl cursor-pointer border border-blue-900 p-2 -m-4 pb-2 active:text-white active:bg-blue-900"
                                    onClick={togglePopup}
                                >
                                    <RxHamburgerMenu />
                                </div>
                                <PopupMenu
                                    handleClick={() => setIsPopupOpen(false)}
                                    style={`absolute top-14 z-50 w-32 bg-white/55 backdrop-blur-md border-blue-900 border flex justify-center items-center transition-all duration-700 ${
                                        isPopupOpen ? 'right-6' : 'opacity-0 delay-0 -right-96'
                                    }`}
                                />
                            </div>
                        </div>
                    </nav>
                    <div className="replacer pt-14"></div>
                </>
            )}
        </>
    );
}
