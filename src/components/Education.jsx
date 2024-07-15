import React from 'react';

const education = {
  PHD: {
    course: "VLSI and Organic Electronics",
    university: "Indian Institute of Technology Roorkee (IIT Roorkee) India",
    year: 2014,
    grade: "9/10",
    thesis: "Organic Thin Film Transistor Device Modeling and Circuit Co-Design & Performance Analysis"
  },
  MTech: {
    course: "VLSI Design",
    university: "U.P. Technical University, Lucknow (UP), India",
    year: 2009,
    grade: "1st Division",
    thesis: "FPGA Implementation and Mask Level CMOS Layout Design of Redundant Binary Signed Digit Comparator using Various Simulator Tools"
  },
  BTech: {
    course: "Electronics Engineering",
    university: "Bundelkhand Institute of Engineering and Technology, Jhansi, India",
    year: 1999,
    grade: "1st Division",
  }
};

function Education() {
  return (
    <div className="w-500 bg-violet-50 p-8 my-4">
      <h1 className="text-6xl font-md text-indigo-700 mb-8 text-center">Education</h1>
      <div className="grid grid-cols-3 grid-flow-row gap-4 p-4">
        {Object.entries(education).map(([degree, details], index) => (
          <div key={index} className="my-2 p-4 border rounded-md bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-950 border-b pb-2">{degree}</h2>
            <div className = "py-2">
            <p><strong>Course:</strong> {details.course}</p>
            <p><strong>University:</strong> {details.university}</p>
            <p><strong>Year:</strong> {details.year}</p>
            <p><strong>Grade:</strong> {details.grade}</p>
            </div>
            {details.thesis && (
              <p><strong>Thesis:</strong> {details.thesis}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
