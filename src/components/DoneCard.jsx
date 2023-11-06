const DoneCard = ({ cards, handleDeleteBtn, handleCancelBtn }) => {
    return cards.map((item) => {
      return item.isDone === "true" ? (
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
              onClick={() => handleCancelBtn(item)}
              className="cardButton cancelButton"
            >
              Back to working
            </button>
          </div>
        </div>
      ) : null;
    });
  };
  
  export default DoneCard;