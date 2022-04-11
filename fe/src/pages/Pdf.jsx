import { useRecoilValue } from "recoil"
import { resumeState } from "../store/store";
import styled from "@emotion/styled";
import MarkdownIt from 'markdown-it';
import "../styles/markdown.scss"
import { Card, Empty, Button } from "@douyinfe/semi-ui"
import EmptySvg from "../assets/images/empty.svg"
import { downloadPdf } from "../http";

const PdfContainer = styled.div`
    display:flex;
    justify-content:center;
    height:90vh;
`

const CardStyle = styled(Card)`
    width:793px;
`

export default function Pdf () {

    const content = useRecoilValue(resumeState)

    const md = new MarkdownIt()

    const download = () => {
        downloadPdf(content).then(res => {
            console.log(res)

            const data = res.data;
            const blob = new Blob([data]);
            const blobUrl = window.URL.createObjectURL(blob);
            downloadBlob(blobUrl);


        })
    }

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
            <CardStyle>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
            </CardStyle>
        </div>
    }

    return <>
        <Button onClick={() => download()}>下载</Button>
        <PdfContainer>

            {renderJudge()}
        </PdfContainer>

    </>
}



function downloadBlob (blobUrl) {
    const a = document.createElement('a');
    a.download = 'a.pdf';
    a.href = blobUrl;
    a.click();
}
