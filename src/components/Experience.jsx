import React from 'react'
const experience =
  [
    {
      university: "Indira Gandhi Delhi Technical University for Women(IGDTUW), Delhi, India",
      role: "Register(1 year), Director (Planning), Professor",
      department: "Department of Electronics and Communication Engineering",
      duration: "2019 - Present"
    },
    {
      university: "Madan Mohan Malaviya University of Technology (MMMUT) Gorakhpur (UP), India",
      role: "Professor",
      department: "Department of Electronics and Comm. Engineering",
      duration: "2016 - 2019"
    },
    {
      university: "Graphic Era University, Dehradun (Uttarakhand), India",
      role: "Assistant Professor",
      department: "",
      duration: "2012 - 2016"
    },
    {
      university: "Indian Institute of Technology Roorkee (IIT Roorkee) Uttarakhand, India ",
      role: "Research Scholar",
      department: "",
      duration: "2009-2012"
    },
    {
      university: "Graphic Era University (GEU), Dehradun (Uttarakhand) India",
      role: "Assistant Professor",
      department: "",
      duration: "2006-2009"
    },
    {
      university: "Bhagwant Institute of Technology (BIT), M. Nagar (UP), India",
      role: "Lecturer, Assistant Professor and Dean (Faculty and Students Affairs )",
      department: "",
      duration: "2005-2006"
    }

  ];

function Experience() {
  return (
    <div className="w-500 p-8 my-4">
      <div className="border-t border-slate-400 p-10">
        <div className="">
          <h1 className="text-6xl font-lg text-indigo-700 mb-8 text-center">Experience</h1>
          <p className="text-xl pb-2 font-lg border-b border-slate-400 text-stone-700 text-center"> More than 22 Years of Academic, Research and Administrative Experience</p>
        </div>
        {/* Experience */}
        <div className="flex flex-col justify-center items-center">
        {experience.map((item, index) => (
            <div key={index} className="flex flex-row p-4  border-b border-slate-400 w-9/12 bg-white items-center">
              <h2 className="text-xl font-xl text-stone-700 w-1/2">{item.university}</h2>
              <div className="flex flex-col ml-4 w-1/2">
              <p className="text-lg text-stone-600 "><strong>Role:</strong> {item.role}</p>
              {item.department == "" ? "" : <p className="text-lg text-stone-600"><strong>Department:</strong> {item.department}</p>}
              <p className="text-lg text-stone-600"><strong>Duration:</strong> {item.duration}</p>
              </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Experience