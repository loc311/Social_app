import "./navBar.scss"
import HomeIcon from '@mui/icons-material/Home';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContex";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  
  const { currentUser, logout} = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Facebook</span>
        </Link>
        <HomeIcon />
       {darkMode? 
            <WbSunnyIcon onClick={toggle}/> 
            : 
            <Brightness2Icon onClick={toggle}
       />}
        <AppsIcon />
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className="user">
        {/* <button onClick={logout}>Logout</button> */}
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
