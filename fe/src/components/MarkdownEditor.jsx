import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import styled from "@emotion/styled";
// import styled from '@emotion/styled'

const Editor = styled(MdEditor)`
  margin-top: 20px;
  height: 800px
`

export default function MarkdownEditor() {
    const mdParser = new MarkdownIt();

    function handleEditorChange({html, text}) {
        console.log('handleEditorChange', html, text);
    }

    return <div>
        <Editor renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}/>
    </div>
}