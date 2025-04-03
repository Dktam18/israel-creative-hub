// import { useState } from "react";
// import { db, ref, push } from "./firebase";

// export const AddQuestions = () => {
//   const [formData, setFormData] = useState({
//     subject: "",
//     question: "",
//     options: { A: "", B: "", C: "", D: "" },
//     correctAnswer: "",
//     explanation: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["A", "B", "C", "D"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         options: { ...prev.options, [name]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.subject || !formData.question || !formData.correctAnswer) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     push(ref(db, `questions/${formData.subject}`), formData)
//       .then(() => alert("Question added successfully!"))
//       .catch((err) => alert("Error adding question: " + err.message));

//     setFormData({
//       subject: "",
//       question: "",
//       options: { A: "", B: "", C: "", D: "" },
//       correctAnswer: "",
//       explanation: "",
//     });
//   };

//   return (
//     <div>
//       <h2>Add Question</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
//         <input type="text" name="question" placeholder="Question" value={formData.question} onChange={handleChange} required />

//         {["A", "B", "C", "D"].map((opt) => (
//           <input key={opt} type="text" name={opt} placeholder={`Option ${opt}`} value={formData.options[opt]} onChange={handleChange} required />
//         ))}

//         <select name="correctAnswer" value={formData.correctAnswer} onChange={handleChange} required>
//           <option value="">Correct Answer</option>
//           {["A", "B", "C", "D"].map((opt) => (
//             <option key={opt} value={opt}>{opt}</option>
//           ))}
//         </select>

//         <textarea name="explanation" placeholder="Explanation" value={formData.explanation} onChange={handleChange}></textarea>

//         <button type="submit">Add Question</button>
//       </form>
//     </div>
//   );
// };
