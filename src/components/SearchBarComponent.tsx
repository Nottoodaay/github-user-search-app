
import searchbar from '../assets/icon-search.svg'

interface SearchBar{
  darkMode: boolean
}

export const SearchBarComponent = ({darkMode}:SearchBar) => {
  return (
    <>
    {darkMode ? 
      <div className=" w-[328px] h-[60px] flex justify-between p-2 items-baseline bg-[#1E2A47] rounded-lg">
        <img className=' w-[20px] h-[20px]' src={`${searchbar}`} alt="" />
        <textarea className=' w-[186px] h-[26px] resize-none placeholder-center bg-[#1E2A47] placeholder-[#ffffff]' 
        placeholder='Search GitHub username...'
        ></textarea>
        <button className=' w-[84px] h-[46px] rounded-md bg-[#0079FF]
        text-sm font-bold text-[#ffffff] 
        '>Search</button>
      </div>
    
    : 
    <div className=" w-[328px] h-[60px] flex justify-between p-2 items-baseline bg-[#ffffff] rounded-lg">
        <img className=' w-[20px] h-[20px]' src={`${searchbar}`} alt="" />
        <textarea className=' w-[186px] h-[26px] resize-none placeholder-center' 
        placeholder='Search GitHub username...'
        ></textarea>
        <button className=' w-[84px] h-[46px] rounded-md bg-[#0079FF]
         text-sm font-bold text-[#ffffff] 
        '>Search</button>
    </div>
    }
    </>
  )
}
