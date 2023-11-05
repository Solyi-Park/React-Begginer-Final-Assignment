import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className="inputContainer">
        <div className="inputFieldContainer">
          <h4>제목</h4>
          <input className="inputField" type="text"  placeholder="Add a new task"/>
          <h4>내용</h4>
          <input className="inputField" type="text" placeholder="detail"/>
        </div>
        <button className="addButton">추가하기</button>
      </div>
      <div className="taskSection">
        <h2>Working.. 🔥</h2>
        <div className="card">
          <div>
            <h2>리액트 공부하기</h2>
            <p>리액트 기초를 공부해봅시다.</p>
          </div>
          <div>
            <button className="cardButton deleteButton">삭제하기</button>
            <button className="cardButton completeButton">완료</button>
          </div>
        </div>
      </div>
      <div className="taskSection">
        <h2>Done..! 🎉</h2>
        <div className="card">
          <div>
            <h2>리액트 공부하기</h2>
            <p>리액트 기초를 공부해봅시다.</p>
          </div>
          <div>
            <button className="cardButton deleteButton">삭제하기</button>
            <button className="cardButton cancelButton">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
