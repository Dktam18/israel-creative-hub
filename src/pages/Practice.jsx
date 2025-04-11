"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import questions from "@/data/questions.json";

const Practice = () => {
  const [examType, setExamType] = useState("WAEC");
  const [subject, setSubject] = useState("English");
  const [questionCount, setQuestionCount] = useState(10);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // ✅ Fisher-Yates Shuffle function
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const startTest = () => {
    const filtered = questions.filter(
      (q) => q.examType === examType && q.subject === subject
    );

    const shuffledQuestions = shuffleArray(filtered);
    const selectedQuestions = shuffledQuestions.slice(0, Math.min(questionCount, shuffledQuestions.length));

    setFilteredQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizStarted(true);
  };

  const handleOptionClick = (option) => {
    if (selectedOption) return; // Prevent multiple selections
    setSelectedOption(option);
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < filteredQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const subjects = [...new Set(questions.map((q) => q.subject))];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {!quizStarted ? (
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="block mb-1">Select Exam Type:</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="p-2 border rounded w-full"
              >
                <option value="WAEC">WAEC</option>
                <option value="NECO">NECO</option>
                <option value="JAMB">JAMB</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Select Subject:</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-2 border rounded w-full"
              >
                {subjects.map((subj, index) => (
                  <option key={index} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Number of Questions:</label>
              <input
                type="number"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="p-2 border rounded w-full"
              />
            </div>
            <Button onClick={startTest} className="w-full">
              Start Test
            </Button>
          </CardContent>
        </Card>
      ) : showScore ? (
        <Card>
          <CardContent className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
            <p className="text-lg">
              Your Score: {score} / {filteredQuestions.length}
            </p>
            <Button
              className="mt-4"
              onClick={() => {
                setQuizStarted(false);
              }}
            >
              Take Another Test
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">
              Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            </h2>
            <p className="mb-4">{filteredQuestions[currentQuestionIndex].question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredQuestions[currentQuestionIndex].options.map((option, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full ${
                    selectedOption
                      ? option === filteredQuestions[currentQuestionIndex].answer
                        ? "bg-green-500 text-white"
                        : option === selectedOption
                        ? "bg-red-500 text-white"
                        : ""
                      : ""
                  }`}
                  disabled={selectedOption !== null}
                >
                  {option}
                </Button>
              ))}
            </div>
            {showExplanation && (
              <div className="bg-blue-100 p-3 rounded mt-4">
                <strong>Explanation:</strong> {filteredQuestions[currentQuestionIndex].explanation}
              </div>
            )}
            {selectedOption && (
              <Button onClick={handleNextQuestion} className="mt-4">
                {currentQuestionIndex + 1 < filteredQuestions.length ? "Next Question" : "Finish Test"}
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Practice;
