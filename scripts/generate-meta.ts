import fsp from "node:fs/promises"
import Path from "node:path"
import books from "./books.json" with { type: "json" }

export type ChapterMeta = number
export type BookMeta = [string[], ChapterMeta[]]

const bookMeta: Record<string, BookMeta | undefined> = {}

for (let path of await fsp.readdir("docs", { recursive: true })) {
    path = Path.join("docs", path)
    if (!path.endsWith(".md")) continue
    const contents = (await fsp.readFile(path)).toString()
    const bookId = Path.basename(Path.dirname(path))
    const chapter = Number(Path.basename(path).split(".")[0])
    const verseCount = contents.matchAll(/\[[0-9]+\]/g).toArray().length
    const lastVerse = Number((/\[([0-9]+)\](?!.*\[[0-9]+\])/gs.exec(contents) ?? [0, 0])[1])
    if (lastVerse !== verseCount) {
        console.error(bookId, chapter, "Verse count doesn't match last verse number!", verseCount, lastVerse)
        continue
    }
    bookMeta[bookId] ??= [books[bookId as keyof typeof books].names, []]
    bookMeta[bookId][1][chapter - 1] = verseCount
}

const bookMetaList = Object.values(bookMeta)
const sortedBookKeys = Object.keys(books)
bookMetaList.sort((a, b) => sortedBookKeys.indexOf(a![0][0].toLowerCase()) - sortedBookKeys.indexOf(b![0][0].toLowerCase()))
fsp.writeFile("docs/meta.json", JSON.stringify(bookMetaList))
