import React from "react";

class FirstFeed extends React.Component {
  render() {
    return (
      <section className="feeds">
        <article>
          <div className="feedsTop">
            <div className="wrapProfileL">
              <img src="./Images/img/myprofile.png" alt="profileImg" />
              <div>
                <a href="">ye_heumheummm</a>
                <p>최예흠</p>
              </div>
            </div>
            <img class="etcBtn" src="./Images/img/more.png" alt="else" />
          </div>
          <img className="feedStyle" src="./Images/img/dog.png" alt="feedImg" />
          <div className="feedIcons">
            <div className="alignCenter">
              <img
                className="iconStyle bigHeart colorHeart"
                src="./Images/img/heart.png"
                alt="heart"
              />
              <img
                className="iconStyle"
                src="./Images/img/comment.png"
                alt="comment"
              />
              <img className="dmIcon" src="./Images/img/dm.png" alt="comment" />
            </div>
            <img
              className="iconStyle"
              src="./Images/img/bookmark.png"
              alt="bookmark"
            />
          </div>
          <div className="feedLike">
            <img
              class="feedLikeBtn"
              src="./Images/img/bsjun.png"
              alt="profile"
            />
            <div>
              <a>bn_sj2013</a>님
              <a>
                외 <span className="peopleCount">928</span>명
              </a>
              이 좋아합니다.
            </div>
          </div>
          <div>
            <ul className="commentListContainer">
              <div className="feedContents">
                <a>ye_heumheummm</a>두부야 안뇨오옹
              </div>
              <li>
                <a>bn_sj2013</a>와...진짜 스피츠 너무 귀여워 ㅠㅠ
                <span className="commentIcons">
                  <img
                    className="commentHeart colorHeart"
                    src="./Images/img/heart.png"
                    alt="heart"
                  />
                  <span className="searchXBtn"></span>
                </span>
              </li>
              <li>
                <a href="">sanghun</a>솜사탕같다
                <span className="commentIcons">
                  <img
                    className="commentHeart colorHeart"
                    src="./Images/img/heart.png"
                    alt="heart"
                  />
                  <span className="searchXBtn"></span>
                </span>
              </li>
            </ul>
            <div className="feedTime">6시간전</div>
          </div>
          <form className="feedComment" type="submit">
            <textarea
              className="commentText"
              placeholder="댓글 달기..."
            ></textarea>
            <button className="commentButton">게시</button>
          </form>
        </article>
      </section>
    );
  }
}

export default FirstFeed;
