import React from 'react'

const Header = ({logo, menu }) => {
  return (
    <div>
       <h1 className='font-[800] text-[20px] text-gray-500 pl-2 my-2 mt-[4.5rem] md:mt-0'>Create Announcement</h1>
        <form className='bg-red-400 flex flex-col md:justify-between sm:justify-start md:items-center sm:items-start gap-4 w-full md:w-full md:px-40 sm:px-0 py-6 mt-2  rounded-sm mx-4 md:mx-0 px-2'>
          <div className='flex justify-between items-center w-full gap-5 '> 
            <input type='text' placeholder='Title' className='outline-none p-2 rounded-sm w-[70%] border border-gray-700'/>
            <input type='text' placeholder='Posted By:' className='outline-none p-2 rounded-sm w-[30%] border border-gray-700 '/>
          </div>
          <div className='flex justify-start items-start w-full'>
            <textarea name="description" id="" className='w-full outline-none p-2 rounded-sm border border-gray-700'></textarea>
          </div>
          <div className='flex justify-center items-center w-full mt-4'>
            {/* This is the square div acting as a file input */}
            <div 
              className='w-[25rem] h-[12rem] bg-gray-200 rounded-sm flex justify-center items-center cursor-pointer border-gray-700 border' 
              onClick={handleDivClick}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className='w-full h-full object-cover rounded-sm' />
              ) : (
                <span className='text-gray-500'>Click to upload</span>
              )}
            </div>
            <input 
              type='file' 
              id='fileInput' 
              className='hidden' 
              onChange={handleImageChange} 
            />
          </div>
          <div className='bg-amber-500 p-1 rounded-lg px-4 cursor-pointer'>
            <input type='submit' value='Submit' className='font-[600]'/>
          </div>
        </form>

        
        <h1 className='font-[700] text-[20px] text-gray-700 pl-2  mt-[4rem]'>Latest Announcement</h1>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4 w-full mb-10'>

          {
            AnnouncementArray.map((announcement, index) => (
              <div key={index} className='bg-red-200 p-2 w-full rounded-sm'>
                <div className='w-full'>
                  <div className='flex justify-between items-center relative'>
                    <h2 className='font-[700] text-[18px] text-black'>{announcement.title}</h2>
                    <HiOutlineDotsHorizontal 
                      className='cursor-pointer'
                      onClick={() => handleModalToggle(index)}
                    />

                    {/* Conditionally render the edit/delete options */}
                    {activeModalIndex === index && (
                      <div className='absolute -bottom-[75px] right-0 bg-stone-400 rounded-sm z-10'>
                        <div className='cursor-pointer p-2' onClick={() => alert("Edit clicked")}>Edit</div>
                        <div className='cursor-pointer p-2' onClick={() => alert("Delete clicked")}>Delete</div>
                      </div>
                    )}
                  </div>
                  <div className='w-full overflow-x-hidden'>
                    <p className='text-[16px] text-wrap text-gray-600'>{announcement.description}</p>
                  </div>
                </div>

                <div>
                  <img src={announcement.image} alt={announcement.title} className='w-[300px] h-[150px] rounded-sm'/>
                </div>

                <div className='flex justify-between items-center mt-1'>
                  <p className='text-[14px]'>{announcement.postedBy}</p>
                  <p className='text-[14px]'>{announcement.date}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Header
