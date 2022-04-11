const express = require('express');
const router = express.Router()
// const mdToPdf = require("../utils/mdToPdf")
const { mdToPdf } = require('md-to-pdf');



router.post('/toPdf', async (req, res) => {
    const { markdown } = req.body
    const file = await mdToPdf({ content: markdown })

    res.type('pdf');
    res.send(Buffer.from(file.content, 'binary'))
})



module.exports = router