import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Questions } from "./Questions";

const Answerkey = () => {
  const [questions, setQuestions] = useState(Questions);
  return (
    <div>
      <h1>Answer Key</h1>
      <table>
        <tr>
          <td>
            <th>Question No.</th>
          </td>
          <th>Answer</th>
        </tr>
        {questions.map((ques, index) => {
          const { options } = ques;
          const answer = options.filter((optn) => optn.isCorrect);
          // console.log(answer[0].option);
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{answer[0].option}</td>
            </tr>
          );
        })}
      </table>
      <Link to="/dashboard" style={{ color: "red", fontSize: "15px" }}>
        Go Back
      </Link>
    </div>
  );
};

export default Answerkey;
