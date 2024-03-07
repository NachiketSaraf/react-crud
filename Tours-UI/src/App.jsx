import React from 'react'
//Icons
import { MdOutlineCreateNewFolder } from "react-icons/md";

//Components
import Tours from './component/Tours'
import CreateTour from './component/CreateTour';
//React
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function App() {
  return (

    <div className="m-10 p-10 border-2 rounded-md border-black">

      <div className='bg-rose-500 m-5  border-2 border-rose-950 rounded-lg  flex-nowrap justify-between inline-flex '>
        <Link to='/create' className='flex p-2 gap-2 items-center' >Create <MdOutlineCreateNewFolder  /></Link>
      </div>



      <Routes>
        <Route path='/create' element={<CreateTour />} />
        <Route path='/' element={<Tours />} />
      </Routes>

      

    </div>

  )
}
