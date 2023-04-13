import React from 'react'
import catData, { Post } from '../data/Data'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
    {Post.slice(0,1).map((a)=>(
        <div className='position-relative'>
        <img className='w-100' src={a.urlToImage} alt="" />
        <h2 className='position-absolute bottom-0 start-0 p-2 text-light fw-bold'>
            <Link className='link-light' to={`/details/${a.id}`}>
            {a.title}
            </Link>
            </h2>
      </div>
    ))}
      
    </>
  )
}

export default Banner
