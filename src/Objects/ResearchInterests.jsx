import React from 'react'

const researchInterest = [
    ["Electronics Devices and Circuits", "VLSI Design & Technology", "Semiconductor Devices and Circuits", "Digital System Design", "Digital Electronics and Circuits"],
    ["Organic Devices and Circuits", "Organic Semiconductors", "Device Fabrication and Characterization", "Thin Film Characterization", "OLEDs", "Organic Solar Cells", " Modeling and Simulation of Novel Device Structures"
    ],
    ["IoT Smart Boards", "Drone Design and Testing", "AI Applications"
    ]
];


function ResearchInterests() {
    return (
        <div className="w-500 p-8 ">
            <h1 className="text-4xl font-lg text-indigo-700 mb-8 text-center ">Research Interests</h1>
            <div className = "flex flex-row gap-auto justify-center items-center">
            <div className="w-auto bg-white border-l border-y rounded-l-md border-gray-400 p-4">
                <h2 className="text-lg font-bold border-b p-2">VLSI System and Circuits</h2>
                <ol className="list-decimal p-4">
                    {researchInterest[0].map((item, index) => (
                        <li
                        className="font-semibold text-gray-600 hover:text-indigo-400 m-2"
                            key={index}>{item}
                        </li>
                    ))}
                </ol>

            </div>
            <div className="w-auto bg-white border-y rounded-md border-gray-400 p-4 shadow-md">
                <h2 className="text-lg font-bold border-b border-gray-500 p-2 "> Organic Electronics Devices and Circuits</h2>
                <ol className="list-decimal p-4">
                    {researchInterest[1].map((item, index) => (
                        <li
                        className="font-semibold text-gray-600 hover:text-indigo-400 m-2"
                            key={index}>{item}
                        </li>
                    ))}
                </ol>

            </div>
            <div className="w-auto bg-white border-r border-y rounded-r-md border-gray-400 p-4">
                <h2 className="text-lg font-bold border-b p-2">IOT, Drone and AI</h2>
                <ol className="list-decimal p-4">
                    {researchInterest[2].map((item, index) => (
                        <li
                        className="font-semibold text-gray-600 hover:text-indigo-400 m-2"
                            key={index}>{item}
                        </li>
                    ))}
                </ol>

            </div>
            </div>

        </div>
    )
}

export default ResearchInterests