
const { mdToPdf } = require('md-to-pdf');


module.exports = async (md) => {

    const pdf = await mdToPdf({ content: md }).catch(console.error);
    if (pdf) return pdf
    else return false
}