import { useRecoilValue } from "recoil"
import { resumeState } from "../../store/store";
import styled from "@emotion/styled";
import MarkdownIt from 'markdown-it';
import "../../styles/markdown.scss"
import { Card, Empty } from "@douyinfe/semi-ui"
import EmptySvg from "../../assets/images/empty.svg"
import { useRef } from "react";
import DownloadModal from "./component/DownloadModal"
import { useReactToPrint } from 'react-to-print';
import { createFile } from "../../utils/file";


const PdfContainer = styled.div`
    display:flex;
    justify-content:center;
    height:90vh;
`

const CardStyle = styled(Card)`
    width:793px;
`

export default function Pdf () {

    const md = new MarkdownIt()
    const content = useRecoilValue(resumeState)
    const printRef = useRef()

    const onPrintFile = (value, cb) => {
        if (value === "md") createFile(content, 'md')
        if (value === "html") {
            const html = md.render(content)
            createFile(html, 'html')
        }
        // if (value === "word") createMdFile(content)
    }

    const onPrintPdf = useReactToPrint({
        content: () => printRef.current,
    });

    const renderJudge = () => {
        if (content === "")
            return <div style={{ marginTop: '100px' }}>
                <Empty
                    image={<img src={EmptySvg} style={{ width: 150, height: 150 }} />}
                    title={'简历是空的呢'}
                    description="快点填写简历完善吧..."
                />
            </div>
        else return <div style={{ 'overflowY': 'scroll' }}>

            <CardStyle ref={printRef} >
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
            </CardStyle>
        </div>
    }

    return <>
        <DownloadModal onPrintPdf={onPrintPdf} onPrintFile={value => onPrintFile(value)} />
        <PdfContainer>
            {renderJudge()}
        </PdfContainer>

    </>
}
