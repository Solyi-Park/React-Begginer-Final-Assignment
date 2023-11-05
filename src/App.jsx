import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: "Sample task", content: "Sample detailed content" },
  ]);
  const [done, setDone] = useState([
    { id: 1, title: " task", content: "Sample detailed content" },
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
    // 클릭하면 cards에서 해당 카드를 지운다
    const updateCards = cards.filter((card) => card.id !== item.id);
    setCards(updateCards);
    // done section에 카드를 붙인다.
    const isDone = {
      id: done.length + 1,
      title: item.title,
      content: item.content,
    };
      const moveToDone = [...done, isDone];
      setDone(moveToDone);
  };

  // 취소 버튼 클릭
  const handleCancelBtn = (clickedItem) => {
    // 클릭하면 cards에서 해당 카드를 지운다
    const updateDoneCards = done.filter((doneItem) => doneItem.id !== clickedItem.id);
    setDone(updateDoneCards);
    // done section에 카드를 붙인다.
    const notDone = {
      id: done.length + 1,
      title: clickedItem.title,
      content: clickedItem.content,
    };
      const moveToWorking = [...cards, notDone];
      setCards(moveToWorking);
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
                  <button
                    onClick={() => handleDeleteBtn(item.id)}
                    className="cardButton deleteButton"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => handleCompleteBtn(item)}
                    className="cardButton completeButton"
                  >
                    완료
                  </button>
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
          {done.map((item) => {
            return (
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
                    삭제하기
                  </button>
                  <button
                    onClick={()=> handleCancelBtn(item)}
                    className="cardButton cancelButton"
                  >
                    취소
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
