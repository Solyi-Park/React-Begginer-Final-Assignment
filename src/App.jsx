import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: "Sample task", content: "Sample detailed content" },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);
  const handleAddButtonClick = () => {
    const newCard = {
      id: cards.length + 1,
      title,
      content,
    };
    const cardUpdate = [...cards, newCard];
    setCards(cardUpdate);
    console.log(cardUpdate);
    alert("Added new task!");
  };

  return (
    <div>
      <div className="header">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className="inputContainer">
        <div className="inputFieldContainer">
          <h4>제목</h4>
          <input
            value={title}
            onChange={handleChangeTitle}
            className="inputField"
            placeholder="Add a new task!"
          />
          <h4>내용</h4>
          <input
            value={content}
            onChange={handleChangeContent}
            className="inputField"
            placeholder="Enter detailed content."
          />
        </div>
        <button onClick={handleAddButtonClick} className="addButton">
          추가하기
        </button>
      </div>
      <div className="taskSection workingSection">
        <div className="workingSectionLabel">
          <h2>Working.. 🔥</h2>
        </div>
        <div className="cardContainer">
          {cards.map((item) => {
            return (
              <div key={item.id} className="card">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
                <div>
                  <button className="cardButton deleteButton">삭제하기</button>
                  <button className="cardButton completeButton">완료</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="taskSection doneSection">
        <div className="doneSectionLabel">
          <h2>Done..! 🎉</h2>
        </div>
        <div className="cardContainer">
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
    </div>
  );
}

export default App;
