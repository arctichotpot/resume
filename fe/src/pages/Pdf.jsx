import { useRecoilValue } from "recoil"
import { resumeState } from "../store/store";
import styled from "@emotion/styled";
import MarkdownIt from 'markdown-it';
import "../styles/markdown.scss"
import { Card, Empty } from "@douyinfe/semi-ui"
import EmptySvg from "../assets/images/empty.svg"

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

    return <PdfContainer>
        {renderJudge()}
    </PdfContainer>
}