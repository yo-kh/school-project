import { useTranslations } from "next-intl"
import Link from "next/link"
export default function Page(){
    const t = useTranslations('landing')
    return(
        <div className="h-dvh w-screen">
            <div className="flex relative flex-col h-full items-center bg-linear-to-b from-[#C8102E] via-[#FFFFFF] to-[#000000] text-center gap-2">
                <img src="october war victory.jpg" className="absolute inset-0 z-10 w-full h-full object-cover object-bottom opacity-50" />
                <div className="h-3/7 flex flex-col gap-5 justify-end items-center z-20">
                <h1 className="text-3xl md:text-5xl text-[#F1F5F2] font-bold [-webkit-text-stroke:1px_black] z-20">{t('title')}</h1>
                <div className="flex flex-col items-center">
                <p className="text-2xl font-bold z-20 m-5">{t('explore')}</p>
                <Link href='/Home' className="bg-[#355834]/75 w-fit hover:bg-[#355834] text-lg transition-all duration-300 focus:bg-[#6E633D] p-2 font-bold rounded-xl z-20">{t('header')}</Link>
                </div>
                </div>
            </div>
        </div>
    )
}