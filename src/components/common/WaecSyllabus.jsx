import React, { useState, useEffect } from "react";
import { FaFilePdf, FaSpinner, FaTimes, FaWhatsapp } from "react-icons/fa";

const WaecSubjects = [
  { name: "Agricultural Science", download: "AGRICULTURAL-SCIENCE.pdf" },
  { name: "Animal Husbandry Alt A", download: "ANIMAL-HUSBANDRY-ALT-A.pdf" },
  { name: "Animal Husbandry Alt B", download: "ANIMAL-HUSBANDRY-ALT-B.pdf" },
  { name: "Applied Electricity or Basic Electricity", download: "APPLIED-ELECTRICITY-OR-BASIC-ELECTRICITY.pdf" },
  { name: "Auto Body repairs and spray painting", download: "APPLIED-ELECTRICITY-OR-BASIC-ELECTRICITY.pdf" },
  { name: "Auto Electrical Work", download: "AUTO-ELECTRICAL-WORK-1.pdf" },
  { name: "Auto Mechanical Work", download: "AUTO-MECHANICAL-WORK-1.pdf" },
  { name: "Auto Mechanics", download: "AUTO-MECHANICS-1.PDF" },
  { name: "Auto Parts Mechandising", download: "AUTO-PARTS-MERCHANDISING.pdf" },
  { name: "Basketry", download: "BASKETRY-1.pdf" },
  { name: "BIOLOGY", download: "BIOLOGY-1.pdf" },
  { name: "Blocklaying Bricklaying and Concreting", download: "BIOLOGY-1.pdf" },
  { name: "Book Keeping", download: "BOOK-KEEPING-1.pdf" },
  { name: "Building Construction", download: "BUILDING-CONSTRUCTION-1.pdf" },
  { name: "Business Management", download: "BUSINESS-MANAGEMENT-1.pdf" },
  { name: "Capentry and Joinery", download: "CAPENTRY-AND-JOINERY.pdf" },
  { name: "Catering Craft Practice", download: "CATERING-CRAFT-PRACTICE-1.pdf" },
  { name: "Ceramics", download: "CERAMICS-1.pdf" },
  { name: "Chemistry", download: "CHEMISTRY1.pdf" },
  { name: "Christian Religious Studies", download: "CHRISTIAN-RELIGIOUS-STUDIES-NEW.pdf" },
  { name: "Civic Education", download: "CIVIC-EDUCATION-1.pdf" },
  { name: "Clerical Office Duties", download: "CLERICAL-OFFICE-DUTIES.pdf" }, 
  { name: "Clothing and Textiles", download: "CLOTHING-AND-TEXTILES-1.pdf" }, 
  { name: "Commerce", download: "COMMERCE-1.pdf" }, 
  { name: "Computer Studies", download: "COMPUTER-STUDIES-1.pdf" }, 
  { name: "Cosmetology", download: "COSMETOLOGY-1.pdf"}, 
  { name: "Crop Husbanry and Horticulture", download: "CROP-HUSBANDRY-AND-HORTICULTURE.pdf"}, 
  { name: "Data Processing", download: "DATA-PROCESSING-1.pdf"}, 
  { name: "Dyeing Bleaching", download: "DYEING-BLEACHING.pdf"}, 
  { name: "Economics", download: "ECONOMICS-1.pdf"},  
  { name: "Edo", download: "EDO.pdf"},  
  { name: "Efik", download: "EFIK.pdf"},  
 
  { name: "Electrical Installation and Maintenance Work", download: "ELECTRICAL-INSTALLATION-AND-MAINTENANCE-WORK.pdf"}, 
  { name: "Electronics or Basic Electronics", download: "ELECTRONICS-OR-BASIC-ELECTRONICS.pdf"}, 
  { name: "English Language", download: "ENGLISH-LANGUAGE-1.pdf"}, 
  { name: "Financial Accounting", download: "FINANCIAL-ACCOUNTING-1.pdf"}, 
  { name: "Financial Accounts", download: "FINANCIAL-ACCOUNTS.pdf"}, 
  { name: "Fisheries Alt A", download: "FISHERIES-ALT-A.pdf"}, 
  { name: "Fisheries Alt B", download: "FISHERIES-ALT-B.pdf"}, 
  { name: "Food and Nutrition", download: "FOODS-AND-NUTRITION.pdf"}, 
  { name: "French", download: "FRENCH-1.pdf"}, 
  { name: "Further Mathematics or Mathematics Elective", download: "FURTHER-MATHEMATICS-OR-MATHEMATICS-ELECTIVE.pdf"}, 
  { name: "Garment Making", download: "GARMENT-MAKING-1.pdf"}, 
  { name: "General Agriculture", download: "GENERAL-AGRICULTURE-1.pdf"}, 
  { name: "General Mathematics or Core", download: "GENERAL-MATHEMATICS-OR-CORE.pdf"}, 
  { name: "Geography", download: "GEOGRAPHY-1.pdf"}, 
  { name: "Ghanaian Languages", download: "GHANAIAN-LANGUAGES.pdf"}, 
  { name: "Government", download: "GOVERNMENT-1.pdf"}, 
  { name: "Graphic Design", download: "GRAPHIC-DESIGN-1.pdf"}, 
  { name: "GSM Phones Maintenance and Repairs", download: "GSM-PHONES-MAINTENANCE-AND-REPAIRS-1.pdf"}, 
  { name: "Hausa", download: "HAUSA-1.pdf"}, 
  { name: "Health Education or Health Science", download: "HEALTH-EDUCATION-OR-HEALTH-SCIENCE.pdf"}, 
  { name: "History", download: "HISTORY-1.pdf"}, 
  { name: "Home Management", download: "HOME-MANAGEMENT-1.pdf"}, 
  { name: "Ibibio", download: "IBIBIO-1.pdf"}, 
  { name: "Igbo", download: "IGBO-1.pdf"}, 
  { name: "Information and Communication Technology (Core)", download: "INFORMATION-AND-COMMUNICATION-TECHNOLOGY-CORE"}, 
  { name: "Information and Communication Technology (Elective)", download: "INFORMATION-AND-COMMUNICATION-TECHNOLOGY-ELECTIVE"}, 
  { name: "Insurance", download: "INSURANCE-1.pdf"}, 
  { name: "Integrated Science", download: "INSURANCE.pdf"}, 
  { name: "Islamic Religious Studies", download: "ISLAMIC-RELIGIOUS-STUDIES.pdf"}, 
  { name: "Jewellery", download: "JEWELLERY-1.pdf"}, 
  { name: "Leather Goods", download: "LEATHER-GOODS.pdf"}, 
  { name: "Leather Work", download: "LEATHERWORK.pdf"}, 
  { name: "Literature in English (2021 -2025)", download: "LITERATURE-IN-ENGLISH-2021-2025.pdf"}, 
  { name: "Marketing", download: "MARKETING-1.pdf"}, 
  { name: "MetalWork", download: "METALWORK.pdf"}, 
  { name: "Mining", download: "MINING-1.pdf"}, 
  { name: "Music", download: "MUSIC-SYLLABUS.pdf"}, 
  { name: "Music (NEW)", download: "MUSICNEW.pdf"}, // No PDF available
  { name: "Office Practice", download: "OFFICE-PRACTICE-1.pdf"}, // No PDF available
  { name: "Painting and Decorating", download:"PAINTING-AND-DECORATING.pdf" },
  { name: "Photography", download:"PHOTOGRAPHY-1.pdf" },
  { name: "Physical Education", download:"PHYSICAL-EDUCATION-1.pdf" },
  { name: "Physics", download: "PHYSICS-1.pdf"}, 
  { name: "Picture Making", download: "PICTURE-MAKING-1.pdf"}, 
  { name: "Plumbing and Pipe fitting", download: "PLUMBING-AND-PIPE-FITTING-1.pdf"}, 
  { name: "Principles of Cost Accounting", download: "PRINCIPLES-OF-COST-ACCOUNTING-1.pdf"}, 
  { name: "Printing Craft Practice", download: "PRINTING-CRAFT-PRACTICE-1.pdf"}, 
  { name: "Radio Television and Electronics Works", download: "RADIOTELEVISION-AND-ELECTRONICS-WORKS.pdf"}, 
  { name: "Refrigeration and Air Conditioning", download: "REFRIGERATION-AND-AIR-CONDITIONING.pdf"}, 
  { name: "Salesmanship", download: "SALESMANSHIP-1.pdf"},   
  { name: "Sculpture", download: "SCULPTURE-1.pdf"},   
  { name: "Shorthand", download: "SHORTHAND.pdf"},   
  { name: "Social Studies (New)", download: "SOCIAL-STUDIES-NEW.pdf"},   
  { name: "Store Keeping", download: "STORE-KEEPING-1.pdf"},   
  { name: "Store Management", download: "STORE-MANAGEMENT-1.pdf"},   
  { name: "Technical Drawing", download: "TECHINICAL-DRAWING-1.pdf"},   
  { name: "Textiles", download: "TEXTILES-1.pdf"},   
  { name: "Tourism", download: "TOURISM-1.pdf"},   
  { name: "Typewriting 1", download: "TYPEWRITING-1.pdf"},   
  { name: "Typewriting 2", download: "TYPEWRITING-2.pdf"},   
  { name: "Uphostery", download: "UPHOSTERY-1.pdf"},   
  { name: "Visual Art", download: "VISUAL-ART-1.pdf"},   
  { name: "Welding and Fabrication Engineering Craft Practice", download: "WELDING-AND-FABRICATION-ENGINEERING-CRAFT-PRACTICE.pdf"},   
  { name: "west African Traditional Religion", download: "WEST-AFRICAN-TRADITIONAL-RELIGION.pdf"},   
  { name: "WoodWork", download: "WOODWORK-1.pdf"},   
  { name: "WoodWork GH", download: "WOODWORK-GH.pdf"},   
  { name: "WoodWork TO I.E.D", download: "WOODWORK-TO-I.E.D.pdf"},   
  { name: "Yoruba", download: "Yoruba.pdf"},   
];

