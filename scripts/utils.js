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
  return fetch(url).then((res) => res.text())
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
  console.info('downloading', url)
  try {
    let content = await fetchFile(url)
    content = preprocesser(content)
    if (saveAs) {
      content = await format(content, saveAs)
      await fs.writeFile(saveAs, content)
    }
    return content
  } catch (err) {
    console.info('fails to download', url, err)
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
    console.info('fails to format', filepath, err)
  }
}

module.exports = {
  fetchFile,
  download,
}
