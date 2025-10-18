// Optional: install puppeteer before running this locally: `npm i -D puppeteer`
// Export the running Vite site at http://localhost:5173 to a pixel-accurate PDF
// Usage:
//   1) npm install
//   2) npm run dev   (keep it running)
//   3) npm run export
import puppeteer from 'puppeteer'

const URL = process.env.PREVIEW_URL || 'http://localhost:5173'
const OUT = process.env.OUT || 'Silverfy_Preview_EXACT.pdf'

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox','--disable-setuid-sandbox']
})
const page = await browser.newPage()
await page.goto(URL, { waitUntil: 'networkidle2' })

// Wait a moment for animations/shadows
await page.waitForTimeout(900)

// Auto-expand height and print full page
await page.emulateMediaType('screen')
await page.pdf({
  path: OUT,
  printBackground: true,
  width: '1280px',            // consistent desktop width for layout
  height: '2400px',           // tall page; adjust as needed
  margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
  pageRanges: '1'
})
await browser.close()
console.log('Saved', OUT)
