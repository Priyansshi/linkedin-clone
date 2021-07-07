import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/counter/userSlice'
import { useSelector } from 'react-redux'
import "./Feed.css"
function Feed() {
  const user = useSelector(selectUser);
  return (
    <div className="feed">
      <div className="feed_news">
        <h3>LinkedIn News</h3><br/>
        <h5>Is the job market reviving?</h5>  
        <p>3d ago 1,206 readers</p>
        <h5>Apple pushes back on remote work</h5> 
        <p>2d ago 212,827 readers </p>
        <h5>When job interviews are endless</h5> 
        <p>3d ago 93,444 readers</p> 
        <h5>Putting things off? Join the club</h5>
        <p>10h ago 4,058 readers</p>
        <h5>How to make team projects pain-free</h5>
        <p>10h ago • 704 readers</p>
      </div>
      <div className="feed_course">
          <h3>Today's top courses</h3><br/>
          <h5>Customer Service Foundations</h5>
          <p>Jeff Toiser</p>
          <h5>Critical Thinking for Better </h5>
          <p>Becki Seltzmen</p>
          <h5>What is Graphic desine</h5>
          <p>Sean Adams</p>
      </div>
      <div className="feed_job">
          <div className="feed_url_logo">
              <Avatar  src={user.photoUrl} >{user.email[0]}</Avatar>
              <LinkedInIcon className="linkedicon"/>  
          </div>
          <p>Priyanshi , explore jobs at LinkedIn that match your skills</p>
          <button>See jobs</button>
        
      </div>
    </div>

  );
}

export default Feed;
