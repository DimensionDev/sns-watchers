const fs = require('fs').promises
const fetch = require('node-fetch').default
const prettier = require('prettier')

/**
 * fetch file of url
 *
 * @param {string} url
 * @returns Promise<string>
 */
async function fetchFile(url) {
  return fetch(url, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en',
      'cache-control': 'max-age=0',
      'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'guest_id_marketing=v1%3A168360288791376669; guest_id_ads=v1%3A168360288791376669; personalization_id="v1_DE/XcgnKUTr5KH59AAUCOg=="; guest_id=v1%3A168360289097392384; ct0=0d23fd6d647e0290345b25e206c7a5ba; _ga=GA1.2.118251776.1683602892; _gid=GA1.2.1608677838.1683602892',
    },
  }).then((res) => res.text())
}

/**
 * download file, and save it
 *
 * @param {string} url
 * @param {string | null} saveAs
 * @param {(code: string) => string} [preprocesser]
 * @returns Promise<string>
 */
async function download(url, saveAs, preprocesser = (code) => code) {
  try {
    let content = await fetchFile(url)
    content = preprocesser(content)
    if (saveAs) {
      try {
        content = await format(content, saveAs)
        await fs.writeFile(saveAs, content)
      } catch (e) {
        console.log('Fails to format', url)
        throw e
      }
    }
    return content
  } catch (err) {
    throw err
  }
}
/**
 * format code with prettier
 * @param {string} code
 * @param {string} filepath
 */
async function format(code, filepath) {
  try {
    const prettierOptions = await prettier.resolveConfig(__filename)
    const prettied = prettier.format(code, {
      ...prettierOptions,
      // helps to specify parser
      filepath,
    })
    return prettied
  } catch (err) {
    console.info('Fails to format', filepath)
  }
}

module.exports = {
  fetchFile,
  download,
}
