const express = require('express');
const router = express.Router()
// const mdToPdf = require("../utils/mdToPdf")
const { mdToPdf } = require('md-to-pdf');



router.post('/toPdf', async (req, res) => {
    const { html } = req.query

    // const mdFile = Buffer.from(html)

    const pdf = await mdToPdf({ content: html })


    // const file = await mdToPdf(html)

    console.log(pdf)

    // res.type('pdf');
    // res.end(Buffer.from(file.content, 'binary'));
    // res.send(Buffer(file, 'binary'))
    // res.send(file)
})



module.exports = router