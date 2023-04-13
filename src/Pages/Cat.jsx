import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Post } from '../data/Data'


function Cat() {
  let {cid}=useParams()
  let ca=Post.filter((q)=>(q.cat==cid))
  return (
    <div className='py-4'>
      Category
      {ca.map((w)=>(
        <div className="row py-3 border-top border-bottom my-2">
          <div className="col-lg-4">
            <img className='w-100' src={w.urlToImage}/>
          </div>
          <div className="col-lg-8">
          <h3><Link className='link-dark' to={`/details/${w.id}`}>{w.title}</Link></h3>
          </div>
        </div>
      ))}
      {ca.length == 0 &&
      <h2>NO POST</h2>
      }
    </div>
  )
}

export default Cat
