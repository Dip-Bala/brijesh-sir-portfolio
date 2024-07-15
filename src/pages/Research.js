import React from 'react'
import Descriptions from '../components/Descriptions'
import ResearchInterests from '../Objects/ResearchInterests.jsx'
import SponsoredResearchProject from '../Objects/SponsoredResearchProject.jsx'
// function createDescription(researchInterest) {
//   return (
//    {researchInterest.map((index, property) => {
//     <Descriptions/>
//    })});
// }

function Research() {
  return (
    <div className="">
      <div className="">
        <ResearchInterests/>
        <SponsoredResearchProject/>
        
      </div>

    </div>
  )
}

export default Research