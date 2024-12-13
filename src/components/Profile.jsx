import React, {useContext} from 'react';

import UserContext from '../context/UserContext';

function Profile() {

    const {user} = useContext(UserContext);

    if(!user){
        return <div> Please login. </div>
    }
    else
    return (
        <div>
            <h1>
                User Info :
            </h1>
            <p> {user.username} </p>
        </div>
    )
}

export default Profile