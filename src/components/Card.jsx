import React from 'react'

const Card = ({post}) => {
  return (
    <div className='card' >
      <span className='title' >{post.title}</span>
      <img className='image' src={post.img} alt="" />
      <p className='desc' >{post.desc}</p>
      <buuton className='cardButton' >Read More</buuton>
    </div>
  )
}

export default Card
