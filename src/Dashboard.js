import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Questions } from "./Questions";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Dashboard = () => {
  const [score, setScore] = useState(0);
  const [ques, setQues] = useState(Questions);
  const [result, setResult] = useState(false);
  const [index, setIndex] = useState(0);
  console.log(index);
  const singleQues = ques[index];
  const navigate = useNavigate();
  const display = (indx) => {
    if (singleQues.options[indx].isCorrect) {
      singleQues.isMarked = true;
      singleQues.myAns = 1;
      singleQues.id = indx;
      setQues(ques);
      console.log(singleQues);
      console.log(singleQues.options[indx].isCorrect);
    } else {
      console.log(singleQues.options[indx].isCorrect);
      singleQues.isMarked = true;
      singleQues.myAns = 0;
      singleQues.id = indx;
      setQues(ques);
    }
    console.log(singleQues.isMarked, singleQues.myAns, singleQues.id);
  };
  const nextQues = () => {
    if (index < ques.length - 1) {
      setIndex(index + 1);
      setQues(ques);
    }
  };
  const prevQues = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const redirect = () => {
    setIndex(0);
    setResult(true);
    calScore();
    navigate("/dashboard");
  };
  const redirectToHome = () => {
    setIndex(0);
    ques.map((que) => {
      que.isMarked = false;
      que.myAns = 0;
      que.id = null;
      return null;
    });
    console.log(ques);
    setScore(0);
    setResult(false);
    navigate("/");
  };

  const calScore = () => {
    let total = 0;
    ques.map((x) => {
      if (x.myAns) {
        total = total + 1;
        console.log(x);
      }
    });
    setScore(total);
  };
  return (
    <>
      <h1>Quizz</h1>
      <div className="parent-container">
        <div className="sidebar">
          <table className="table">
            {ques.map((quest, index) => {
              // console.log(quest);
              return (
                <tr>
                  <td>
                    <button onClick={() => setIndex(index)}>
                      Q.{index + 1}
                    </button>
                  </td>
                  <td
                    style={
                      quest.isMarked ? { color: "rgb(13, 247, 13)" } : null
                    }
                  >
                    {quest.isMarked ? "Attempted" : "Not Attempted"}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="container">
          <h2>
            Question {index + 1}
            {result && (
              <span>
                Score: {score}/{ques.length}
              </span>
            )}
          </h2>
          <div key={index} className="box">
            <div className="ques-div">
              <p>{singleQues.question}?</p>
            </div>
            <div>
              {singleQues.options.map((choice, indx) => {
                return (
                  <div
                    key={indx}
                    className="option-div"
                    style={
                      result
                        ? choice.isCorrect
                          ? { backgroundColor: "rgb(11, 184, 11)" }
                          : singleQues.id === indx
                          ? { backgroundColor: "red" }
                          : { backgroundColor: "#0077b6" }
                        : { backgroundColor: "#0077b6" }
                    }
                  >
                    <input
                      type="radio"
                      id={choice.option}
                      name="fav_language"
                      value={choice.option}
                      onClick={(e) => display(indx)}
                      checked={
                        singleQues.isMarked && singleQues.id === indx
                          ? `checked`
                          : null
                      }
                    />
                    <label htmlFor={choice.option}>{choice.option}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="btn-container">
            <button onClick={prevQues}>
              {index > 0 ? <FaChevronLeft className="icon" /> : null}
            </button>
            <button onClick={nextQues}>
              {index < ques.length - 1 ? (
                <FaChevronRight className="icon" />
              ) : null}
            </button>
          </div>
          <div>
            {result ? (
              <Link to="/answers" id="answer-key">
                Answers
              </Link>
            ) : null}
            {result === false ? (
              <button className="end-quiz" onClick={redirect}>
                View Score
              </button>
            ) : (
              <button className="end-quiz" onClick={redirectToHome}>
                End Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
