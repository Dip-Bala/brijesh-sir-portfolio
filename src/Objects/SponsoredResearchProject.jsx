import React from 'react';

const projectDetails = {
    title: "Development of IoT and Drone based Agriculture Monitoring System with Objective of Skill Development of Socially Deprived Community",
    period: "2 Years (3.2.2020) to 02.02.2022",
    organization: "Ministry of Electronics and Information Technology (MeitY), Govt. of India, New Delhi",
    amount: "289.50 (2.895 Crore)",
    investigators: [
        "Prof. Sanjay Kumar Soni (CPI)",
        "Dr. Brijesh Kumar (Co-CPI)",
        "Dr. Rajan Mishra (Co-CPI)",
        "Dr. Prabhakar Tiwari (Co-CPI)",
        "Four (4) participating REC Institutions (Co-CPI)"
    ]
};

function SponsoredResearchProject() {
    return (
        <div className="flex flex-col p-10 bg-slate-100 justify-center items-center">
            <h1 className="text-4xl font-lg text-indigo-700 mb-8 text-center">Sponsored Research Project (Ongoing)</h1>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl space-y-6">
                <div >
                    <h2 className="text-lg font-semibold text-gray-700">Project Title</h2>
                    <p className="text-lg text-gray-600">{projectDetails.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-4">
                        <div >
                            <h2 className="text-lg font-semibold text-gray-700">Period</h2>
                            <p className="text-lg text-gray-500">{projectDetails.period}</p>
                        </div>
                        <div >
                            <h2 className="text-lg font-semibold text-gray-700">Sponsoring Organization</h2>
                            <p className="text-lg text-gray-500">{projectDetails.organization}</p>
                        </div>
                        <div >
                            <h2 className="text-lg font-semibold text-gray-700">Amount (Lakhs)</h2>
                            <p className="text-lg text-gray-500">{projectDetails.amount}</p>
                        </div>
                    </div>
                    <div className="border-l pl-8">
                        <h2 className="text-lg font-semibold text-gray-700">PI/ Co-PI</h2>
                        <ul className="text-lg text-gray-500">
                            {projectDetails.investigators.map((investigator, index) => (
                                <li className="mt-2"key={index}>{investigator},</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsoredResearchProject;
