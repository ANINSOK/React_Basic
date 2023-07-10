
// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";


function App() {
  // @@@ 여긴 서버임 서버에서 가져온 변수임 @@@ 단순 선언 아님 @@@
  let mainTitle = "INSHAKE";
  let [postTitle, changePostTitle] = useState(["글제목1", "글제목2", "글제목3"]);
  let [postLikes, pushLikes] = useState(0);
  let [modal, setModal] = useState(0)
  // @@@ 여긴 서버임 서버에서 가져온 변수임 @@@ 단순 선언 아님 @@@

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
      <div className="post-list" onClick={()=>{ modal === 0 ? setModal(1) : setModal(0) }}>
        <h4>{postTitle[0]} 
          <span onClick={ () => { pushLikes(postLikes+1) } }> 👍 </span>
          <span>{ postLikes }</span>
          <button onClick={ ()=>{
            // 쉘로우, 딥카피
            let copy = [...postTitle];
            copy[0] = '게시물 가려짐';
            changePostTitle(copy)
            }}>게시물 가리기</button>
        </h4>
        <p>발행날짜</p>
      </div>
      <div className="post-list" onClick={()=>{ modal === 0 ? setModal(1) : setModal(0) }}>
        <h4>{postTitle[1]}</h4>
        <p>발행날짜</p>
      </div>
      <div className="post-list">
        <h4>{postTitle[2]}</h4>
        <p>발행날짜</p>
      </div>

      {/* 글 상세 페이지 모달창 */}
      {
        modal === 1 ? <PostModal/> : null
      }
      
    </div>
  );
}

function PostModal(){
  return (
    <div className="post-modal">
      <h4>제목</h4>
      <p>발행날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
