export async function SearchWiki(input, locale, error){
    const topic = input.trim()

    if (!topic) {
        error[1](true)
        return
    }

    window.location.href = `https://${locale}.wikipedia.org/wiki/${encodeURIComponent(
        topic.replaceAll(" ", "_")
    )}`
}