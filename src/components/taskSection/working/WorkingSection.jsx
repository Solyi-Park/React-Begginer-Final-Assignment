import WorkingCard from "./WorkingCard";
import "../TaskSection.css"
const WorkingSection = ({ cards, handleDeleteBtn, handleCompleteBtn }) => {
  return (
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
  );
};

export default WorkingSection;
