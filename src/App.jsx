import { useState } from 'react'

import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Component/CoffeeCard'
import Navber from './Component/Navber'

function App() {
 
  const AllData=useLoaderData()
  const [coffees ,setCoffees]=useState(AllData)

  return (
    <>
      <Navber></Navber>
      <h1 className='text-center font-bold text-5xl text-pink-800'> Vite + React:{AllData.length}</h1>
     <div className='grid grid-cols-2'>
     {
        AllData.map(data => <CoffeeCard key={data._id} data={data} coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>)
      }
     </div>
     <Outlet></Outlet>
     
      
    </>
  )
}

export default App
