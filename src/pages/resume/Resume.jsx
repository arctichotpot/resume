import { TabPane, Tabs } from '@douyinfe/semi-ui';
import { useState } from 'react';
import Pdf from './Pdf';
import ResumeTemplate from './Template';
import Markdown from './Markdown';

export default function Resume () {

    const tabs = [
        { key: '简历', value: 'md', component: <Markdown /> },
        { key: 'PDF预览', value: 'pdf', component: <Pdf /> },
        { key: '简历模板', value: 'template', component: <ResumeTemplate /> }
    ]

    const [activeKey, setActiveKey] = useState('md')


    const onChange = (value) => {
        setActiveKey(value)
    }

    return <Tabs style={{ padding: '10px' }} tabPosition="left" onChange={onChange} activeKey={activeKey}>
        {
            tabs.map(item => <TabPane
                tab={item.key}
                itemKey={item.value}
                key={item.value}
            >
                {item.component}
            </TabPane>)
        }
    </Tabs>
}