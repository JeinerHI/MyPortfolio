import sharp from 'sharp'
import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, extname } from 'node:path'

const ROOT = join(import.meta.dirname, '..', 'src', 'assets', 'projects')
const MAX_WIDTH = 1600

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (extname(entry.name).toLowerCase() === '.png') yield full
  }
}

for await (const file of walk(ROOT)) {
  const before = (await stat(file)).size
  const img = sharp(file)
  const meta = await img.metadata()

  const pipeline = meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img
  const buffer = await pipeline
    .png({ compressionLevel: 9, palette: true, quality: 85 })
    .toBuffer()

  if (buffer.length < before) {
    await writeFile(file, buffer)
    console.log(`${file.slice(ROOT.length + 1)}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(buffer.length / 1024 / 1024).toFixed(2)}MB`)
  } else {
    console.log(`${file.slice(ROOT.length + 1)}: skipped (already smaller)`)
  }
}
