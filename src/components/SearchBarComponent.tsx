
import { useState } from 'react'
import { GithubUser } from '../githubUserInterface'

import searchbar from '../assets/icon-search.svg'

import axios, {AxiosError} from 'axios'

interface SearchBar{
  darkMode: boolean,
  setGithubUser: (value: GithubUser) => void
}

export const SearchBarComponent = ({darkMode, setGithubUser}:SearchBar) => {

  const [userForSearch, setUserForSearch] = useState<string>('')
  const [error, setError] = useState<AxiosError | null>(null)
     
  const handleChange = (value: string) =>{
    setUserForSearch(value)
  }
  
  const searchUser = async () =>{
    try {
      const  response = await axios.get(`https://api.github.com/users/${userForSearch}`) 
      setError(null)
      setGithubUser(response.data)
    } catch (error: any) {
      setError(error)
    }
  }

  return (
    <>
    {darkMode ? 
      <div className=" w-[328px] lg:w-[574px] h-[60px] flex justify-between p-2 items-baseline bg-[#1E2A47] rounded-lg">
        <img className=' w-[20px] h-[20px]' src={`${searchbar}`} alt="" />
        <textarea className=' w-[186px] lg:w-[254px] h-[26px] resize-none placeholder-center bg-[#1E2A47] placeholder-[#ffffff]' 
        placeholder='Search GitHub username...'
        onChange={(e)=>handleChange(e.target.value)}
        ></textarea>
        <button className=' w-[84px] h-[46px] rounded-md bg-[#0079FF]
        text-sm font-bold text-[#ffffff] 
        '
        onClick={searchUser}
        >Search</button>
      </div>
    
    : 
    <div className=" w-[328px] lg:w-[574px] h-[60px] flex justify-between p-2 items-baseline bg-[#ffffff] rounded-lg">
        <img className=' w-[20px] h-[20px]' src={`${searchbar}`} alt="" />
        <textarea className=' w-[186px] lg:w-[254px] h-[26px] resize-none placeholder-center' 
        placeholder='Search GitHub username...'
        onChange={(e)=>handleChange(e.target.value)}
        ></textarea>
        {error ? <div className=' hidden lg:block text-[#F74646] font-bold text-[15px]'>No Result</div> 
        : <div className=' hidden'></div>}
        <button className=' w-[84px] h-[46px] rounded-md bg-[#0079FF]
         text-sm font-bold text-[#ffffff] 
        '
        onClick={searchUser}
        >Search</button>
    </div>
    }
    </>
  )
}
