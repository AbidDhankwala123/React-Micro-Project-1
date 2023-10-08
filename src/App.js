import React, { useState } from 'react'
import './styles/App.css';
import Form from './components/Form';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';

function App() {
  let [data,setData] = useState('');
  return (
    <>
      <Form setData={setData}/>
      <div className='card-container'>
        <CardFront card={data}/>
        <CardBack card={data}/>
      </div>
      
    </>
  );
}

export default App;
