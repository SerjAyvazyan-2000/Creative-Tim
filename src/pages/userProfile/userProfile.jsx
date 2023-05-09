import React from 'react';
import EditUsers from "../../components/editUsers/editUsers";
import "./style.scss"

const UserProfile = () => {
    return<section className="user-profile-section">
          <EditUsers/>
    </section>
};

export default UserProfile;