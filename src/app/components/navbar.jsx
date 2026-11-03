'use client'
import { useLocale, useTranslations } from "next-intl";
import { Translate } from "../functions/translate";
import { useEffect, useState } from "react";
import SideBar from "./sidebar";

export default function NavBar() {
    const buttonText = useLocale() == 'en' ? 'ar' : 'en'
    const [isVisible, setIsVisibile] = useState(true)
    const [isPastScreenHeight, setIsPastScreenHeight] = useState(false)
    const [open, setOpen] = useState(false)
    const [animate, setReadyToAnimate] = useState(false)
    const t = useTranslations("NavBar")

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            const screenHeight = window.innerHeight

            setIsPastScreenHeight(currentScrollY >= screenHeight)

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisibile(false)
            } else {
                setIsVisibile(true)
            }

            lastScrollY = currentScrollY
        }

        document.addEventListener('scroll', handleScroll, { passive: true })

        return (() => {
            document.removeEventListener('scroll', handleScroll)
        })
    }, [])

    useEffect(() => {
        if (!animate) return
        const timer = setTimeout(() => {
            setReadyToAnimate(false);
        }, 2000);
        return() => clearTimeout(timer)
    }, [animate])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    return (
        <>
            <nav className={`fixed top-0 z-30 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isPastScreenHeight ? 'bg-black opacity-80' : ''} transition-all duration-700 flex w-full justify-between items-center p-5`}>
                <a className="text-2xl font-bold bg-linear-to-b from-[#CE1126] via-[#FFFFFF] to-[#000000] bg-clip-text text-transparent" href="/">{t('title')}</a>
                <div className="flex items-center gap-5">
                    <button className={`uppercase text-lg ${isPastScreenHeight ? 'text-white border-white' : 'text-black border-black'} transition-all px-2 cursor-pointer rounded border-2`} onClick={Translate}>
                        {buttonText}
                    </button>
                    <button className="cursor-pointer" onClick={() => {
                        setOpen(!open)
                        setReadyToAnimate(!animate)}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                            fill="none"
                            stroke={isPastScreenHeight ? 'white' : 'black'}
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="transition-all duration-700"
                        >
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>
            </nav>
            <SideBar isopen={open} setopening={setOpen} color={'#611b00'} animate={animate} setReadyToAnimate={setReadyToAnimate} />
        </>
    )
}