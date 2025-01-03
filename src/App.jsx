import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>
     <nav>
      <ul>
        <li className="logo">Poets Stage</li>
        <li><a>Home</a></li>
        <li><a>Join</a></li>
        <li><a>Browse</a></li>
        <li><a>Contact</a></li>
      </ul>
     </nav>
      </header>
    
      <main>
      <div className='hero-container'>
      <h1 >
        Poets Stage
  </h1>
  <p>
    The Worlds a stage like William Shakespeare declared , The Poets Stage is a community of like-minded poets and creatives 
  </p>
  <button>Browse</button>
  <button>Join</button>
  </div>
      </main>
     
       </div>
    </>
  )
}

export default App
