import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Sample task",
      content: "Sample detailed content",
      status: "working",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);

  // 추가하기 버튼 클릭
  const handleAddBtnClick = () => {
    const newCard = {
      id: cards.length + 1,
      title,
      content,
      status: "working",
    };
    if (title == "") {
      alert("제목을 입력해주세요. ");
    } else {
      const updateCards = [...cards, newCard];
      setCards(updateCards);
      console.log(updateCards);
      // alert("Added new task!");
    }
  };

  //삭제하기 버튼 클릭
  const handleDeleteBtn = (id) => {
    const updateCards = cards.filter((card) => card.id !== id);
    setCards(updateCards);
  };

  // 완료 버튼 클릭
  const handleCompleteBtn = (item) => {
    // 해당 카드의 status를 변경해준다.
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, status: "done" } : null;
    });
    setCards(updatedCards);
  };

  // 취소 버튼 클릭
  const handleCancelBtn = (item) => {
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, status: "working" } : null;
    });
    setCards(updatedCards);
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
        <button onClick={handleAddBtnClick} className="addButton">
          ADD
        </button>
      </div>
      <div className="taskSection workingSection">
        <div className="workingSectionLabel">
          <h2>Working.. 🔥</h2>
        </div>
        <div className="cardContainer">
          {cards.map((item) => {
            return item.status === "working" ? (
              <div key={item.id} className="card">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteBtn(item.id)}
                    className="cardButton deleteButton"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleCompleteBtn(item)}
                    className="cardButton completeButton"
                  >
                    Done!
                  </button>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <div className="taskSection doneSection">
        <div className="doneSectionLabel">
          <h2>Done..! 🎉</h2>
        </div>
        <div className="cardContainer">
          {cards.map((item) => {
            return item.status === "done" ? (
              <div className="card">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteBtn(item.id)}
                    className="cardButton deleteButton"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleCancelBtn(item)}
                    className="cardButton cancelButton"
                  >
                    Back to working
                  </button>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
