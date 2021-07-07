import React from 'react'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function feeds({name,descripation,message,photourl}) {
    return (
        <div className="post_show">
                <div className="post_show_user">
                    <Avatar src={photourl}>{name[0]}</Avatar>
                    <div >
                        <h4>{name}</h4>
                        <p>{descripation}</p>
                    </div>
                </div>
                <p>{message}</p>
                <div className="post_icons">
                       <div><ThumbUpIcon/><p>Like</p></div>
                       <div><CommentIcon/><p>Comment</p></div>
                       <div><ShareIcon/><p>Share</p></div>
                       <div><SendIcon/><p>Send</p></div>
                </div>
        </div>
    )
}

export default feeds
