import React from 'react';

const contacts = {
    Phone: "+91-9997972815 (Personal), Fax: No. +91-551-2270011",
    Email: "brijeshkr@igdtuw.ac.in (Official); bkiitr@gmail.com and bkiitr@ieee.org",
    Office: "https://maps.app.goo.gl/ngaypDDkQBX6Q8Yx6",
    UniversityWebsite: "http://www.mmmut.ac.in",
    LinkedIn: "https://www.linkedin.com/in/prof-dr-brijesh-kumar-ph-d-iit-roorkee-17b7658b/",
    Publications: "https://scholar.google.co.in/citations?user=xJgLdscAAAAJ",
    ORCID: "https://orcid.org/0000-0003-0271-3445",
    ScopusID: "8514812300",
    WebOfScience: "A-7485-2012"
};

function Footer() {
    return (
        <div className="flex flex-col border rounded-xl mt-4 p-8 bg-slate-100 justify-center items-center">
            <h1 className="text-6xl text-center font-semibold mb-4">Contacts</h1>
            <div className="flex flex-row text-lg text-slate-600 p-8 gap-8 justify-center min-w-full ">
                <div className="flex flex-col w-7/12 gap-4 ">
                    <div className="flex hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 mr-3">
                            <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
                        </svg>
                        <span>{contacts.Phone}</span>
                    </div>
                    <div className="flex hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <span className='flex-wrap'>{contacts.Email}</span>
                    </div>
                    <a href={contacts.Office} target="_blank" rel="noopener noreferrer" className="flex items-cente  hover:text-emerald-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" />
                        </svg>
                        <span className='flex-wrap'> Room No: 209, First Floor, Administrative Block, IGDTUW, Delhi-110006, India </span>
                    </a>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-4 ">
                    <a href={contacts.UniversityWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25zm0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25z" />
                            <path d="M15.47 12H12v3.75a.75.75 0 0 1-
1.5 0V12H8.53a.75.75 0 0 1 0-1.5H10.5V6.75a.75.75 0 0 1 1.5 0V10.5h3.47a.75.75 0 0 1 0 1.5z" />
                        </svg>
                        University Website
                    </a>
                    <a href={contacts.LinkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM8.4 18H5.8V10.8h2.6V18zM7.1 9.2c-0.8 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.4c0 0.8-0.6 1.3-1.3 1.3zM18 18h-2.6v-4.3c0-1-0.4-1.6-1.2-1.6-0.7 0-1.1 0.5-1.3 1.1-0.1 0.2-0.1 0.4-0.1 0.6V18H10v-7.2h2.5v1c0.4-0.6 1.1-1.2 2.3-1.2 1.7 0 2.9 1.1 2.9 3.3V18z" />
                        </svg>
                        LinkedIn Profile
                    </a>
                    <a href={contacts.Publications} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25zm-1.5 15V9.75a1.5 1.5 0 0 1 3 0v7.5a1.5 1.5 0 0 1-3 0zm1.5-12a1.5 1.5 0 1 1 1.5 1.5A1.5 1.5 0 0 1 12 5.25z" />
                        </svg>
                        Online Research Publications
                    </a>
                    <a href={contacts.ORCID} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mr-3">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2.78 14.78a1 1 0 0 1-1.45 0L5.22 13.89a1 1 0 0 1 0-1.45l3.11-3.11a1 1 0 1 1 1.45 1.45L7.92 12l2.3 2.3a1 1 0 0 1 0 1.45zm8.56 0a1 1 0 0 1-1.45 0L13.72 15l-2.3-2.3a1 1 0 0 1 0-1.45l3.11-3.11a1 1 0 1 1 1.45 1.45L16.08 12l2.3 2.3a1 1 0 0 1 0 1.45z" />
                        </svg>
                        ORCID
                    </a>
                </div>
            </div>
            <div className="text-center mt-4 border-t border-gray-600">
                <p>@2024 Dipanwita Bala</p>
            </div>
        </div>
    );
}

export default Footer;
