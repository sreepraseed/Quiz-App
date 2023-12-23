import React, { useState } from 'react';
import './App.css';

const questions = [

  {
    question: 'Which programming language is known for its "write once, run anywhere" philosophy?',
    options: ['Java', 'Python', 'C++', 'JavaScript'],
    correctAnswer: 'Java',
  },
  {
    question: 'In Python, how do you comment a single line?',
    options: ['#', '//', '/*', '--'],
    correctAnswer: '#',
  },
  {
    question: 'What does CSS stand for?',
    options: ['Counter Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
  },
  {
    question: 'Which framework is used for front-end development and includes a responsive grid system?',
    options: ['React', 'Angular', 'Vue', 'Bootstrap'],
    correctAnswer: 'Bootstrap',
  },
  {
    question: 'What year was JavaScript first introduced?',
    options: ['1995', '2000', '2010', '1985'],
    correctAnswer: '1995',
  },
  {
    question: 'Which of the following is not a Java keyword?',
    options: ['int', 'boolean', 'mutable', 'volatile'],
    correctAnswer: 'mutable',
  },
  {
    question: 'What is the primary purpose of the "git pull" command?',
    options: ['Push changes to the remote repository', 'Fetch changes from the remote repository', 'Create a new branch', 'View commit history'],
    correctAnswer: 'Fetch changes from the remote repository',
  },
  {
    question: 'Which property in CSS is used to set the spacing between lines of text?',
    options: ['line-spacing', 'letter-spacing', 'text-spacing', 'line-height'],
    correctAnswer: 'line-height',
  },
  {
    question: 'What does the acronym API stand for?',
    options: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Process Interface', 'Automated Programming Interface'],
    correctAnswer: 'Application Programming Interface',
  },
  {
    question: 'How many bytes are there in one kilobyte?',
    options: ['1024', '1000', '1023', '10737418'],
    correctAnswer: '1024'
  }
  // Add more questions as needed
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    if (showResult) {
      // If result is already shown, reset the quiz
      resetQuiz();
      return;
    }

    setSelectedOption(option);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setSelectedOption(null);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }, 1000);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result-container">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <p className={`feedback ${selectedOption === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect'}`}>
              {selectedOption === questions[currentQuestion].correctAnswer
                ? 'Correct!'
                : `Incorrect! The correct answer is: ${questions[currentQuestion].correctAnswer}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;


