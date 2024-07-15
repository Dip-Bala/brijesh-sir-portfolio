import React from 'react';

function PublicationList({ title, publications }) {
    return (
        <div className=" p-4 m-4">
            <h2 className="text-center text-4xl font-md mb-4 text-indigo-600">{title}</h2>
            <div className="grid grid-cols-3 gap-4 p-2 box ">
            {publications.map(pub => (
                <div key={pub.id} className="border border-slate-200 p-4 rounded-lg rounded-md overflow-hidden ring-1 ring-purple-400 ring-opacity-30 ring-offset-4 ring-offset-indigo-200 shadow-lg">
                    <h3 className="text-md font-semibold mb-2 pb-2 border-b">{pub.title}</h3>
                    <p><strong>Authors:</strong> {pub.authors}</p>
                    <p><strong>Journal:</strong> {pub.journal}</p>
                    <p><strong>Details:</strong> {pub.details}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default PublicationList;
