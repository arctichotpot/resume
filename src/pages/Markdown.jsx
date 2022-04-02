import {Button, Space} from "@douyinfe/semi-ui";
import ReactMarkdown from 'react-markdown'

export default function Markdown() {
    const markdown = `A paragraph with *emphasis* and **strong importance**.`

    return <div>
        <Space>
            <Button theme='solid' type='primary'>联系方式</Button>
            <Button theme='solid' type='primary'>个人信息</Button>
            <Button theme='solid' type='primary'>经历证明</Button>
            <Button theme='solid' type='primary'>能力证明</Button>
            <Button theme='solid' type='primary'>技能清单</Button>
            <Button theme='solid' type='primary'>致谢</Button>
        </Space>
        <div>
            <ReactMarkdown children={markdown}></ReactMarkdown>
        </div>
    </div>
}