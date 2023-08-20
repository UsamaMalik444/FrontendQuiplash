import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Answers = () => {
  const location = useLocation();
  const data = location.state;
  // console.log(data.data.lobby.rounds, "sssssssss");
  console.log(data, "sssssssss");

  const [Answer, setAnswer] = useState();
  const [round, setRound] = useState();
  const [loop, setloop] = useState();
  const [playerId, setPlayerId] = useState();

  const submitAnswer = () => {};

  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "300px",
          border: "2px solid",
          marginTop: "100px",
          marginLeft: "500px",
        }}>
        <h2>Question</h2>
        <div style={{ paddingTop: "10px" }}>
          <h3>saasd</h3>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <div>
            <span>Answer : </span>
            <input
              type="text"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>
        </div>
        <button style={{ marginTop: "20px" }} onClick={submitAnswer}>
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Answers;
