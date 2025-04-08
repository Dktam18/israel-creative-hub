import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";

const jambSubjects = [
  { name: "Use of English", download: "Use-of-English.pdf" },
  { name: "Mathematics", download: "Mathematics.pdf" },
  { name: "Physics", download: "Physics.pdf" },
  { name: "Chemistry", download: "Chemistry.pdf" },
  { name: "Biology", download: "Biology.pdf" },
  { name: "Agricultural Science", download: "Agriculture.pdf" },
  { name: "Arabic", download: "Arabic.pdf" },
  { name: "Christian Religious Studies", download: "Christian-Religous-Studies.pdf" },
  { name: "Commerce", download: "Commerce.pdf" },
  { name: "Art", download: "Art.pdf" },
  { name: "Computer Studies", download: "Computer-Studies.pdf" },
  { name: "Economics", download: "Economics.pdf" },
  { name: "French", download: "French.pdf" },
  { name: "Geography", download: "Geography.pdf" },
  { name: "Government", download: "Government.pdf" },
  { name: "Hausa", download: "Hausa.pdf" },
  { name: "History", download: "History.pdf" },
  { name: "Home Economics", download: "Home-Economics.pdf" },
  { name: "Igbo", download: "Igbo.pdf" },
  { name: "Islamic Studies", download: "Islamic-Studies.pdf" },
  { name: "Literature in English", download: "JAMB-Literature-in-English-Syllabus.pdf" },
  { name: "Music", download: "Music.pdf" },
  { name: "Physical and Health Education", download: "Physical-Health-Education.pdf" },
  { name: "Principles of Accounts", download: "Principles-of-Accounts.pdf" },
  { name: "Yoruba", download: "Youruba.pdf" }
];

export const BlogSinglePage = () => {
  const handleDownload = async (filename) => {
    try {
      // Show loading state
      const button = document.querySelector(`button[data-file="${filename}"]`);
      if (button) button.disabled = true;
      
      // Fetch with cache-busting
      const response = await fetch(
        `${process.env.PUBLIC_URL}/downloads/${filename}?t=${Date.now()}`,
        { cache: "no-store" }
      );
      
      if (!response.ok) throw new Error("Failed to download");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        if (button) button.disabled = false;
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    }
  };

  // Preload PDFs on component mount
  useEffect(() => {
    jambSubjects.forEach((subject) => {
      if (subject.download) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "document";
        link.href = `${process.env.PUBLIC_URL}/downloads/${subject.download}`;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <div>
      {/* Your existing JSX remains the same until the button */}
      <button
        onClick={() => handleDownload(subject.download)}
        data-file={subject.download}
        className={`flex-1 text-sm text-white px-3 py-1 rounded text-center ${
          subject.download ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!subject.download}
      >
        📥 Download
      </button>
      {/* Rest of your JSX */}
    </div>
  );
};