import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <h2>Accordion project app</h2>
    {data.map((n)=>{
        return(<SingleQuestion value={n}/>)
    })}
   
  </main>
}

export default App;