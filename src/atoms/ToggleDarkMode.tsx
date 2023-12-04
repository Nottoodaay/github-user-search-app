import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg'

interface DarkMode{
    darkMode: boolean,
    setDarkMode: (value: boolean) => void

}

export const ToggleDarkMode = ({darkMode, setDarkMode}:DarkMode) => {

  const handleOnClick = () =>{
    setDarkMode(!darkMode)
  }

  return (
    <>
        {darkMode ? 
        <div className=' flex gap-4 cursor-pointer' onClick={handleOnClick}>
            <h2 className=' font-bold text-[13px] text-[#FFFFFF] tracking-[2.5px]' >LIGHT</h2>
            <img src={Sun} alt="sun" className=" w-[20px] h-[20px]"/>
        </div>
        : 
        <div className=' flex gap-4 cursor-pointer' onClick={handleOnClick}>
            <h2 className=' font-bold text-[13px] text-[#4B6A9B] tracking-[2.5px]' >DARK</h2>
            <img src={Moon} alt="sun" className=" w-[20px] h-[20px]"/>
        </div>
         }
    </>
  )
}
