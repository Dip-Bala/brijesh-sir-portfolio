import React from 'react';
const patents = [
    {
      contributors: "A.P.S. Rathod, P. Mittal and Brijesh Kumar",
      title: "A Single Gated Dual Channel OTFT Device (Published)",
      publisherDetails: {
        applicationNo: "201711029140",
        applicationDate: "17.08.2017",
        publicationNo: "201711029140",
        publicationDate: "22.02.2019",
        type: "Indian Patent"
      },
      year: "Published Feb. 2019"
    }
];

function PatentList() {
  return (
    <div className="flex flex-col p-10 bg-slate-100 justify-center items-center">
      <h1 className="text-4xl font-lg text-indigo-700 mb-8 text-center">Published Patents</h1>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl space-y-6">
        {patents.map((patent, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-gray-700">{patent.title}</h2>
            <p className="text-lg text-gray-600">Contributors/Inventors: {patent.contributors}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Publisher Details</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Application No./Date: {patent.publisherDetails.applicationNo} / {patent.publisherDetails.applicationDate}</li>
                <li>Publication No./Date: {patent.publisherDetails.publicationNo} / {patent.publisherDetails.publicationDate}</li>
                <li>Type: {patent.publisherDetails.type}</li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 mt-4">Year: {patent.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatentList;
