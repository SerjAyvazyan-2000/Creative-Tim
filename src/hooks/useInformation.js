
import sidebarImg1 from  "../../src/assets/images/sidebar-1.jpg"
import sidebarImg2 from  "../../src/assets/images/sidebar-5.jpg"
import sidebarImg3 from  "../../src/assets/images/sidebar-3.jpg"
import sidebarImg4 from  "../../src/assets/images/sidebar-4.jpg"

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
    const typographyList = [
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 40, number: true, id: 1
        },
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 35, number: true, id: 2
        },
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 30, number: true, id: 3
        },
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 25, number: true, id: 4
        },
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 20, number: true, id: 5
        },
        {
            title: 'Header', description: "The Life of LB Dashboard", color: "",
            fonsSize: 15, number: true, id: 6
        },
        {
            title: 'Paragraph',
            description: "I will be the leader of a company that ends up being " +
                "worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a " +
                "responsibility that I have, to push possibilities, to show people, this is the level that things could be at",
            fonsSize: 20,
            color: '',
            number: false,
            id: 7
        },
        {
            title: '',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers. I understand culture. I am the nucleus." +
                " I think that’s a responsibility that I have, to push possibilities, to show people, " +
                "this is the level that things could be at.",
            fonsSize: 25,
            color: '',

            number: false,
            id: 8
        },
        {
            title: 'Quote',
            description: "Noaa",
            fonsSize: 20,
            color: '',
            number: false,
            id: 9
        },
        {
            title: 'Muted Text',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "gray",
            number: false,
            id: 10
        },
        {
            title: 'Primary Text\n',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "blue",
            number: false,
            id: 11
        },
        {
            title: ' Info Text',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "aqua",
            number: false,
            id: 12
        },
        {
            title: 'Success Text',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "green",
            number: false,
            id: 13
        },
        {
            title: ' Warning Text',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "orange",
            number: false,
            id: 14
        },
        {
            title: 'Danger Text',
            description: "I will be the leader of a company that ends up being worth billions " +
                "of dollars, because I got the answers...",
            fonsSize: 16,
            color: "red",
            number: false,
            id: 15
        },
        {
            title: '',
            description: "Header with small subtitle",
            fonsSize: 35,
            color: "",
            number: false,
            id: 16
        },
        {
            title: 'Small Tag',
            description: "Use small tag for the headers",
            fonsSize: 30,
            color: "gray",
            number: false,
            id: 17
        },

    ]
    const sidebarImages = [
        {img:sidebarImg1,id:1},
        {img:sidebarImg2,id:2},
        {img:sidebarImg3,id:3},
        {img:sidebarImg4,id:4}

    ]
    const adjustmentsColor = [
        {color:'black', id:1},
        {color:'blue', id:2},
        {color:'green', id:3},
        {color:'orange', id:4},
        {color:'red', id:5}
    ]


    return {iconsList, notifications, placesButtons, placesButtonsText,typographyList,sidebarImages,adjustmentsColor}
}
