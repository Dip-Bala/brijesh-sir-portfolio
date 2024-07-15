import React, { useState } from 'react';

function Resume() {
    const [downloadMessage, setDownloadMessage] = useState('');

    const handleDownload = (filename) => {
        setDownloadMessage(`${filename} has been downloaded`);
        setTimeout(() => {
            setDownloadMessage('');
        }, 3000); // Hide the message after 3 seconds
    };

    return (
        <div className="flex flex-col justify-center items-center p-16">
            <div className="flex flex-wrap justify-center mb-4">
                <div
                    className="w-auto p-4 border rounded-2xl m-4 text-xl text-white font-semibold bg-indigo-400 hover:bg-indigo-500 shadow-lg shadow-purple-200"
                    onClick={() => handleDownload('Profile')}
                >
                    <a href="/assets/brijeshkumar.png" download="Profile">
                        Profile↗
                    </a>
                </div>
                <div
                    className="w-auto p-4 border rounded-2xl m-4 text-xl text-white font-semibold bg-indigo-400 hover:bg-indigo-500 shadow-lg shadow-purple-200"
                    onClick={() => handleDownload('Short Resume')}
                >
                    <a href="/assets/brijeshkumar.png" download="Short Resume">
                        Short Resume↗
                    </a>
                </div>
                <div
                    className="w-auto p-4 border rounded-2xl m-4 text-xl text-white font-semibold bg-indigo-400 hover:bg-indigo-500 shadow-lg shadow-purple-200"
                    onClick={() => handleDownload('Long Resume')}
                >
                    <a href="/assets/brijeshkumar.png" download="Long Resume">
                        Long Resume↗
                    </a>
                </div>
            </div>
            {downloadMessage && (
                <div className="text-xl text-purple-600 mt-4">
                    {downloadMessage}
                </div>
            )}
        </div>
    );
}

export default Resume;
