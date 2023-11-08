import React, { useRef, useState } from "react";
import "./App.css";
import "./components/todoList/TaskSection.css";
import "./components/todoList/Card.css";
import InputContainer from "./components/input";
import TodoList from "./components/todoList";
import uuid from "react-uuid";

function App() {
  const inputRef = useRef(null);
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: "Sample task",
      content: "Sample detailed content",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);

  // ADD 버튼 클릭
  const handleAddBtnClick = (e) => {
    const newCard = {
      id: uuid(),
      title,
      content,
      isDone: false,
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

  // Done / Back to Working 버튼 클릭
  const handleCompleteCancelBtn = (item) => {
    const updatedCards = cards.map((card) => {
      return card.id === item.id ? { ...card, isDone: !card.isDone } : card;
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
      <TodoList cards={cards} 
      handleDeleteBtn={handleDeleteBtn} 
      handleCompleteCancelBtn={handleCompleteCancelBtn} 
      listIsDone={false}/>
      <TodoList cards={cards} 
      handleDeleteBtn={handleDeleteBtn} 
      handleCompleteCancelBtn={handleCompleteCancelBtn} 
      listIsDone={true}/>
      </div>
      </div>
  );
}

export default App;
