import React from "react";
import "./Main.css";
import Header from "./Header";
import SearchBox from "./SearchBox";
import FirstFeed from "./FirstFeed";
import SecondFeed from "./SecondFeed";
import AsideNav from "./AsideNav";

const obj = {
  memberA: function asdfFunctionNAme() {},
};

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchBox />
        <main>
          <div className="wrapMain">
            <FirstFeed />
            <SecondFeed />
            <AsideNav />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
