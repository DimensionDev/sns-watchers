const path = require('path')
const cheerio = require('cheerio')
const { download: originalDownload } = require('./utils')

const basedir = path.resolve(__dirname, '../twitter.com')
const url = 'https://twitter.com/'

/**
 * wipe dynamic data.
 * all mess processing
 *
 * @param {string} code
 * @returns {string}
 */
function wipeDynamic(code) {
  const HOLDER = 'WIPED'
  // NOTE "sha" doesn't look like runtime dynamic
  return code
    .replace(/nonce=".*?"/g, `nonce="${HOLDER}"`)
    .replace(/(decodeURIComponent\(.gt)=\d+(;.*?);/, `$1=42;`)
    .replace(/("serverDate":\s?)\d+/g, `$1 42`)
    .replace(/("guestId":\s?)('|")\d+\2/g, `$1'${HOLDER}'`)
    .replace(/(\/\/# sourceMappingURL=).*?\.map/, `$1${HOLDER}`) // We don't care about source map
    .replace(/("country"):"\w\w"/, `$1:"${HOLDER}"`)
    .replace(/("settingsVersion"):('|")(.*?)\2/, `$1:'${HOLDER}'`)
    .replace(/("featureSetToken"):('|")(.*?)\2/, `$1:'${HOLDER}'`)
    .replace(/("impression_pointers"):{.*?}/, '$1:{}')
    .replace(/("impressions"):{"\w+":.*?}}/, '$1:{}')
    .replace(/("responsive_web_\w+"):{.*?}/g, `$1:{value:'${HOLDER}'}`)
}
/**
 * wrap a wipeDynamic() as a preprocesser inside
 * @type import('./utils').download
 */
const download = (url, saveAs) => {
  return originalDownload(url, saveAs, wipeDynamic)
}

/** @param {string} dir */
const dest = (dir) => path.resolve(basedir, dir)

/**
 * getAllScriptUrls.
 *
 * @param {string} html
 * @returns {Array<string>}
 */
function getAllScriptUrls(html) {
  const $ = cheerio.load(html)
  const scripts = $('link[as=script]')
  const urls = []
  scripts.each((_, script) => {
    urls.push($(script).attr('href'))
  })
  return urls
}

async function start() {
  const html = await download(url, dest('page.html'))
  const scriptUrls = getAllScriptUrls(html)
  const tasks = scriptUrls.map(async (url) => {
    const fileName = url
      .split('/')
      .pop()
      .replace(/(\w+)\.\w+\.js/, '$1')
    await download(url, dest(`scripts/${fileName}.js`))
  })
  await Promise.allSettled(tasks)
}

start()
