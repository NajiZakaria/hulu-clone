import React from 'react'
import HomeIcon from "@material-ui/icons/Home"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import LiveTvIcon from "@material-ui/icons/LiveTv"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import SearchIcon from "@material-ui/icons/Search"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header_icons">
                <div className="header_icon header_icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header_icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header_icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header_icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header_icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header_icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>   
            </div>
            <img src="https://www.hulu.com/static/hitch/s3/2020-08/Hulu_Logo-01_newgreen.png" alt=""/>
        </div>
    )
}

export default Header
