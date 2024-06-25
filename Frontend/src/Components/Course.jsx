import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
const Course = () => {
  // const filterlist = list

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4"'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here!:)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore Laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nescident debitis dolore non aspernatur prasentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut, Nois quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to='/'>
          <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 text-white'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>{
             return <Cards key={item.id} item={item}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Course