import React, { useState, useEffect } from "react";
import { FaFilePdf, FaSpinner } from "react-icons/fa";

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
  const [loadingStates, setLoadingStates] = useState({});

  const handleDownload = async (filename) => {
    try {
      // Set loading state for this file
      setLoadingStates(prev => ({ ...prev, [filename]: true }));
      
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
        setLoadingStates(prev => ({ ...prev, [filename]: false }));
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
      setLoadingStates(prev => ({ ...prev, [filename]: false }));
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
      <section className="py-12">
        <div className="w-3/5 md:w-4/5 m-auto shadow-md rounded-lg">
          <img
            className="w-full rounded-t-lg"
            src="https://i.postimg.cc/WzGTFVp5/0284e7ad2e09fb18284d84d426ff40a9e0e.jpg"
            alt="JAMB Syllabus"
          />
          <div className="text p-5">
            <h3 className="text-black font-semibold">
              Download JAMB syllabus for all subjects on Israel Creative Hub!
            </h3> <br />
            <h5 className="text-black">WHAT IS THE JAMB SYLLABUS?</h5>
            <p className="text-[15px] leading-5 my-3">
              The JAMB syllabus is an official document from the Joint Admissions and Matriculation Board that outlines the topics and subtopics students must study for each subject in the UTME (Unified Tertiary Matriculation Examination). It includes recommended textbooks, objectives for each topic, and what students are expected to know.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">📘 JAMB Syllabus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {jambSubjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaFilePdf className="text-red-600 text-2xl" />
                  <span className="text-gray-800 font-medium">{subject.name}</span>
                </div>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => subject.download && handleDownload(subject.download)}
                    disabled={!subject.download || loadingStates[subject.download]}
                    className={`flex items-center justify-center gap-2 flex-1 text-sm text-white px-3 py-1 rounded ${
                      subject.download 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "bg-gray-400 cursor-not-allowed"
                    } ${
                      loadingStates[subject.download] ? "opacity-75" : ""
                    }`}
                  >
                    {loadingStates[subject.download] ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        📥 Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};