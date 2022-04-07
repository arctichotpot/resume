import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import styled from "@emotion/styled";
import { useRecoilValue } from 'recoil';
import { resumeState } from '../store/store';

const Editor = styled(MdEditor)`
  margin-top: 20px;
  height: 800px
`

export default function MarkdownEditor ({ onChange }) {
    const mdParser = new MarkdownIt();
    const content = useRecoilValue(resumeState)

    function handleEditorChange ({ html, text }) {
        onChange(text)
    }

    return <div>
        <Editor
            value={content}
            renderHTML={text => mdParser.render(text)}
            onChange={handleEditorChange}
            canView={{ fullScreen: false }}
        />
    </div>
}