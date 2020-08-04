import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navBar">
          <div className="homeIcons">
            <img
              className="iconStyle"
              src="./Images/img/logo.png"
              alt="instaIcon"
            />
            <div className="hLine"></div>
            <img
              className="instaMainImg"
              src="./Images/img/logo_text.png"
              alt="instaMainImg"
            />
          </div>
          <div className="wrapNavTextBar">
            <div className="navTextBarCon">
              <span className="searchImgInText"></span>
              <input className="navTextBar" type="text" placeholder="검색" />
              <span className="searchXBtn"></span>
            </div>
            <div className="searchIconBox">
              <div>
                <span className="searchImg"></span>
                <span className="searchText">검색</span>
              </div>
            </div>
          </div>
          <div className="hrefIcons">
            <img className="home" alt="home" src="./Images/img/home.png" />
            <img className="dmIcon" alt="DM" src="./Images/img/dm.png" />
            <img
              className="iconStyle"
              alt="compass"
              src="./Images/img/explore.png"
            />
            <img
              className="iconStyle"
              alt="heart"
              src="./Images/img/heart.png"
            />
            <img
              className="iconStyle"
              alt="profile"
              src="./Images/img/profile.png"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
