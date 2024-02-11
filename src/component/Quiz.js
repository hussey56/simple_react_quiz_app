import React, { useEffect, useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import '../css/index.css'
// const dquestions = [
//     {
//       question: 'What is the capital of France?',
//       answers: ['Paris', 'Madrid', 'Rome', 'Berlin'],
//       correctAnswer: 0,
//     },
//     {
//       question: 'What is the largest planet in our solar system?',
//       answers: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
//       correctAnswer: 0,
//     },
//     {
//       question: 'What is the smallest country in the world?',
//       answers: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
//       correctAnswer: 0,
//     },
//     {
//       question: 'What is the Pakistan capital city?',
//       answers: ['Islamabad', 'Monaco', 'Karachi', 'Liechtenstein'],
//       correctAnswer: 0,
//     }
//     // more questions...
//   ];
  
const Quiz = () => {
  const randomQuestions =[
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Jupiter", "Venus", "Mars"],
      correctAnswer: 1,
    },
    {
      question: "Which city hosted the 2020 Summer Olympics?",
      answers: ["Tokyo", "Rio de Janeiro", "London", "Beijing"],
      correctAnswer: 0,
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Au", "Ag", "Pt", "Cu"],
      correctAnswer: 0,
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: 0,
    },
    {
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: ["Jane Austen", "Charlotte Brontë", "George Eliot", "Mary Shelley"],
      correctAnswer: 0,
    },
    {
      question: "What is the smallest country in the world by land area?",
      answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: 0,
    },
    {
      question: "What is the Mona Lisa a painting of?",
      answers: ["A landscape", "A historical event", "A religious figure", "A woman"],
      correctAnswer: 3,
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Melbourne", "Sydney", "Canberra", "Perth"],
      correctAnswer: 2,
    },
    {
      question: "What is the main ingredient in hummus?",
      answers: ["Chickpeas", "Lentils", "Beans", "Potatoes"],
      correctAnswer: 0,
    },
    {
      question: "What is the national animal of China?",
      answers: ["Giant panda", "Dragon", "Tiger", "Monkey"],
      correctAnswer: 0,
    },
  ];
 const [modName,setModName] = useState('Quiz')
  const [questions,setQuestion] = useState(randomQuestions)
  const header = useNavigate()
    const [result,showResult] = useState(false);
    const [marks,showMarks]= useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));

  const handleAnswerClick = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handlePreviousButtonClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextButtonClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishButtonClick = async () => {
    const usertoken = localStorage.getItem('loginStd')
    // Calculate score and do whatever else you need to do
    const score = await userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    header(`/result?stdid=${usertoken}&score=${score}&noq=${questions.length}&md=${modName}`)
   showMarks(score);
   showResult(true)
  };
const Restart = ()=>{
    showResult(false)
    showMarks(0)
    setUserAnswers(new Array(questions.length).fill(null))
    setCurrentQuestion(0)
}
useEffect(()=>{
  Restart();
},[]);
  return (

    
    <div className="quiz">
      {questions.length > 0 && <>
        {result===false &&<>
      <div className="question-section">
        <div className="question-count">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            className={`answer-button ${userAnswers[currentQuestion] === index ? 'selected' : 'cbutton'}`}
            onClick={() => handleAnswerClick(index)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="button-section">
        {currentQuestion > 0 && (
          <button className="previous-button" onClick={handlePreviousButtonClick}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button className="next-button" onClick={handleNextButtonClick}>
            Next
          </button>
        ) : (
          <button className="finish-button" onClick={handleFinishButtonClick}>
            Finish
          </button>
        )}
     
        {/* <Link to='/Accounts'>Back to Home</Link> */}
      </div>
      </>
      }
      {result===true &&<>
      {/* <Result score={marks}/> */}
      <h2>Your Score is {marks}</h2>
      {/* <button className="finish-button" onClick={Restart}>Restart</button> */}
      <button className="finish-button" onClick={Restart}>Retry</button>
      </>}
      </>}
    </div>
   

  );
};

export default Quiz;