export const WaecSyllabus = () => {
  const [loadingStates, setLoadingStates] = useState({});
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  // Show WhatsApp popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsappPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Preload PDFs on component mount
  useEffect(() => {
    WaecSubjects.forEach((subject) => {
      if (subject.download) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "document";
        link.href = `${process.env.PUBLIC_URL}/downloads/${subject.download}`;
        document.head.appendChild(link);
      }
    });
  }, []);

  const handleDownload = async (filename) => {
    try {
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

  return (
    <div>
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
              <p className="mb-4">Get instant updates on JAMB, WAEC and all educational news, tips, and more by joining our educational community.</p>
              
              <a
                href="https://whatsapp.com/channel/0029VajOfp62UPBOfXpold3b/1556" // Replace with your WhatsApp group invite link
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

      {/* Your original content */}
      <section className="py-12">
        <div className="w-3/5 md:w-4/5 m-auto shadow-md rounded-lg">
          <img
            className="w-full rounded-t-lg"
            src="https://i.postimg.cc/CLdjdnyS/Whats-App-Image-2025-04-29-at-11-32-49-45690517.jpg"
            alt="WAEC syllabus"
          />
          <div className="text p-5">
            <h3 className="text-black font-semibold">
              Download WAEC syllabus for all subjects on Israel Creative Hub!
            </h3> <br />
            <h5 className="text-black font-bold">WHAT IS THE WAEC SYLLABUS?</h5>
            <p className="text-[15px] leading-5 my-3">
             The WAEC syllabus is a comprehensive guide that outlines the topics and content that students are expected to study in preparation for the WAEC examination. It serves as a roadmap for both teachers and students, ensuring that all necessary subjects are covered in the curriculum. 
             <br /><br />
             The syllabus is designed to help students understand the key concepts and skills they need to master in order to succeed in their exams. It includes detailed information on the structure of the examination, the types of questions that may be asked, and the recommended textbooks and resources for each subject. By following the WAEC syllabus, students can effectively prepare for their exams and improve their chances of achieving good results.
            
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">📘 WAEC Syllabus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {WaecSubjects.map((subject, index) => (
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