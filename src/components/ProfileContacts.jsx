import React from 'react'
const contacts = {
    Phone: "+91-9997972815",
    Email: "brijeshkr@igdtuw.ac.in, bkiitr@gmail.com, bkiitr@ieee.org",
    Office: "Room No: 209, First Floor, Administrative Block, Indira Gandhi Delhi Technical University, Delhi-110006, India"
};
function ProfileContacts() {
    return (
        <div className="w-500 p-8 mx-28">
            <div className="flex flex-row  border  border-transparent p-8 justify-center items-center ">
                {/* profile photo bg-gray-200*/}
                <div className="p-4 border border-transparent rounded-full shadow-lg shadow-indigo-100 ">
                    <img
                        src="/assets/brijeshkumar.png"
                        alt="profile-photo"
                        width="400"
                        className="border rounded-full "

                    />
                </div>
                {/* main profile overview */}
                <div className="px-8 ml-10 w-9/12 ">
                    <h1 className="text-6xl font-xl text-gray-500 mb-2">Brijesh Kumar</h1>
                    <hr 
                    className = "h-4"/>
                    <p className="mt-2 bg-white text-xl font-semibold  w-100 text-slate-600">Director Planning and Professor, IGDTUW</p>
                    <p className="py-6 text-2xl text-justify text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatum tenetur est maiores accusantium blanditiis repellendus cumque sed natus, suscipit vel modi, mollitia, qui odit deserunt odio minus. Illum, earum!
                    </p>
                    
                </div>
            </div>
            
            <div className="flex flex-row gap-8 text-md font-bold pb-10 justify-center items-center" >

                <div className="flex flex-row mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    {/* <p className="text-base font-medium ml-2">{contacts.Phone}</p> */}
                </div>
                <div className="flex flex-row mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>

                    {/* <p className="text-base font-medium ml-2">{contacts.Email} </p> */}
                </div>

                <div className="flex flex-row mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                    </svg>
                    {/* <p className="text-base font-medium ml-2">{contacts.Office}</p> */}
                </div>

            </div>
        </div>
    )
}

export default ProfileContacts