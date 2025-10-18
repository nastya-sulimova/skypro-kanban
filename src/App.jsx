import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopUser from "./components/popups/PopUser/PopUser"
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading (false)
    }, 3000);
  }, [])

  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <PopUser />

        <PopNewCard />

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header />
        <Main loading={loading}/>
      </div>

    </>
  );
}

export default App;
