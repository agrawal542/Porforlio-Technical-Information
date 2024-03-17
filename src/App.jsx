import React from 'react'
import Card from './Components/Card'
import { SocialData } from './Components/Data'
import { CodingData } from './Components/Data'

function App() 
{


  return (
    <div className='w-screen bg-gray-200 min-h-screen border flex justify-items-center flex-col px-10 pt-5'>
        <div className=' border text-4xl text-center font-serif  mb-10'>All The Link Cards </div>
        <div className='flex flex-wrap gap-4'>
          <Card datas = {SocialData}/>
          <Card datas = {CodingData}/>
        </div>
    </div>

  )
}

export default App