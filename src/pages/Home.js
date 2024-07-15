import React from 'react';
import ProfileContacts from '../components/ProfileContacts';
import Experience from '../components/Experience';
import Education from "../components/Education";
import Achivements from "../components/Achivements.jsx";
function Home() {
  return (
   <div>
    <ProfileContacts/>
    <Experience/>
    <Education/>
    <Achivements/>

   </div>
  );
}

export default Home;
