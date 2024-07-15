import React, { useRef } from 'react';

const achievements = [
  // {
  //     title: "Appreciation Letter",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
  //     date: "December 28, 2021",
  //     details: "Received from Vice Chancellor of University for contribution as Co-Chief Investigator, Research Project Titled, 'Development of IoT and Drone based Agriculture Monitoring System with Objective of Skill Development of Socially Deprived Community' worth Grant 2.89 Crores Sponsored by Ministry of Electronics and Information Technology (MeitY), Govt. of India, Sanction on February 2, 2019."
  // },
  {
    title: "Outstanding Contribution Award 2018 as Organizing Chair",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
    date: "January 19, 2019",
    details: "Award for grand success of 5th IEEE Int. Conf. on Electrical, Electronics and Computer Engineering (UPCON-2018), Jointly organized by MMMUT Gorakhpur, India and University of the Ryukyus, Japan, Nov. 2-4, 2018, from IEEE UP Section, IIT Kanpur."
},
  {
      title: "DST and Texas Instruments Appreciation Award",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "2018",
      details: "Received from DST and Texas Instruments, India University Program, for the contribution towards online context throughout the academic year 2018."
  },
  {
    title: "IEEE Outstanding UP Section Volunteer Award 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
    date: "January 25, 2020",
    details: "Award from IEEE UP, IIT Kanpur for large and important activities organized inside and outside University under IEEE Students Branch."
},

  {
      title: "Best IEEE Student Branch Award 2018",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "January 19, 2019",
      details: "Received from IEEE UP, IIT Kanpur for large number of activities organized during the year 2018."
  },

  {
      title: "IEEE Outstanding Branch Counsellor Award 2017",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "January 28, 2018",
      details: "Received along with Cash Prize Rs. 3000/- from IEEE UP Section during AGM."
  },
  {
      title: "Texas Instruments, India University Program Appreciation Award",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "2017 and 2018",
      details: "Received the award two times for the contribution towards online context throughout the year 2017 and 2018."
  },
  {
      title: "Best Paper Award",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "November 2-4, 2018",
      details: "Received award for the Paper, 'Outcome-Based Education (OBE) Academic Planning-An Insight into All Round Development of An Engineer', 5th IEEE UP Section Int. Conf. UPCON-2018, pp. 1090-1093, (Published by IEEE)."
  },
  {
      title: "Best Paper Award",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "November 2-4, 2018",
      details: "Received award for the Paper, 'Optical Investigations of Thermally Evaporated Ge10Se60Te30 and Ge8Se60Te30In2 Chalcogenide Thin Film for Optical Memory Devices', during the 5th IEEE UP Section Int. Conf. UPCON-2018, pp. 1090-1093, (Published by IEEE)."
  },
  {
      title: "Largest IEEE Student Branch Award 2018",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDPHhImfizK1hL0H8eiYLtP9Fi3U4Wh7iaw&s",
      date: "January 19, 2019",
      details: "4th place in UP and Uttarakhand as Faculty Counsellor, SBMMMUT Gorakhpur from IEEE UP Section, IIT Kanpur during AGM-2019."
  }
];

function Achievements() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="w-full my-4 p-4">
      <h1 className="text-6xl font-lg text-indigo-700 mb-8 text-center">Achievements</h1>
      <div className="relative">
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
          <button
            className="p-2 bg-indigo-500 text-white rounded-lg"
            onClick={() => scroll(-300)}
          >
            &#10094;
          </button>
        </div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <button
            className="p-2 bg-indigo-500 text-white rounded-lg"
            onClick={() => scroll(300)}
          >
            &#10095;
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth border border-gray-200 rounded-lg space-x-4 p-4"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="flex-shrink-0 w-80 border p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-md mb-2 h-16">{achievement.title}</h2>
              <img src={achievement.img} alt="" className="w-80"/>
              <p className="text-gray-600 mb-2">{achievement.date}</p>
              <p className="text-gray-700">{achievement.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
