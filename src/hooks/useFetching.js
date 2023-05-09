import {useState} from "react";


export const useFetching = (callback) =>{
    const [loading,setLoading] = useState(true)

    const fetching =  async () => {
        try {
            setLoading(false)
           await callback()
        }catch (e){
             alert("ERROR LOADER")
        }
        finally {
            setLoading(true)
        }

    }
    return {fetching,loading}

}