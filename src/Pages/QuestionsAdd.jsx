import React, { useState } from "react";
import axios from "axios";

const QuestionsAdd = () => {
  const [Question, setQuestion] = useState();
  const [AllQuestions, setAllQuestions] = useState();

  const SaveQuestion = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/question/addQuestions`,
      {
        question: Question,
      }
    );

    alert(res.data.code);
  };

  const getAllQuestions = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/api/v1/question/getQuestions`
    );

    setAllQuestions(res.data.questions);
  };

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
        <h2>Add Questions</h2>

        <div style={{ paddingTop: "30px" }}>
          <div>
            <span>Enter Question : </span>
            <input
              type="text"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
          </div>
        </div>
        <button style={{ marginTop: "20px" }} onClick={SaveQuestion}>
          Add Question
        </button>
        <br />
        <button style={{ marginTop: "20px" }} onClick={getAllQuestions}>
          Get All Questions
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        {AllQuestions &&
          AllQuestions.map((question, key) => {
            return <div key={key}>{question.question}</div>;
          })}
      </div>
    </div>
  );
};

export default QuestionsAdd;
