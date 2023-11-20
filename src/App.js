
// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";


function App() {
  // @@@ 여긴 서버임 서버에서 가져온 변수임 @@@ 단순 선언 아님 @@@
  let mainTitle = "INSHAKE";
  let [postTitle, setPostTitle] = useState([]);
  let [likes, setLikes] = useState([]);
  let [modal, setModal] = useState(0)
  let [modalState, setModalState] = useState(0)
  let [newPost, setNewPost] = useState('')
  let [postDate, setPostDate] = useState([])


  // @@@ 여긴 서버임 서버에서 가져온 변수임 @@@ 단순 선언 아님 @@@

  // 함수
  // const onReset = (e) => {
  //   setText("");
  // };
  // 함수
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

      {/* 새로운 글 발행 기능 */}
      <input value={newPost} onkeydown='checkSpacebar();' onChange={(e)=>{
        setNewPost(e.target.value)
        }}></input>
      <button onClick={()=>{
        if (newPost.trim() === '') {
          alert('내용을 입력하세요');
          setNewPost(''); // 입력한 글 초기화
        } else {
          let copy = [...postTitle];
          copy.push(newPost);
          setPostTitle(copy);

          let copy2 = [...likes];
          copy2.push(0);
          setLikes(copy2);

          const currentDate = new Date().toLocaleDateString(); // 현재 날짜를 문자열로 변환
          let copy3 = [...postDate];
          copy3.push(currentDate);
          setPostDate(copy3);

          setNewPost(''); // 입력한 글 초기화
        }
      }}>새로운 글 발행하기</button>


      {/* 발행 글 목록 UI */}
      {
        postTitle.map((a, n)=>{
          return (
            <div className="post-list" onClick={()=>{ modal === 0 ? setModal(1) : setModal(0); setModalState(n) }}>
              <h4>{postTitle[n]} 
              <span onClick={() => setLikes(prevLikes => {
                const updatedLikes = [...prevLikes];
                updatedLikes[n] += 1;
                return updatedLikes;
              })}>👍</span>
                <span>{ likes[n] }</span>
                <button onClick={ ()=>{
                  // 쉘로우, 딥카피
                  const copy = [...postTitle];
                  copy[n] = '게시물 가려짐';
                  setPostTitle(copy)
                  }}>게시물 가리기</button>
                  {/* 글 삭제 기능 */}
                  <button onClick={()=>{
                    let copy = [...postTitle];
                    copy.splice(n, 1)
                    setPostTitle(copy) 
                  }}>게시물 삭제</button>
              </h4>
              <p>발행날짜 : { postDate[n] }</p>
            </div>
          )
        })
      }
      
  

      {/* 글 상세 페이지 모달창 */}
      {
        modal === 1 ? <PostModal postDate = {postDate} postTitle = {postTitle} setPostTitle = {setPostTitle}  modalState = {modalState} /> : null
      }
      
      


    </div>
  );
}


function PostModal(props){
  return (
    <div className="post-modal">
      <h4>{ props.postTitle[props.modalState] }</h4>
      <p>발행날짜 : { props.postDate }</p>
      <p>상세 내용</p>
      {/* <button onClick={ ()=>{
        const copy1 = [...props.postTitle];
        copy1[0] = '게시물 가려짐';
        props.setPostTitle(copy1)}} >글제목 수정
      </button> */}
    </div>
  )
}

export default App;
