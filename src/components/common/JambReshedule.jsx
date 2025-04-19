import React from "react";

export const JambReschedule = () => {
  return (
    <div>
      <section className="py-12">
        <div className="w-3/5 md:w-4/5 m-auto shadow-md rounded-lg">
          <img
            className="w-full rounded-t-lg"
            src="https://i.postimg.cc/zvqTzH7J/FB-IMG-1738191745137.jpg"
            alt="JAMB Rescheduled Date"
          />
          <div className="text p-5">
            <h3 className="text-black font-semibold">
              JAMB Announces New Date for 2025 UTME Commencement
            </h3>

            <p className="text-[14px] leading-5 my-3">
              The Joint Admissions and Matriculation Board (JAMB) has officially announced a new date for the commencement of the 2025 Unified Tertiary Matriculation Examination (UTME). According to the latest update, the exam will now begin on <b>Friday, April 25th, 2025</b>, instead of the previously scheduled date.
              <br /><br />
              This change was made to ensure all technical and administrative preparations are fully in place for a smooth and seamless examination experience for all registered candidates.
            </p>

            <p className="text-[14px] leading-5 my-3">
              <b>Important Notes for Candidates:</b> <br /><br />
              - Candidates are advised to reprint their examination slips a few days before the new date to confirm updated exam details. <br />
              - The exam slip will contain each candidate’s exam date, time, and venue. <br />
              - Ensure you arrive at your center early and come along with all necessary documents.
            </p>

            <p className="text-[14px] leading-5 my-3">
              For more updates and tips on how to prepare effectively for your UTME, keep checking our blog. Best of luck!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
