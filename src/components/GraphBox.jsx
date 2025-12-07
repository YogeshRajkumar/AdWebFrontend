import React from 'react'

function GraphBox({key , item}) {
  return (
    <div className={`${item.id > 3 ? 'col-span-6 md:col-span-3' : 'col-span-6 md:col-span-2'} bg-white text-2xl text-black flex flex-col justify-center
                                items-start p-5 rounded-xl border border-gray-300 space-y-4`}>
        <img src={item.image} alt="" />
        <h1 className='font-bold text-2xl '>{item.title}</h1>
        <p className='text-lg text-gray-600'>{item.p}</p>
    </div>
  )
}

export default GraphBox