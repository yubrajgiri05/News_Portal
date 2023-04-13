import React from 'react'
import Banner from '../Comp/Banner'
import { Post } from '../data/Data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Banner />
      <div className="row">
        <div className="col-lg-9">
          {Post.map((q)=>(
          <div className="row py-3 border-top border-bottom">
            <div className="col-lg-4">
              <img className='w-100' src={q.urlToImage} alt="" />
            </div>
            <div className="col-lg-8">
              <h3><Link className='link-dark' to={`/details/${q.id}`}>{q.title}</Link></h3>
            </div>
          </div>
          ))}
        </div>

        <div className="col-lg-3">
<h4>THIS WEEK ON E-PAPER</h4>
<img className='w-100' src="https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-nepalitimes/swp/asv65r/media/20230401030452_9632eaba710bebe2a9d4bc71b7f73d90bd266a9a9b7fac0cf68575e5f547069a.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
