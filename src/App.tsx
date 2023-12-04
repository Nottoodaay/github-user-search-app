import { useState } from "react"

import { DisplayUserComponent } from "./components/DisplayUserComponent"
import { SearchBarComponent } from "./components/SearchBarComponent" 
import { ToggleDarkMode } from "./atoms/ToggleDarkMode"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <>
    {darkMode ? 
      <div className=" w-[100vw] h-[100vh] items-center flex flex-col gap-4 justify-center bg-[#141D2F]">
      <div className=" flex items-baseline gap-[110px]">
        <h1 className=" text-2xl font-bold text-[#FFFFFF]">Devfinder</h1>

        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <SearchBarComponent darkMode={darkMode}/>
      <DisplayUserComponent darkMode={darkMode}/>
    </div>
  
    :
    <div className=" w-[100vw] h-[100vh] items-center flex flex-col gap-4 justify-center bg-[#F6F8FF]">
      <div className=" flex items-baseline gap-[110px]">
        <h1 className=" text-2xl font-bold text-[#222731]">Devfinder</h1>

        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <SearchBarComponent darkMode={darkMode}/>
      <DisplayUserComponent darkMode={darkMode}/>
    </div>
    }
    
    </>
  )
}

export default App
