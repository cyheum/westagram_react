import React, { Component } from "react";
import "./CommonPage.scss";

class CommonPage1 extends Component {
  render() {
    return (
      <section className="CommonPage">
        <div className="WrapMainLogo">
          <img
            className="mainLogoImg"
            alt="mainLogo"
            src="/images/img/logo_text.png"
          />
        </div>
        <div className="mainProfileImgContainer">
          <div>
            <img
              className="mainProfileImg"
              alt="yeheum"
              src="/images/img/dog.png"
            />
            <img
              className="mainProfileImg"
              alt="taegyu"
              src="/images/img/me.jpeg"
            />
          </div>
          <div>
            <img
              className="mainProfileImg"
              alt="seungha"
              src="/images/img/dog.png"
            />
            <img
              className="mainProfileImg"
              alt="gyuyoung"
              src="/images/img/me.jpeg"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CommonPage1;
