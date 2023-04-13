import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../data/Data'

function Single() {
  let { id } = useParams()
  let dd = Post.find((a) => a.id==id)
  return (
    <div className='py-3'>
      <h2>{dd.title}</h2>
      <img className='w-100' src={dd.urlToImage}/>
      <p>{dd.description}</p>
    </div>
  )
}

export default Single
