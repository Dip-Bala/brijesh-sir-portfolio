import React from 'react'
import Patent from '../Objects/Patent';
import Books from '../Objects/Books';
import PublicationList from '../components/PublicationList';
import publications from  '../Objects/Published';
function Publications() {
  return (
    <div>
      <Patent/>
      <Books/>
      <PublicationList title="SCI Indexed Journals" publications={publications.SCIIndexed} />
      <PublicationList title="National Journals" publications={publications.NationalJournals} />
      <PublicationList title="International Conferences" publications={publications.InternationalConferences} />
      <PublicationList title="National Conferences" publications={publications.NationalConferences} />
    </div>
  )
}

export default Publications