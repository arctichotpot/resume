import { TabPane, Tabs } from '@douyinfe/semi-ui';
import { Outlet, useNavigate, useLocation } from "react-router";
import { useState } from 'react';


export default function Resume () {

    const location = useLocation()
    const navigate = useNavigate()

    const tabs = [
        { name: '简历', path: '/resume/md' },
        { name: 'PDF预览', path: '/resume/pdf' },
        { name: '简历模板', path: '/resume/template' }
    ]

    const [activeKey, setActiveKey] = useState(location.pathname)


    const onChange = (value) => {
        setActiveKey(value)
        navigate(value)
    }

    return <div style={{ padding: '10px' }} >
        <Tabs tabPosition="left" onChange={onChange} activeKey={activeKey}>
            {tabs.map(item => <TabPane
                tab={item.name}
                itemKey={item.path}
                key={item.path}
            >
                <Outlet />
            </TabPane>)}
        </Tabs>
    </div>
}