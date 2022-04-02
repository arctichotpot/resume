import { TabPane, Tabs } from '@douyinfe/semi-ui';
import { Outlet, useNavigate } from "react-router";

export default function Layout () {

    const navigate = useNavigate()

    const tabs = [
        { name: '简历', path: '/md' },
        { name: 'PDF预览', path: '/pdf' }
    ]

    const onChange = (value) => {
        console.log(value)
    }
    return <div>
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