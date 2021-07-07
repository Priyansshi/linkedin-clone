import React, { useEffect, useState } from "react";
import "./Post.css";
import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventNoteIcon from "@material-ui/icons/EventNote";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import Feed from "./feeds.js";
import axios from "./axios"
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
function Post({post}) {

  const user = useSelector(selectUser)  
  const [input, setinput] = useState("")
  console.log(user)
  const sendPost = async (e) => {
    e.preventDefault();
    await axios.post("/new",{
      name:user.displayName,
      descripation:user.email,
      message:input,
      image:user.photoUrl||"",
    })
    setinput("");
  };
  console.log(post)
  return (
    <div className="post">
      <div className="post_write">
        <div className="post_input">
          <CreateIcon />
          <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="message"
          />
          <button onClick={sendPost} type="submit"></button>  
          </form>
          
        </div>
        <div className="post_icons">
          <div>
            <PhotoIcon />
            <p>photo</p>
          </div>
          <div>
            <VideocamIcon />
            <p>Video</p>
          </div>
          <div>
            <EventNoteIcon />
            <p>Event</p>
          </div>
          <div>
            <LineWeightIcon />
            <p>Write article</p>
          </div>
        </div>
      </div>
      
      {post.map((post=>(
        <Feed
        name={post.name}
        descripation={post.descripation}
        message={post.message}
        photourl={post.image}
      />
      )
      ))}
      <Feed
        name="Priyanshi sharma"
        descripation="test@gmail.com"
        message="This is a demo message"
        photourl={"t"}
      />
    </div>
  );
}

export default Post;
