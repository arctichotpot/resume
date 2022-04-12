import styled from "@emotion/styled";
import { Button, Space, Typography } from '@douyinfe/semi-ui';
import { IconGithubLogo } from "@douyinfe/semi-icons";
import ParticlesBg from "particles-bg";
import { useNavigate } from "react-router";

const DashboardLayout = styled.div`
  overflow:hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DashboardTitle = styled.div`
  margin: 0 0 32px;
  font-size: 48px;
  font-family: Inter, PingFang SC, system, -apple-system, BlinkMacSystemFont, Segoe UI, Microsoft YaHei, wenquanyi micro hei, Hiragino Sans GB, Hiragino Sans GB W3, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-weight: 700;
`

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export default function Dashboard () {
    const { Title, Text } = Typography;
    const navigate = useNavigate()
    const bgList = ["color", "ball", "polygon", "square",]
    const bg = shuffleArray(bgList)[0]

    const openGitHub = () => {
        window.open('https://github.com/arctichotpot/resume')
    }

    return <DashboardLayout>
        <Space vertical align='start'>
            <DashboardTitle>简单易用的 <br />简历在线生成网站</DashboardTitle>
            <Title heading={2} spacing="extended" style={{ fontSize: '18px' }}>
                这是一个由 <Text type="danger">React</Text>
                制作的简易的简历生成网站<br />
                在这里你可以用
                <Text type="danger">MarkDown</Text>
                来制作你的简历,并可以导出为 <Text type="danger">Pdf</Text>
                , <Text type="danger">Word</Text>
                ,或者 <Text type="danger">MarkDown</Text>
                格式文件<br />
            </Title>
            <Space>
                <Button size='large' theme='solid' type='primary' style={{ fontSize: '16px' }}
                    onClick={() => navigate('/resume')}>开始制作简历</Button>
                {/* <Button icon={<IconGithubLogo />} size='large' type="tertiary" style={{ fontSize: '16px' }}
                    onClick={openGitHub}>GitHub</Button> */}
            </Space>
        </Space>
        <ParticlesBg type={bg} bg={true} />
    </DashboardLayout>
}