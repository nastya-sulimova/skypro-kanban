import { useState } from 'react'
// import {reactLogo} from '../public/images'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {viteLogo} from '../public/images'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div id="root">
         <a href="https://vitejs.dev" target="_blank">
          {/* Картинка из public - используем прямой путь */}
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* React лого тоже из public */}
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
         </div>
         <script type="module" src="/src/main.jsx"></script>
    </>
  )
}

export default App
