import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/counter/userSlice'
import { useSelector } from 'react-redux'
function Sidebar() {
    const user = useSelector(selectUser)


    return (
        <div className="sidebar">
            <div className = "sidebar_first">
                <img src="./linkedbg.jpg"/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                <div className="sidebar_first1">
                    <p>Who viewed you</p>
                    <p>1,000</p>
                </div>
                <div className="sidebar_first1">
                    <p>Who views posts</p>
                    <p>1,000</p>
                </div>
            </div>
            <div className="sidebar_second">
                <h2>Recent</h2>
                <p># html</p>
                <p># type script</p>
                <p># redux</p>
                <p># mern</p>
                <p># react</p>
            </div>
        </div>
    )
}

export default Sidebar
