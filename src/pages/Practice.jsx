import { useState, useEffect } from "react";

export const Practice = () => {
  const [questions, setQuestions] = useState({});
  const [examType, setExamType] = useState(""); // Exam Type (WAEC, NECO, JAMB)
  const [subject, setSubject] = useState("");  // Selected Subject
  const [currentIndex, setCurrentIndex] = useState(0); // Track current question index
  const [answers, setAnswers] = useState({});  // Track answers
  const [submitted, setSubmitted] = useState(false); // Track if exam is submitted
  const [timer, setTimer] = useState(0);  // Timer duration in minutes
  const [timeLeft, setTimeLeft] = useState(0); // Timer countdown in seconds

  // Load questions from JSON file
  useEffect(() => {
    fetch("/questions.json") // Ensure this file is in your public folder
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0 && timer > 0) {
      alert("Time's up! Submitting exam...");
      setSubmitted(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timer > 0 && !submitted) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, submitted]);

  const startTimer = () => {
    if (examType && subject && questions[subject] && questions[subject].length) {
      setTimeLeft(timer * 60); // Set timer to selected value in seconds
    } else {
      alert("Please select Exam Type, Subject, and Timer!");
    }
  };

  const handleAnswerChange = (answer) => {
    setAnswers({ ...answers, [currentIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentIndex < questions[subject]?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions[subject]?.forEach((q, index) => {
      if (answers[index] === q.answer) score += 1;
    });
    return score;
  };

  const submitExam = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">CBT Practice Test</h1>

      {/* Exam Type Selection */}
      <div className="w-full max-w-md bg-white shadow-md p-4 rounded-lg mb-4">
        <label className="block font-semibold text-gray-700">Choose Exam Type:</label>
        <select
          onChange={(e) => setExamType(e.target.value)}
          className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Exam Type</option>
          <option value="WAEC">WAEC</option>
          <option value="NECO">NECO</option>
          <option value="JAMB">JAMB</option>
        </select>
      </div>

      {/* Subject Selection */}
      <div className="w-full max-w-md bg-white shadow-md p-4 rounded-lg mb-4">
        <label className="block font-semibold text-gray-700">Choose a Subject:</label>
        <select
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Subject</option>
          {Object.keys(questions).map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
      </div>

      {/* Timer Selection */}
      {subject && (
        <div className="w-full max-w-md bg-white shadow-md p-4 rounded-lg mb-4">
          <label className="block font-semibold text-gray-700">Choose Timer Duration (Minutes):</label>
          <select
            onChange={(e) => setTimer(Number(e.target.value))}
            className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Timer</option>
            {[5, 10, 15, 20, 30].map((time, idx) => (
              <option key={idx} value={time}>{time} Minutes</option>
            ))}
          </select>
          <button
            onClick={startTimer}
            className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
          >
            Start Timer
          </button>
        </div>
      )}

      {/* Questions and Answers */}
      {subject && !submitted && (
        <div className="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg mt-6">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-semibold">{questions[subject] && questions[subject][currentIndex]?.question}</h2>
            <span className="text-red-500 font-bold">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </span>
          </div>

          <div className="mt-3">
            {/* Multiple Choice Options */}
            {questions[subject] && questions[subject][currentIndex]?.options?.map((option, idx) => (
              <label key={idx} className="block bg-white p-2 border rounded-lg cursor-pointer hover:bg-gray-200">
                <input
                  type="radio"
                  name={`question-${currentIndex}`}
                  value={option}
                  checked={answers[currentIndex] === option}
                  onChange={() => handleAnswerChange(option)}
                  className="mr-2"
                />
                {String.fromCharCode(65 + idx)}) {option} {/* A, B, C, D */}
              </label>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="bg-gray-300 p-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentIndex === questions[subject].length - 1}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {questions[subject] && currentIndex === questions[subject].length - 1 && !submitted && (
        <button
          onClick={submitExam}
          className="mt-6 bg-green-500 text-white p-2 rounded w-full"
        >
          Submit Exam
        </button>
      )}

      {/* Result Section */}
      {submitted && (
        <div className="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg mt-6 text-center">
          <h3 className="text-xl font-bold">Exam Completed!</h3>
          <p className="text-lg mt-2">Your Score: {calculateScore()} / {questions[subject].length}</p>

          {questions[subject] && questions[subject].map((q, index) => (
            <div key={index} className="mt-4 text-left">
              <p className="font-bold">{index + 1}. {q.question}</p>
              <p className={`text-${answers[index] === q.answer ? "green" : "red"}-600`}>
                Correct Answer: {q.answer}
              </p>
              <p className="text-gray-700">Explanation: {q.explanation || "No explanation provided."}</p>
            </div>
          ))}

          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Retake Exam
          </button>
        </div>
      )}
    </div>
  );
};
