import './App.css';
import React from 'react';
import logo from './logo.svg';
import TypeWriter from './components/TypeWriter';

function App() {

  const config=[
    {
      word:"Where do I start?",
      pauseFor:1000
    },
    {
      word:"\n\nfunctio",
      deleteChars:7
    },
    {
      word:"\n\n\n\nconst temp",
      pauseFor:150,
      deleteAll:10
    }
  ]
  return (
   <>
   <TypeWriter config={config}/>
   </>
  );
}

export default App;
