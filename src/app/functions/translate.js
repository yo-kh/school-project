"use server"

import { cookies } from "next/headers"

export async function Translate(){
    const store = await cookies()
    const currentLocale = store.get("locale")?.value || "en"
    const locale = currentLocale == 'en' ? 'ar' : 'en'

    store.set("locale", locale)
}