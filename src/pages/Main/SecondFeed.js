import React from "react";

class SecondFeed extends React.Component {
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
          <img className="feedStyle" src="./Images/img/me.jpeg" alt="feedImg" />
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
              src="./Images/img/dlwlrma.png"
              alt="profile"
            />
            <div>
              <a href="">dlwlrma</a>님
              <a>
                외 <span className="peopleCount">971</span>명
              </a>
              이 좋아합니다.
            </div>
          </div>
          <div>
            <ul className="commentListContainer">
              <div className="feedContents">
                <a href="">ye_heumheummm</a>고래야 안녕ㅎㅎ
              </div>
              <li>
                <a href="">dlwlrma</a>맥도날드??
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
                <a href="">yeonukhwang</a>11기가 역대급이지 ㅋㅋㅋㅋ
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
            <div className="feedTime">12시간전</div>
          </div>
          <form className="feedComment" type="submit">
            <textarea
              className="commentText"
              type="textarea"
              placeholder="댓글 달기..."
            ></textarea>
            <button className="commentButton">게시</button>
          </form>
        </article>
      </section>
    );
  }
}

export default SecondFeed;
