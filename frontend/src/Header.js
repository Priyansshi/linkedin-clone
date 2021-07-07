import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import { logout } from "./features/counter/userSlice";
import { selectUser } from "./features/counter/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutapp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <LinkedInIcon className="icon" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header_right">
        <HomeIcon />
        <PeopleAltIcon />
        <WorkIcon />
        <MessageIcon />
        <NotificationsIcon />
        <Avatar className="avatar"  src={user?.photoUrl}  onClick={logoutapp}>
        {user?.email[0]}
        </Avatar>
      </div>
    </div>
  );
}

export default Header;
