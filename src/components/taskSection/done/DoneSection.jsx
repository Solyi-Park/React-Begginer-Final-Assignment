import DoneCard from "./DoneCard";
import "../TaskSection.css"
const DoneSection = ({ cards, handleDeleteBtn, handleCancelBtn }) => {
  return (
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
  );
};

export default DoneSection;
