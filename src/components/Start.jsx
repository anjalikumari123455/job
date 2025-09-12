import React from 'react'
import'./Start.css';

import Combine from './Combine';


function Start() {
  return (
   <div className="h">
      <h1>
        Find your <span>new job</span> today
      </h1>
      <p>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

      <div className="search-bar">
        <input type="text" placeholder="🔍What position are you looking for ?" />
        <input type="text" placeholder="📌Location" />
        <span><button>Search</button></span>
      </div>
<Combine/>
      
    </div>
    
  )
}

export default Start
