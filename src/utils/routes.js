import Dashboard from "../pages/dashboard/dashboard";
import UserProfile from "../pages/userProfile/userProfile";
import TableList from "../pages/tableList/tableList";
import Typography from "../pages/typography/typography";
import Icons from "../pages/icons/icons";
import UpgradeToPro from "../pages/upgradeToPro/upgradeToPro";
import Maps from "../pages/maps/maps";
import Notification from "../pages/notification/notification";
import Users from "../pages/users/users";
import Posts from "../pages/posts/posts";


export const navLinks =  [
    {name: 'DASHBOARD', to: '/dashboard', icon: 'icon-meter'},
    {name: 'USERS PROFILE', to: '/userProfile', icon: 'icon-user'},
    {name: 'TABLE LIST', to: '/tableList', icon: 'icon-file-text'},
    {name: 'TYPOGRAPHY', to: '/typography', icon: 'icon-folder-open',},
    {
        name: 'USERS',
        to: '/users',
        icon: 'icon-users',
        subMenu: {name: 'POSTS', to: '/posts', icon: 'icon-envelop'}
    },
    // {name: 'POSTS', to: '/posts', icon: 'icon-envelop'},
    {name: 'ICONS', to: '/icons', icon: 'icon-IcoMoon'},
    {name: 'MAPS', to: '/maps', icon: 'icon-location'},
    {name: 'NOTIFICATION', to: '/notification', icon: 'icon-bell'},
    {name: 'UPGRADE TO PRO', to: '/upgrade', icon: 'icon-printer'},
]
export const routes = [
    {path: '/dashboard', components: <Dashboard/>},
    {path: '/userProfile', components: <UserProfile/>},
    {path: '/tableList', components: <TableList/>},
    {path: '/typography', components: <Typography/>},
    {path: '/icons', components: <Icons/>},
    {path: '/upgrade', components: <UpgradeToPro/>},
    {path: '/maps', components: <Maps/>},
    {path: '/notification', components: <Notification/>},
    {path: '/users', components: <Users/>},
    {path: '/posts', components: <Posts/>},

]
