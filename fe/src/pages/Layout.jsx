import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit } from '@douyinfe/semi-icons';
import { Outlet } from 'react-router';


export default function Layout () {
    return <>
        <div style={{ width: '100%' }}>
            <Nav
                mode={'horizontal'}
                items={[
                    { itemKey: 'user', text: '简历填写', icon: <IconUser /> },
                    { itemKey: 'union', text: '文件转换', icon: <IconStar /> },
                ]}
                onSelect={key => console.log(key)}
            />
        </div>

        <Outlet></Outlet>

    </>
}


