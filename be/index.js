const puppeteer = require('puppeteer')
const express = require("express")
const app = express()
const fs = require('fs')
const port = 3000

const html_vars = {
    title: 'title',
    date: Date.now(),
    author: '晴天同学'
}
const template = fs.readFileSync('./index.html', 'utf8')

// app.render(template, async (err, html) => {
//     console.log(html)
//     // 尝试导出pdf
//     // const browser = await puppeteer.launch({
//     //     args: ['--disable-dev-shm-usage', '--no-sandbox']
//     // });

//     // const page = await browser.newPage();
//     // page.setContent(html)
//     // await page.pdf({
//     //     format: 'A4',
//     //     path: './public/pdf.pdf'
//     // })

// })



async function init () {
    const browser = await puppeteer.launch({
        args: ['--disable-dev-shm-usage', '--no-sandbox']
    });

    const page = await browser.newPage();
    // page.setContent(template)
    await page.goto('https://blog.csdn.net/m0_60741764/article/details/119453507');

    await page.pdf({
        format: 'A4',
        path: './public/pdf.pdf'
    })
}
init()

// const pdf_string = await ctx.renderView(html_template, html_vars)


