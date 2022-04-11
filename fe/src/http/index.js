import axios from "axios"


export const downloadPdf = (md) => {
    return axios({
        responseType: "arraybuffer",
        url: 'http://127.0.0.1:8081/api/md/toPdf',
        method: 'post', // 默认为get
        data: {        // post请求传递参数用data, get请求传递参数用params
            html: md
        }
    })
}