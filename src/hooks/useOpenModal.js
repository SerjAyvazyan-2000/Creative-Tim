import {useMemo, useState} from "react";


export const useOpenModal = (callback) => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        try {
            setModal(!modal)
            callback()
        }catch (e){
            alert("error Open Modal")
        }


    }

    return {openModal}

}
