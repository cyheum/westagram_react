import React from "react";
import StoryRecommendProfiles from "./StoryRecommendProfiles";

const userData = {
  storyProfileList: [
    {
      profileImageSrc: "./Images/img/yeonuk.png",
      iD: "yeonukhwang",
      lastLoginTime: "1분전",
    },
    {
      profileImageSrc: "./Images/img/sanghun.png",
      iD: "sanghun",
      lastLoginTime: "28분전",
    },
    {
      profileImageSrc: "./Images/img/dlwlrma.png",
      iD: "dlwlrma",
      lastLoginTime: "6시간전",
    },
    {
      profileImageSrc: "./Images/img/bsjun.png",
      iD: "bn_sj2013",
      lastLoginTime: "7시간전",
    },
  ],
  recommendProfileList: [
    {
      profileImageSrc: "./Images/img/gnlcks.png",
      iD: "you_hchan",
      name: "유휘찬",
    },
    {
      profileImageSrc: "./Images/img/ckdtlr.png",
      iD: "rnjsckdtlr_dd",
      name: "권창식",
    },
    {
      profileImageSrc: "./Images/img/tkdrn.png",
      iD: "ohsan9_539",
      name: "오상구",
    },
    {
      profileImageSrc: "./Images/img/profile.png",
      iD: "ma_sang_1",
      name: "마상원",
    },
  ],
};

class AsideNav extends React.Component {
  render() {
    return (
      <div className="asideWrap">
        <aside className="main-right">
          <div className="wrapProfileR">
            <img alt="profileImg" src="./Images/img/myprofile.png" />
            <div>
              <a id="yourName">ye_heumheummm</a>
              <p>최예흠</p>
            </div>
          </div>
          <div className="storyRecomWrap">
            <div className="storyRecomStyle">
              <div>스토리</div>
              <div>
                <a className="storyAll">모두 보기</a>
              </div>
            </div>
            {userData.storyProfileList.map((userInfo) => (
              <StoryRecommendProfiles
                key={userInfo.iD}
                profileImageSrc={userInfo.profileImageSrc}
                iD={userInfo.iD}
                description={userInfo.lastLoginTime}
              />
            ))}
          </div>
          <div className="storyRecomWrap">
            <div className="storyRecomStyle">
              <div>회원님을 위한 추천</div>
              <div>
                <a className="storyAll">모두 보기</a>
              </div>
            </div>
            {userData.recommendProfileList.map((userInfo) => (
              <StoryRecommendProfiles
                key={userInfo.iD}
                profileImageSrc={userInfo.profileImageSrc}
                iD={userInfo.iD}
                description={userInfo.name}
              />
            ))}
          </div>
          <div className="copyRight">
            instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 .<br />
            해시태그 . 언어
            <br />
            <br />© 2020 INSTAGRAM
          </div>
        </aside>
      </div>
    );
  }
}

export default AsideNav;
