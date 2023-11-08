import "./inputContainer.css"
const InputContainer = ({
  inputRef,
  title,
  content,
  handleChangeTitle,
  handleChangeContent,
  handleAddBtnClick
}) => {
  return (
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
          ADD</button>
      </form>
    </div>
  );
};

export default InputContainer;
