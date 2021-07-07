import "./Login.css"
import {useDispatch} from "react-redux"
import {auth} from "./Firebase"
import React, { useState } from 'react'
import { login } from "./features/counter/userSlice"

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [profile, setprofile] = useState("")
    const dispatch = useDispatch()

    const logintoLI=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
        dispatch(login({
            email:userAuth.user.email,
            uid : userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoUrl:userAuth.photoURL
        }))
    }).catch(error=>alert(error))
    }
    const register=()=>{
        if(!name){
            return alert("enter full name")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profile
            })
            .then(()=>{
            dispatch(login({
                email:userAuth.user.email,
                uid : userAuth.user.uid,
                displayName:name,
                photoUrl:profile,
            }));
            });
        }).catch(err=>alert(err.message ))
    };
    return (
        <div className="login">
            <form>
                <input placeholder="full name" value ={name}  onChange={e=>setname(e.target.value)} type="text"/>
                <input placeholder="profile(optional)" value ={profile}  onChange={e=>setprofile(e.target.value)} type="text"/>
                <input placeholder="email" value ={email}  onChange={e=>setemail(e.target.value)} type="email"/>
                <input placeholder="password" value ={password}  onChange={e=>setpassword(e.target.value)} type="password"/>
                <button type="submit" onClick={logintoLI}>Sign in</button>
            </form>
            <p>Not a member?<stong onClick={register}>Register Now</stong></p>
        </div>
    )
}

export default Login
