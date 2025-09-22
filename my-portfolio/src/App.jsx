import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GithubLogo from './assets/Github-Logo.png'
import LinkLogo from './assets/linkedin-logo.png'
import alejandro from './assets/alejandro.jpeg'
import capymonkey from './assets/capymonkey.mp4'
import rocky from './assets/fotoconrocky.png'
import toad from './assets/toad-mario.mp4'
import resume from './assets/alejandro_jaimes_resume__Copy_ (1).pdf'
import resumeIm from './assets/resume.png'
import './App.css'


function App() {

  return (
    <>
    <div className="flex gap-2 items-center">
      
        <div className="flex space-x-4">
    <button className="px-4 py-2 bg-blue-500 text-white rounded border-width: 60px" >
      Home
      
      </button>
    <button className="px-4 py-2 bg-green-500 text-white rounded">Experience</button>
    <button className="px-4 py-2 bg-red-500 text-white rounded">Projects</button>
    <button className="px-4 py-2 bg-yellow-500 text-white rounded">About</button>
  </div>
      <div className=" relative w-full h-screen overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          loading = 'lazy'
          
          style={{width: '10%', height: '10%'}}
        >
          
          <source src={toad} type="video/mp4" />
        </video>
        </div>
          </div>
          
  {/* Header: Text + Profile Image */}
  <div className= "flex items-center gap-10 text-white">
<div className= "flex items-center gap-10 text-white">
      <div >
        <h3 >Hello! I am</h3>
        <h2 className="font-bold">Alejandro Jaimes</h2>
        <h3 >Welcome to my portfolio</h3>
      </div>
      <div>
        <img 
        loading='lazy'
          src={alejandro} 
          alt="Alejandro" 
          
          style={{ width: '37%', height: '37%', objectFit: 'cover', borderRadius: '50%' }}
        />
        
      </div>
  </div>
    
    
      {/* Links and resume */}
    </div>
      <div>
        <a href="https://github.com/alecocosette" target="_blank">
          <img src={GithubLogo} className="logo" alt="Github Logo" />
        </a>
        <a href={resume} target="_blank">
          <img src={resumeIm} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-jaimes-coco/" target="_blank">
          <img src={LinkLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      
      
      

      
      <div className="App">
      <p> Enjoy this capybara and monkey playing together</p>
      <video width="400" height="450" controls >
      <source src={capymonkey} type="video/mp4"/>
     </video>
      </div>
    </>
  )
}

export default App
