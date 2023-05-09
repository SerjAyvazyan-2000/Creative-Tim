import Dashboard from "../pages/dashboard/dashboard";
import UserProfile from "../pages/userProfile/userProfile";
import TableList from "../pages/tableList/tableList";
import Typography from "../pages/typography/typography";
import Icons from "../pages/icons/icons";
import Maps from "../pages/maps/maps";
import Notification from "../pages/notification/notification";
import UpgradeToPro from "../pages/upgradeToPro/upgradeToPro";
import Users from "../pages/users/users";
import Posts from "../pages/posts/posts";

export const routes = [
    {path:'/dashboard',components:<Dashboard/>},
    {path:'/userProfile',components:<UserProfile/>},
    {path:'/tableList',components:<TableList/>},
    {path:'/typography',components:<Typography/>},
    {path:'/icons',components:<Icons/>},
    {path:'/upgrade',components:<UpgradeToPro/>},
    {path:'/maps',components:<Maps/>},
    {path:'/notification',components:<Notification/>},
    {path:'/users',components:<Users/>},
    {path:'/posts',components:<Posts/>},

]