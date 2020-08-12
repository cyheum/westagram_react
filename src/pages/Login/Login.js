import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
    };
  }

  changeEventHandler = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  isIdPwInput() {
    if (
      this.state.id.length > 0 &&
      this.state.id.includes("@") &&
      this.state.pw.length > 5
    ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <section className="wrapsection">
          <article className="wrapArticle">
            <img
              className="iphoneImg"
              alt="iphoneImg"
              src="/Images/img/instaMainImg1.png"
            />
            <div className="wrapLogin">
              <div className="wrapImg">
                <img
                  className="instaImg"
                  alt="instaLogo"
                  src="/Images/img/logo_text.png"
                />
              </div>
              <form className="wrapTexts" onChange={this.changeEventHandler}>
                <input
                  className="loginTextbox loginidText"
                  type="text"
                  name="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="loginTextbox loginpwText"
                  type="password"
                  name="pw"
                  placeholder="비밀번호"
                />
                <button
                  className="loginButton"
                  disabled={this.isIdPwInput()}
                  type="button"
                >
                  로그인
                </button>
              </form>
              <div id="forgetPw">
                <a href="login.html">비밀번호를 잊으셨나요?</a>
              </div>
            </div>
          </article>
        </section>
        <script src="js/login.js"></script>
      </div>
    );
  }
}

export default Login;
