import { Button, Modal, Space, Spin } from "@douyinfe/semi-ui"
import { useState } from "react"
import markdownSvg from "../../../assets/images/markdown.svg"
import pdfSvg from "../../../assets/images/pdf.svg"
import wordSvg from "../../../assets/images/word.svg"
import htmlSvg from "../../../assets/images/html.svg"

import styled from "@emotion/styled"



const ImgStyle = styled.img`
width:40px;
height:40px
`

const SpaceStyle = styled(Space)`
font-size:12px;
margin:0 10px;
cursor: pointer;
`


export default function DownloadModal ({ onPrintPdf, onPrintFile }) {


    const [showModal, setShowModal] = useState(false)

    const handleClickDownload = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const downloadFile = value => {
        if (value === "pdf") onPrintPdf()
        else onPrintFile(value)
    }


    return <>
        <Button style={{ float: 'right' }} theme='solid' type='primary' onClick={() => handleClickDownload()}>下载</Button>
        <Modal
            style={{ width: '600px' }}
            maskClosable={false}
            hasCancel={false}
            footer={<span></span>}
            title="下载文件"
            visible={showModal}
            onCancel={() => handleClose()}
        >
            <Space>
                <div onClick={() => downloadFile('pdf')}>
                    <SpaceStyle vertical >
                        <ImgStyle src={pdfSvg} />
                        <span>下载PDF文件</span>
                        <span>.pdf</span>
                    </SpaceStyle>
                </div>
                {/* <div onClick={() => downloadFile('word')}>
                        <SpaceStyle vertical >
                            <ImgStyle src={wordSvg} />
                            <span>下载Word文件</span>
                            <span>.docx</span>
                        </SpaceStyle>
                    </div> */}
                <div onClick={() => downloadFile('md')}>
                    <SpaceStyle vertical >
                        <ImgStyle src={markdownSvg} />
                        <span>下载Markdown文件</span>
                        <span>.md</span>
                    </SpaceStyle>
                </div>
                <div onClick={() => downloadFile('html')}>
                    <SpaceStyle vertical >
                        <ImgStyle src={htmlSvg} />
                        <span>下载HTML文件</span>
                        <span>.html</span>
                    </SpaceStyle>
                </div>
            </Space>

        </Modal>
    </>

}