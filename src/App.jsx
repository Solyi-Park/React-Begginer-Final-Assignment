import React, { useRef, useState } from "react";
import "./App.css";
import DoneCard from "./components/DoneCard";
import WorkingCard from "./components/WorkingCard";

function App() {
  const inputRef = useRef(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Sample task",
      content: "Sample detailed content",
      isDone: "false",
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);

  // 추가하기 버튼 클릭
  const handleAddBtnClick = (e) => {
    const newCard = {
      id: cards.length + 1,
      title,
      content,
      isDone: "false",
    };
    if (title == "") {
      alert("제목을 입력해주세요. ");
      e.preventDefault();
    } else {
      const updateCards = [...cards, newCard].sort((a, b) => b.id - a.id);
      setCards(updateCards);
      e.preventDefault();
      setTitle(""); // 1. 왜 null은 안되나요..?
      setContent("");

      // 2. 리렌더링 될때마다 오토포커스 하는 법?
      inputRef.current.focus();
    }
  };

  //enter키 사용하여 카드 add.. 하려면 추가하는 함수 말고 따로 만들어야 하나..?
  // const handleOnKeyPress = e => {
  //   if (e.key === 'Enter') {
  //     handleOnClick(e);
  // };

  //삭제하기 버튼 클릭
  const handleDeleteBtn = (id) => {
    const updateCards = cards.filter((card) => card.id !== id);
    setCards(updateCards);
  };

  // 완료 버튼 클릭
  const handleCompleteBtn = (item) => {
    // 해당 카드의 status를 변경해준다.
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, isDone: "true" } : card;
    });
    setCards(updatedCards);
  };

  // 취소 버튼 클릭
  const handleCancelBtn = (item) => {
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, isDone: "false" } : card;
    });
    setCards(updatedCards);
  };

  return (
    <div className="TodoList">
      <div className="header">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className="inputContainer">
        <div className="inputFieldContainer">
          <label htmlFor="inputTitle">제목</label>
          <input
            id="inputTitle"
            ref={inputRef}
            value={title}
            onChange={handleChangeTitle}
            className="inputField"
            placeholder="Add a new task!"
            autoFocus
          />
          <label htmlFor="inputContent">내용</label>
          <input
            id="inputContent"
            value={content}
            onChange={handleChangeContent}
            className="inputField"
            placeholder="Enter detailed content."
          />
        </div>
        {/* 3. onClick으로 하는 거랑 뭐가 다른가요..? */}
        <form onSubmit={handleAddBtnClick}>
          <button type="submit" className="addButton">
            ADD{" "}
          </button>
        </form>
      </div>
      <div className="taskSection">
        <h2>Working.. 🔥</h2>
        <div className="cardContainer">
          <WorkingCard
            cards={cards}
            handleDeleteBtn={handleDeleteBtn}
            handleCompleteBtn={handleCompleteBtn}
          />
        </div>
      </div>
      <div className="taskSection">
        <h2>Done..! 🎉</h2>
        <div className="cardContainer">
          <DoneCard
            cards={cards}
            handleDeleteBtn={handleDeleteBtn}
            handleCancelBtn={handleCancelBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
