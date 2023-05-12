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


export const useInformation = () => {
    const iconsList = [
        {name: 'icon-map-signs', id: 1},
        {name: 'icon-facebook', id: 2},
        {name: 'icon-home', id: 3},
        {name: 'icon-pencil', id: 4},
        {name: 'icon-pencil2', id: 5},
        {name: 'icon-eyedropper', id: 6},
        {name: 'icon-droplet', id: 7},
        {name: 'icon-connection', id: 8},
        {name: 'icon-film', id: 9},
        {name: 'icon-feed', id: 10},
        {name: 'icon-library', id: 11},
        {name: 'icon-map-signs', id: 1},
        {name: 'icon-facebook', id: 2},
        {name: 'icon-home', id: 3},
        {name: 'icon-pencil', id: 4},
        {name: 'icon-pencil2', id: 5},
        {name: 'icon-eyedropper', id: 6},
        {name: 'icon-droplet', id: 7},
        {name: 'icon-connection', id: 8},
        {name: 'icon-film', id: 9},
        {name: 'icon-feed', id: 10},
        {name: 'icon-library', id: 11},

    ]
    const navBarState = [
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
    const notifications = [
        {
            title: "Primary ",
            body: ' This is a regular notification made with ".alert-primary',
            remove: true,
            icon: false,
            color: 'blue',
            id: 1,
            category: 'style'
        },
        {
            title: "Info  ",
            body: 'This is a regular notification made with ".alert-info',
            remove: true,
            icon: false,
            color: 'aqua',
            id: 2,
            category: 'style'

        },
        {
            title: "Success ",
            body: 'This is a regular notification made with ".alert-info',
            remove: true,
            icon: false,
            color: 'green',
            category: 'style',
            id: 3
        },
        {
            title: "Warning ",
            body: 'This is a regular notification made with ".alert-info',
            remove: true,
            icon: false,
            color: 'orange',
            category: 'style',
            id: 4
        },
        {
            title: "Danger ",
            body: 'This is a regular notification made with ".alert-info',
            remove: true,
            icon: false,
            color: 'red',
            category: 'style',
            id: 5
        },
        {
            title: "Danger ",
            body: 'This is a regular notification made with ".alert-info',
            remove: true,
            icon: false,
            color: 'red',
            category: 'style',
            id: 6
        },
        {
            title: "",
            body: 'This is a plain notification no',
            remove: false,
            icon: false,
            color: 'aqua',
            id: 7,
            category: 'state'
        },
        {
            title: "",
            body: 'This is a notification with close button',
            remove: true,
            icon: false,
            color: 'aqua',
            category: 'state',
            id: 8
        },
        {
            title: "",
            body: 'This is a notification with close button',
            remove: true,
            icon: true,
            color: 'aqua',
            category: 'state',
            id: 9
        },
        {
            title: "",
            body: 'This is a notification with close button and icon' +
                ' and have many lines. You can see that the icon and the close button are always' +
                ' vertically aligned.' +
                ' This is a beautiful notification. So you don\'t have to worry about the style.',
            remove: true,
            icon: true,
            color: 'aqua',
            id: 10, category: 'state'
        },


    ]
    const routes = [
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
    const placesButtons = [
        {
            name: 'Top Right',
            direction: 'rightTop',
            id: 1
        },
        {name: 'Top Left', direction: 'leftTop', id: 2,},
        {
            name: 'Top Center', direction: 'centerTop',
            id: 3
        },
        {
            name: 'Bottom Center', direction: 'centerBottom',
            id: 4
        },
        {
            name: 'Bottom Right', direction: 'rightBottom',
            id: 5
        },
        {
            name: 'Bottom Left', direction: 'leftBottom',
            id: 6
        },
    ]
    const placesButtonsText = {
        title: 'Welcome to Light Bootstrap Dashboard - a beautiful freebie',
        description: 'for every web developer',
        icon: 'icon-coin-dollar',
        color: '',
        id: 1
    }


    return [iconsList, navBarState, notifications, routes, placesButtons, placesButtonsText]
}
