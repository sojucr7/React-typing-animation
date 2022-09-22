import './App.css';
import React from 'react';
import logo from './logo.svg';
import TypeWriter from './components/TypeWriter';

function App() {

  const config=[
    {
      word:"Where do I start?",      
      deleteAll:true,
      pauseFor:.5,
    },
    {
      word:"Youtube tutorials?",      
      deleteAll:true,
      pauseFor:.5
    },
    {
      word:"udemy courses??",      
      deleteAll:true  ,
      pauseFor:1,
    },
    {
      word:"No,Let's start by building some projects",  
      pauseFor:1,    
      deleteAll:true
    }
  ]
  return (
   <>
   <TypeWriter config={config}/>
   </>
  );
}

export default App;
