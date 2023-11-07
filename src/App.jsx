import React, { useRef, useState } from "react";
import "./App.css";
import "./components/taskSection/TaskSection.css";
import "./components/taskSection/Card.css";
import WorkingCard from "./components/taskSection/WorkingCard";
import DoneCard from "./components/taskSection//DoneCard";
import InputContainer from "./components/inputContainer/InputContainer";

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

  // ADD 버튼 클릭
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
      setTitle(""); // 왜 null은 안되나요..?
      setContent("");

      inputRef.current.focus();
    }
  };

  //Delete 버튼 클릭
  const handleDeleteBtn = (id) => {
    const updateCards = cards.filter((card) => card.id !== id);
    setCards(updateCards);
  };

  // Done 버튼 클릭
  const handleCompleteBtn = (item) => {
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, isDone: "true" } : card;
    });
    setCards(updatedCards);
  };

  // Back to Working 버튼 클릭
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
      <InputContainer
        inputRef={inputRef}
        title={title}
        content={content}
        handleChangeTitle={handleChangeTitle}
        handleChangeContent={handleChangeContent}
        handleAddBtnClick={handleAddBtnClick}
      />
      <div className="taskSection workingSection">
        <h2>Working.. 🔥</h2>
        <div className="cardContainer">
          <WorkingCard
            cards={cards}
            handleDeleteBtn={handleDeleteBtn}
            handleCompleteBtn={handleCompleteBtn}
          />
        </div>
      </div>
      <div className="taskSection doneSection">
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
