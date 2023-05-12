import React, {useEffect, useState} from 'react';
import "./style.scss"
import {UsersServices} from "../../API/usersServices";
import {useFetching} from "../../hooks/useFetching";
import UsersItem from "../../components/usersItem/usersItem";

const Users = () => {
    const [userList, setUsersList] = useState([])
    const {fetching, loading} = useFetching(async () => {
        const result = await UsersServices.getUsers()
        setUsersList(result.data)
    })

    useEffect(() => {
        fetching()
    }, [])

    const removeUser = (id) => {
        let newList = userList.filter(item => item.id !== id)
        setUsersList(newList)
    }


    return <div className="users-section">
        <div className="users-box">
            <div className="users-header">
                <p>10 Users Free fake API for testing and prototyping.</p>
                <span>Handcrafted by our friends from NucleoApp</span>
            </div>

            <div className="users-list">
                {loading ?
                    <>
                        {userList.length ?
                            <>
                                {userList.map(user => (
                                    <UsersItem
                                        key={user.id}
                                        name={user.name}
                                        id={user.id}
                                        userName={user.username}
                                        email={user.email}
                                        removeUser={removeUser}
                                    />
                                ))}

                            </>
                            : <p style={{color:"red"}}>EMPTY LIST</p>}
                    </>

                    : <p style={{color: 'red'}}>Loading...</p>}
            </div>

        </div>
    </div>

};

export default Users;