import {
    printHTML
} from "../src"


document.getElementById('print').addEventListener('click', () => {
    const html = document.getElementById('html').value,
        css = document.getElementById('css').value,
        title = document.getElementById('title').value,
        htmlDoc = `
        <!doctype html>
        <html>
            <head>
                <title>${title}</title>
                <style>${css}</style>
            <head>
            <body>${html}</body>
        </html>`,
        printCallback = iframeWin => {
            const pageCount = iframeWin.document.querySelectorAll('[data-vivliostyle-page-container]').length
            console.log(`page count: ${pageCount}`)
            iframeWin.print()
        }

    printHTML(htmlDoc, {
        title,
        printCallback,
        hideIframe: true, // Whether to use a hidden iframe (default: true)
        removeIframe: true // Whether to remove the iframe after use (default: true)
    })
})
