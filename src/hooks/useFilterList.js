import {useState} from "react";

export const useFilterList = (notifications) => {
    const [notificationStyle, serNotificationStyle] = useState([])
    const [notificationState, serNotificationState] = useState([])

    const filterNotification = () => {
        let styleList = notifications.filter(item => item.category === "style")
        let stateList = notifications.filter(item => item.category === "state")
        serNotificationState(stateList)
        serNotificationStyle(styleList)
    }

    const remove = (id) => {
        let newStyleList = notificationStyle.filter(item => item.id !== id)
        let newStateList = notificationState.filter(item => item.id !== id)
        serNotificationStyle(newStyleList)
        serNotificationState(newStateList)
    }
    return [filterNotification,notificationStyle,notificationState,remove]
}