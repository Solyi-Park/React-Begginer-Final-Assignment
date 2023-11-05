import React from "react";

function App() {
  return (
    <div>
      <div
        style={{
          // backgroundColor: "red",
          maxWidth: "1160px",
          height: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px 0 20px",
          margin: "0 auto",
          border: "1px solid #ddd",
        }}
      >
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          width: "1140px",
          height: "100px",
          margin: "0 auto",
          padding: "0 30px",
          display: "flex",
          // flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4>제목</h4>
          <input
            style={{
              margin: "20px",
              width: "260px",
              height: "38px",
              border: "none",
              borderRadius: "12px",
            }}
            type="text"
          />
          <h4>내용</h4>
          <input
            style={{
              margin: "20px",
              width: "260px",
              height: "38px",
              border: "none",
              borderRadius: "12px",
            }}
            type="text"
          />
        </div>

        <button
          style={{
            backgroundColor: "teal",
            width: "140px",
            height: "40px",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
          }}
        >
          추가하기
        </button>
      </div>
      <div
        style={{
          // backgroundColor: "blue",
          width: "1150px",
          margin: "0 auto",
          padding: "0 25px",
        }}
      >
        <h2>Working.. 🔥</h2>
        <div
          style={{
            // backgroundColor: "red",
            width: "270px",
            height: "145px",
            padding: "25px",
            border: "4px solid teal",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div>
            <h2>리액트 공부하기</h2>
            <p>리액트 기초를 공부해봅시다.</p>
          </div>
          <div style={{
            display: "flex"
          }}>
            <button style={{
              width:"130px",
              height: "40px",
              backgroundColor: "transparent",
              border: "2px solid red",
              borderRadius: "8px",
              marginRight: "10px"
            }}>삭제하기</button>
            <button style={{
              width:"130px",
              height: "40px",
              backgroundColor: "transparent",
              border: "2px solid green",
              borderRadius: "8px",
            }}>완료</button>
          </div>
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "blue",
          width: "1150px",
          margin: "0 auto",
          padding: "0 25px",
        }}
      >
        <h2>Done..! 🎉</h2>
        <div
          style={{
            // backgroundColor: "red",
            width: "270px",
            height: "145px",
            padding: "25px",
            border: "4px solid teal",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div>
            <h2>리액트 공부하기</h2>
            <p>리액트 기초를 공부해봅시다.</p>
          </div>
          <div style={{
            display: "flex"
          }}>
            <button style={{
              width:"130px",
              height: "40px",
              backgroundColor: "transparent",
              border: "2px solid red",
              borderRadius: "8px",
              marginRight: "10px"
            }}>삭제하기</button>
            <button style={{
              width:"130px",
              height: "40px",
              backgroundColor: "transparent",
              border: "2px solid green",
              borderRadius: "8px",
            }}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
