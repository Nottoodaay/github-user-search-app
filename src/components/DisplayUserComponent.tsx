import Octacat from '../assets/Octacat.png'
import Twitter from '../assets/icon-twitter.svg'
import Location from '../assets/icon-location.svg'
import Company from '../assets/icon-company.svg'
import Website from '../assets/icon-website.svg'

interface DisplayComponent{
    darkMode: boolean
}

export const DisplayUserComponent = ({darkMode}:DisplayComponent) => {
  return (
    <>
    {darkMode ? 
    <div className=" w-[328px] h-[518px] lg:w-[574px] lg:h-[480px] 
    flex flex-col gap-[24px] bg-[#1E2A47] p-5 rounded-2xl">
        {/* logo and username container */}
        <div className="flex gap-5  lg:gap-10">
            <img src={Octacat} className=' w-[70px] h-[70px] lg:w-[118px] lg:h-[118px] rounded-full' alt="octacat" />
            <div>
                <h2 className=' text-[#FFFFFF] font-bold text-base lg:text-2xl'>The Octocat</h2>
                <div className=' text-[#0079FF] font-normal text-[13px] lg:text-base'>@octocat</div>
                <div className='text-[#FFFFFF] font-normal text-[13px] lg:text-base'>Joined 25 Jan 2011</div>
            </div>
        </div>

        {/* description */}
        <div className=' w-[280px] lg:w-[490px] text-[#FFFFFF] font-normal text-[13px]'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Donec odio. Quisque volutpat mattis eros.
        </div>

        {/* followers repos and following */}
        <div className=' flex w-[280px] lg:w-[490px] h-[86px] items-center justify-between p-4 bg-[#141D2F]'>
            <div className='flex flex-col items-center'>
                <h3 className=' font-normal text-[11px] text-[#FFFFFF]'>Repos</h3>
                <div className=' font-bold text-base text-[#FFFFFF]'>8</div>
            </div>

            <div className='flex flex-col items-center'>
                <h3 className=' font-normal text-[11px] text-[#FFFFFF]'>Followers</h3>
                <div className=' font-bold text-base text-[#FFFFFF]'>3938</div>
            </div>

            <div className='flex flex-col items-center'>
                <h3 className=' font-normal text-[11px] text-[#FFFFFF]'>Following</h3>
                <div className=' font-bold text-base text-[#FFFFFF]'>9</div>
            </div>
        </div>

        {/*  Links */}

        <div className=' flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:w-[430px]'>
            <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                <img src={Location} alt="location"/>
                <div className=' font-normal text-[13px] text-[#FFFFFF]'>San Francisco</div>
            </div>
            <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                <img src={Website} alt="web" />
                <div className=' font-normal text-[13px] text-[#FFFFFF]'>https://github.blog</div>
            </div>
            <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                <img src={Twitter} alt="twiter" />
                <div className=' font-normal text-[13px] text-[#FFFFFF]'>Not Available</div>
            </div>
            <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                <img src={Company} alt="company" />
                <div className=' font-normal text-[13px] text-[#FFFFFF]'>@github</div>
            </div>
        </div>
    </div>
    
    
    :
    <div className=" w-[328px] lg:w-[574px] lg:h-[480px] h-[518px]
     flex flex-col gap-[24px] bg-[#ffffff] p-5 rounded-2xl">
                {/* logo and username container */}
            <div className="flex gap-5 lg:gap-10">
                <img src={Octacat} className=' w-[70px] lg:w-[118px] lg:h-[118px] h-[70px] rounded-full' alt="octacat" />
                <div>
                    <h2 className=' text-[#2B3442] font-bold text-base lg:text-2xl'>The Octocat</h2>
                    <div className=' text-[#0079FF] font-normal text-[13px] lg:text-base'>@octocat</div>
                    <div className='text-[#697C9A] font-normal text-[13px] lg:text-base'>Joined 25 Jan 2011</div>
                </div>
            </div>

            {/* description */}
            <div className=' w-[280px] lg:w-[490px] text-[#697C9A] font-normal text-[13px]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros.
            </div>
            
            {/* followers repos and following */}
            <div className=' flex w-[280px] lg:w-[490px] h-[86px] items-center justify-between p-4 bg-[#F6F8FF]'>
                <div className='flex flex-col items-center'>
                    <h3 className=' font-normal text-[11px] text-[#4B6A9B]'>Repos</h3>
                    <div className=' font-bold text-base text-[#2B3442]'>8</div>
                </div>

                <div className='flex flex-col items-center'>
                    <h3 className=' font-normal text-[11px] text-[#4B6A9B]'>Followers</h3>
                    <div className=' font-bold text-base text-[#2B3442]'>3938</div>
                </div>

                <div className='flex flex-col items-center'>
                    <h3 className=' font-normal text-[11px] text-[#4B6A9B]'>Following</h3>
                    <div className=' font-bold text-base text-[#2B3442]'>9</div>
                </div>
            </div>

            {/*  Links */}
            
            <div className=' flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:w-[430px]'>
                <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                    <img src={Location} alt="location" />
                    <div className=' font-normal text-[13px] text-[#4B6A9B]'>San Francisco</div>
                </div>
                <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                    <img src={Website} alt="web" />
                    <div className=' font-normal text-[13px] text-[#4B6A9B]'>https://github.blog</div>
                </div>
                <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                    <img src={Twitter} alt="twiter" />
                    <div className=' font-normal text-[13px] text-[#4B6A9B]'>Not Available</div>
                </div>
                <div className='flex gap-5 cursor-pointer lg:w-[154px]'>
                    <img src={Company} alt="company" />
                    <div className=' font-normal text-[13px] text-[#4B6A9B]'>@github</div>
                </div>
            </div>
        </div>
    }
    
    
    </>
  )
}
