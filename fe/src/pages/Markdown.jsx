import {Button, Space} from "@douyinfe/semi-ui";
import MarkdownEditor from "../components/MarkdownEditor";

export default function Markdown() {

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
            <MarkdownEditor/>
        </div>
    </div>
}