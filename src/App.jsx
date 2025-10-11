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
         <div id="root"></div>
         <script type="module" src="/src/main.jsx"></script>
    </>
  )
}

export default App
