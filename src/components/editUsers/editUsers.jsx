import React, {useState} from 'react';
import "./style.scss"
import MyInput from "../../ui/myInput/myInput";
import MyButton from "../../ui/myButton/myButton";
import userCard from "../../assets/images/photo-1431578500526-4d9613015464.jpg"
import author from "../../assets/images/face-3.jpg"
import {NavLink} from "react-router-dom";


const EditUsers = () => {

    const [users,setUsers] = useState({
        id:1,
        img:author,
        name:'Mike Andrew',
        userName:'michael24',
        description:'"Lamborghini Mercy Your chick she so thirsty I\'m in that two seat Lambo"'
    })

    return <div className="edit-users-section">
        <div className="edit-profile">
            <div className="profile-title"><p>Edit Profile</p></div>
            <form action="" className="edit-users-form">

                <div className="edit-input-box-company ">
                    <div className="company-tools">
                        <MyInput
                            placeholder="COMPANY"
                            text="COMPANY (Disabled)"
                            type={"text"}
                        />
                    </div>
                    <div className="company-tools">

                        <MyInput
                            placeholder="Username"
                            text="USERNAME"
                            type={"text"}

                        />
                    </div>
                    <div className="company-tools">
                        <MyInput
                            placeholder="EMAIL ADDRESS"
                            text="EMAIL"
                            type={"email"}

                        />
                    </div>
                </div>

                <div className="edit-box-firstName-lastName">
                    <div className="firstname-tools">
                        <MyInput
                            placeholder="FirstName"
                            text="FirstName"
                            type={"text"}
                        />
                    </div>
                    <div className="firstname-tools">
                        <MyInput placeholder="LastName"
                                 type={"text"}
                                 text={"LastName"}/>
                    </div>
                </div>

                <div className="edit-address">
                    <div className="address-tools">
                        <MyInput
                            placeholder="Address"
                            text="ADDRESS"
                            type={"text"}

                        />
                    </div>
                </div>

                <div className="edit-city-country">
                    <div className="city-country-tools">
                        <MyInput placeholder="City"
                                 type={"text"}
                                 text="City"/>
                    </div>
                    <div className="city-country-tools">
                        <MyInput placeholder="COUNTRY"
                                 type={"text"}
                                 text="COUNTRY"/>
                    </div>
                    <div className="city-country-tools">
                        <MyInput placeholder="Zip Code"
                                 text="POSTAL CODE"
                                 type={"text"}

                        />
                    </div>
                </div>

                <div className="edit-about-me">
                    <div className="about-tools">
                        <p>ABOUT ME</p>
                        <textarea placeholder="Here can be your description"></textarea>
                    </div>
                </div>
                <div className="update-users">
                    <MyButton text="Update Profile"/>
                </div>
            </form>

        </div>


        <div className="users-information">
            <div className="card-user">
                <div style={{backgroundImage: `url(${userCard})`}} className="card-image G-image"></div>

                <div className="card-body">
                    <NavLink className="card-author">
                        <img src={users.img} alt=""/>
                        <h3>{users.name}</h3>
                    </NavLink>
                    <div className="author-description">
                        <p>{users.userName}</p>
                        <p>{users.description}</p>
                    </div>
                    <div className="author-contact">
                        <span className="icon-facebook"></span>
                        <span className="icon-twitter"></span>
                        <span className="icon-google-plus"></span>
                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default EditUsers;