import React from "react";
import { FaFilePdf } from "react-icons/fa";

const jambSubjects = [
  { name: "Use of English", download: `${process.env.PUBLIC_URL}/downloads/Use-of-English.pdf` },
  { name: "Mathematics", download: "${process.env.PUBLIC_URL}/downloads/Mathematics.pdf" },
  { name: "Physics", download: "${process.env.PUBLIC_URL}/downloads/Physics.pdf" },
  { name: "Chemistry", download: "${process.env.PUBLIC_URL}/downloads/Chemistry.pdf" },
  { name: "Biology", download: "${process.env.PUBLIC_URL}/downloads/Biology.pdf" },
  { name: "Agricultural Science", download: "${process.env.PUBLIC_URL}/downloads/Agriculture.pdf" },
  { name: "Arabic", download: "${process.env.PUBLIC_URL}/downloads/Arabic.pdf" },
  { name: "Christian Religious Studies", download: "${process.env.PUBLIC_URL}/downloads/Christian-Religous-Studies.pdf" },
  { name: "Commerce", download: "${process.env.PUBLIC_URL}/downloads/Commerce.pdf" },
  { name: "Art", download: "${process.env.PUBLIC_URL}/downloads/Art.pdf" },
  { name: "Computer Studies", download: "${process.env.PUBLIC_URL}/downloads/Computer-Studies.pdf" },
  { name: "Economics", download: "${process.env.PUBLIC_URL}/downloads/Economics.pdf" },
  { name: "French", download: "${process.env.PUBLIC_URL}/downloads/French.pdf" },
  { name: "Geography", download: "${process.env.PUBLIC_URL}/downloads/Geography.pdf" },
  { name: "Government", download: "${process.env.PUBLIC_URL}/downloads/Government.pdf" },
  { name: "Hausa", download: "${process.env.PUBLIC_URL}/downloads/Hausa.pdf" },
  { name: "History", download: "${process.env.PUBLIC_URL}/downloads/History.pdf" },
  { name: "Home Economics", download: "${process.env.PUBLIC_URL}/downloads/Home-Economics.pdf" },
  { name: "Igbo", download: "${process.env.PUBLIC_URL}/downloads/Igbo.pdf" },
  { name: "Islamic Studies", download: "${process.env.PUBLIC_URL}/downloads/Islamic-Studies.pdf" },
  { name: "Literature in English", download: "${process.env.PUBLIC_URL}/downloads/JAMB-Literature-in-English-Syllabus.pdf" },
  { name: "Music", download: "${process.env.PUBLIC_URL}/downloads/Music.pdf" },
  { name: "Physical and Health Education", download: "${process.env.PUBLIC_URL}/downloads/Physical-Health-Education.pdf" },
  { name: "Principles of Accounts", download: "${process.env.PUBLIC_URL}/downloads/Principles-of-Accounts.pdf" },
  { name: "Yoruba", download: "${process.env.PUBLIC_URL}/downloads/Youruba.pdf" }
];

export const BlogSinglePage = () => {
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
                  <a
                    href={subject.download || "#"}  // Fallback to "#" if empty
                    download={Boolean(subject.download)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-sm text-white px-3 py-1 rounded text-center ${
                      subject.download ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!subject.download}
                  >
                    📥 Download
                  </a>
                  <a
                    href={subject.download || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-sm px-3 py-1 rounded text-center ${
                      subject.download ? "text-blue-600 border border-blue-600 hover:bg-blue-50" : "text-gray-400 border border-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!subject.download}
                  >
                    👁️ Read
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};