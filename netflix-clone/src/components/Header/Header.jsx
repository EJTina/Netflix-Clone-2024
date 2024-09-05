import React from 'react'
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import NetflixLogo from "../../assets/images/NetflixLogo.png"

const Header = () => {
  return (
    <div className='header_outer_container'>
    <div className='header_container'>
        <div className='header_left'>
            <ul>
                <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                <li>Netflix</li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className='header_right'>
            { <ul>
                <li><SearchOutlinedIcon /></li>
                <li><NotificationsNoneOutlinedIcon /></li>
                <li><AccountBoxOutlinedIcon /></li>
                <li><ArrowDropDownCircleOutlinedIcon  /></li>
            </ul> }
        </div>
</div> 
</div>
)
}

export default Header



