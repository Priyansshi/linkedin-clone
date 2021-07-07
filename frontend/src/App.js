import React, { useEffect, useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./Header"
import Feeds from "./Feed"
import Post from "./Post"
import Sidebar from "./Sidebar"
import axios from "./axios"
import Pusher from "pusher-js"
import {login,logout,selectUser} from "./features/counter/userSlice"
import Login from "./Login.js"
import { useSelector} from 'react-redux';
import { auth } from './Firebase';
import {useDispatch} from "react-redux"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email:userAuth.email,
            uid : userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL
          })
        )
      }else{
        dispatch(logout())
      }
    })
  }, [])

  const [post, setpost] = useState([])
  useEffect(()=>{
    axios.get("/sync").then((res)=>{
    setpost(res.data)
    })
  },[])
  useEffect(() => {
    var pusher = new Pusher('c9039e744defe416e8c9', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', function(data) {
      console.log(data)
      setpost([...post,data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [post])
  console.log(post)

  return (
    <div className="app">
     <Header/>
     {!user ? (<Login/>):(
      <div className="body">
     <Sidebar/>
     <Post post={post}/>
     <Feeds />
     </div>
     )}
     
    </div>
  );
}

export default App;
