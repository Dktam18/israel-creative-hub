import { useState, useEffect } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

export const Practice = () => {
  const [questions, setQuestions] = useState({});
  const [examType, setExamType] = useState(""); // Exam Type (WAEC, NECO, JAMB)
  const [subject, setSubject] = useState("");  // Selected Subject
  const [currentIndex, setCurrentIndex] = useState(0); // Track current question index
  const [answers, setAnswers] = useState({});  // Track answers
  const [submitted, setSubmitted] = useState(false); // Track if exam is submitted
  const [timer, setTimer] = useState(0);  // Timer duration in minutes
  const [timeLeft, setTimeLeft] = useState(0); // Timer countdown in seconds
  const [testStarted, setTestStarted] = useState(false); // Track if test has started
  const [questionCount, setQuestionCount] = useState(0); // Number of questions to show
  const [filteredQuestions, setFilteredQuestions] = useState([]); // Questions after filtering
  const [showResults, setShowResults] = useState(false); // Track if results should be shown
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  // Load questions from JSON file
  useEffect(() => {
    fetch("/questions.json") // Ensure this file is in your public folder
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  // Filter questions when subject changes
  useEffect(() => {
    if (subject && questions[subject]) {
      // Filter by exam type if selected
      const filtered = questions[subject].filter(q => 
        examType ? q.examType === examType : true
      );
      setFilteredQuestions(filtered);
    }
  }, [subject, examType, questions]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0 && timer > 0 && testStarted) {
      alert("Time's up! Submitting exam...");
      handleSubmitExam();
    }
  }, [timeLeft, timer, testStarted]);

  useEffect(() => {
    if (timer > 0 && testStarted && !submitted) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, submitted, testStarted]);

  // Show WhatsApp popup 3 seconds after results are shown
  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        setShowWhatsappPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showResults]);

  const startTest = () => {
    if (examType && subject && filteredQuestions.length && timer > 0 && questionCount > 0) {
      // Shuffle questions and take the selected count
      const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, Math.min(questionCount, shuffled.length));
      setFilteredQuestions(selectedQuestions);
      setTimeLeft(timer * 60);
      setTestStarted(true);
      setCurrentIndex(0);
      setAnswers({});
    } else {
      alert("Please complete all selections before starting!");
    }
  };

  const handleAnswerChange = (answer) => {
    setAnswers({ ...answers, [currentIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
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
    filteredQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) score += 1;
    });
    return score;
  };

  const handleSubmitExam = () => {
    setSubmitted(true);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitUserDetails = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", userDetails.name);
    formData.append("email", userDetails.email);
    formData.append("phone", userDetails.phone);
    formData.append("examType", examType);
    formData.append("subject", subject);
    formData.append("score", calculateScore());
    formData.append("totalQuestions", filteredQuestions.length);
    formData.append("percentage", Math.round((calculateScore() / filteredQuestions.length) * 100));
    formData.append("answers", JSON.stringify(answers));
    formData.append("_replyto", userDetails.email);
    formData.append("_subject", `CBT Test Results - ${userDetails.name}`);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mraisrael05@gmail.com", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setShowResults(true);
      } else {
        alert("Failed to submit details. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate available question counts based on filtered questions
  const availableQuestionCounts = () => {
    if (!filteredQuestions.length) return [];
    const max = Math.min(50, filteredQuestions.length); // Cap at 50 questions
    return [10, 20, 30, 40, max].filter(n => n <= max);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">CBT Practice Test</h1>

      {/* Selection Section - Only shown before test starts */}
      {!testStarted && (
        <div className="w-full max-w-md space-y-4">
          {/* Exam Type Selection */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <label className="block font-semibold text-gray-700">Choose Exam Type:</label>
            <select
              onChange={(e) => setExamType(e.target.value)}
              className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={examType}
            >
              <option value="">Select Exam Type</option>
              <option value="WAEC">WAEC</option>
              <option value="NECO">NECO</option>
              <option value="JAMB">JAMB</option>
            </select>
          </div>

          {/* Subject Selection */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <label className="block font-semibold text-gray-700">Choose a Subject:</label>
            <select
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={subject}
            >
              <option value="">Select Subject</option>
              {Object.keys(questions).map((subj) => (
                <option key={subj} value={subj}>{subj}</option>
              ))}
            </select>
          </div>

          {/* Question Count Selection */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <label className="block font-semibold text-gray-700">
              Number of Questions (Available: {filteredQuestions.length})
            </label>
            <select
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={questionCount}
            >
              <option value="0">Select Question Count</option>
              {availableQuestionCounts().map((count) => (
                <option key={count} value={count}>
                  {count} Questions
                </option>
              ))}
            </select>
          </div>

          {/* Timer Selection */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <label className="block font-semibold text-gray-700">Timer Duration:</label>
            <select
              onChange={(e) => setTimer(Number(e.target.value))}
              className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={timer}
            >
              <option value="0">Select Timer</option>
              <option value="5">5 Minutes</option>
              <option value="10">10 Minutes</option>
              <option value="15">15 Minutes</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
            </select>
          </div>

          {/* Start Test Button */}
          <button
            onClick={startTest}
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            disabled={!examType || !subject || questionCount <= 0 || timer <= 0}
          >
            Start Test
          </button>
        </div>
      )}

      {/* Test Section - Only shown after test starts */}
      {testStarted && !submitted && (
        <div className="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg">
          {/* Header with timer and progress */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </div>
            <div className="text-red-500 font-bold">
              Time Remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </div>
          </div>

          {/* Current Question */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {filteredQuestions[currentIndex]?.question}
            </h2>
            
            {/* Multiple Choice Options */}
            <div className="space-y-2">
              {filteredQuestions[currentIndex]?.options?.map((option, idx) => (
                <label key={idx} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name={`question-${currentIndex}`}
                    value={option}
                    checked={answers[currentIndex] === option}
                    onChange={() => handleAnswerChange(option)}
                    className="mr-3"
                  />
                  <span>{String.fromCharCode(65 + idx)}) {option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
            
            {currentIndex < filteredQuestions.length - 1 ? (
              <button
                onClick={nextQuestion}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Submit Exam
              </button>
            )}
          </div>
        </div>
      )}

      {/* User Details Form - Shown after submission but before results */}
      {submitted && !showResults && (
        <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Enter Your Details to view result</h2>
          <form onSubmit={submitUserDetails} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleUserDetailsChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              {isSubmitting ? "Submitting..." : "View Results"}
            </button>
          </form>
        </div>
      )}

      {/* Results Section - Shown after user details are submitted */}
      {showResults && (
        <div className="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg">
          {/* Floating WhatsApp Button */}
          {!showWhatsappPopup && (
            <div className="fixed bottom-6 right-6 z-40">
              <button 
                onClick={() => setShowWhatsappPopup(true)}
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="text-2xl" />
              </button>
            </div>
          )}

          {/* WhatsApp Popup */}
          {showWhatsappPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                <button 
                  onClick={() => setShowWhatsappPopup(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
                
                <div className="text-center">
                  <FaWhatsapp className="text-green-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Join Our WhatsApp Channel!</h3>
                  <p className="mb-4">Get instant updates on JAMB news, tips, and more by joining our educational community.</p>
                  
                  <a
                    href="https://whatsapp.com/channel/0029VajOfp62UPBOfXpold3b/1556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded inline-flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp /> Join Now
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-green-600">Exam Results</h2>
            <p className="text-lg mt-2">
              Name: <span className="font-bold">{userDetails.name}</span>
            </p>
            <p className="text-lg mt-2">
              Your Score: <span className="font-bold">{calculateScore()}</span> out of <span className="font-bold">{filteredQuestions.length}</span>
            </p>
            <p className="text-lg">
              Percentage: <span className="font-bold">{Math.round((calculateScore() / filteredQuestions.length) * 100)}%</span>
            </p>
          </div>

          {/* Answers Review */}
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-semibold text-lg">
                  {index + 1}. {q.question}
                </p>
                <p className={`mt-2 ${answers[index] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {answers[index] || "Not answered"}
                </p>
                {answers[index] !== q.answer && (
                  <p className="text-green-600">Correct answer: {q.answer}</p>
                )}
                {q.explanation && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p className="font-medium">Explanation:</p>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Retake Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Take Another Test
          </button>
        </div>
      )}
    </div>
  );
};