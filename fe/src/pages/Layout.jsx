import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconStar, IconUser } from '@douyinfe/semi-icons';
import { Outlet, useNavigate, useLocation } from "react-router";
import { useState } from 'react';


export default function Layout () {

    const location = useLocation()
    const navigate = useNavigate()
    const [activeKey, setActiveKey] = useState(location.pathname)

    const tabList = [
        { key: '/resume', value: '简历', icon: <IconUser /> },
        { key: '/format', value: '格式转换', icon: <IconStar /> },
    ]

    const onChange = (value) => {
        setActiveKey(value)
        navigate(value)
    }
    return <div style={{ width: '100%' }}>
        <Tabs style={{ padding: '0 20px' }} onChange={onChange} activeKey={activeKey}>
            {
                tabList.map(item => (
                    <TabPane
                        key={item.key}
                        tab={
                            <span>
                                {item.icon}
                                {item.value}
                            </span>
                        }
                        itemKey={item.key}
                    >
                        <Outlet></Outlet>
                    </TabPane>
                ))
            }
        </Tabs>
    </div>
}


