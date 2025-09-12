import React from 'react'
import Location from './Location'
import Salary from './Salary';
import Posting from './Posting';
import Experience from './Experience';
import Employment from './Employment';
import Right from './Right';
import "./Combine.css"
import JobCard from './JobCard';

function Combine() {
  return (
    <div className='combine' >
      <div className='left-side'>
        <Location/>
      <Salary/>
      <Posting/>
      <Experience/>
      <Employment/>
      </div>
      <div className='centeritem'>
      <JobCard/>
      </div>
      <div className='right-side'>


<Right/>

      </div>
    </div>
  )
}

export default Combine
