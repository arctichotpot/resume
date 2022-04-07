import { TabPane, Tabs } from '@douyinfe/semi-ui';
import { Outlet, useNavigate } from "react-router";

export default function Resume () {

    const navigate = useNavigate()

    const tabs = [
        { name: '简历', path: 'md' },
        { name: 'PDF预览', path: 'pdf' }
    ]

    const onChange = (value) => {
        navigate(value)
    }
    return <div style={{ padding: '10px' }}>
        <Tabs tabPosition="left" onChange={onChange}>
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