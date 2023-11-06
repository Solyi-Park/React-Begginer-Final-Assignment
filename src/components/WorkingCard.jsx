const WorkingCard = ({ cards, handleDeleteBtn, handleCompleteBtn }) => {
    return cards.map((item) => {
      return item.isDone === "false" ? (
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
    });
  };

  export default WorkingCard;