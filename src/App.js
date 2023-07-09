// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  // 서버에서 변수 가져왔다 치고, 여긴 서버에서 받는 정보임@@@ 단순 선언 아님@@@
  let mainTitle = "INSHAKE";
  let [postTitle] = useState(["글제목1", "글제목2", "글제목3"]);

  return (
    <div className="App">
      {/* 상단 메뉴 */}
      <div className="nav-bar">
        <h4>INSHAKE'S BLOG</h4>
      </div>
      <div>
        <h1>{ mainTitle }</h1>
      </div>

      {/* 발행 글 목록 UI */}
      <div className="post-list">
        <h4>{postTitle[0]}</h4>
        <p>발행날짜</p>
      </div>
      <div className="post-list">
        <h4>{postTitle[1]}</h4>
        <p>발행날짜</p>
      </div>
      <div className="post-list">
        <h4>{postTitle[2]}</h4>
        <p>발행날짜</p>
      </div>
    </div>


  );
}

export default App;
