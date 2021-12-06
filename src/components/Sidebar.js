import React from "react";

const Sidebar = ({texts, refs}) => {
  return (
    <div className='hidden md:block items-center flex flex-col fixed bottom-2 right-2 rounded-lg bg-blue-500'>
      <button className='w-full p-3 text-white font-bold text-center hover:bg-blue-700 cursor-pointer rounded-t-lg'
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        Top
      </button>
      <hr/>
      {texts.map((text, i) => {
        if (i === texts.length - 1) {
          return (
            <button
              className='w-full p-3 text-white font-bold text-center hover:bg-blue-700 cursor-pointer rounded-b-lg'
              onClick={() => refs[i].current.scrollIntoView({behavior: 'smooth'})}
              key={i}>
              {text}
            </button>
          )
        } else {
          return (
            <div key={i}>
              <button
                className='w-full p-3 text-white font-bold text-center hover:bg-blue-700 cursor-pointer'
                onClick={() => refs[i].current.scrollIntoView({behavior: 'smooth'})}>
                {text}
              </button>
              <hr/>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Sidebar