import React from 'react';
import SidebarOption from './SidebarOption';
import './NavBar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const NavBar = () => {
    return (
        <div className="navBar" > 
            <SidebarOption className="bar" active Icon={HomeIcon} />
            <SidebarOption Icon={SearchIcon}  />
            <SidebarOption Icon={NotificationsNoneIcon}  />
            <SidebarOption Icon={MailOutlineIcon}  />
        </div>
    )
}

export default NavBar
