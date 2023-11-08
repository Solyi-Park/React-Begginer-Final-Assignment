import React from "react";

export default function TodoList({
    cards, handleDeleteBtn,handleCompleteCancelBtn,listIsDone,
}) {
  return (
    <>
      <h2>{listIsDone ? "Done..!🎉" : "working..!🔥"}</h2>
      <div className="cardContainer">
        {cards
          .filter((item) => item.isDone === listIsDone)
          .map((item) => {
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
                    Delete
                  </button>
                  <button
                    onClick={() =>handleCompleteCancelBtn(item)}
                    className="cardButton completeButton"
                  >
                    {listIsDone ? "Back to working!" : "Done!" }
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
