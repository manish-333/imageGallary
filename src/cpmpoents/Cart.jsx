import React from 'react'

const data = [
    {
        id:1,
        image:'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },

{
  id:2,
  image:'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
},
];


const Cart = () => {
    
  return (
    <div className='maincart'>
        {data.map((item,index)=>{
            return(
                 <div key={index} className="incart">
<img src={item.image}></img>
                </div>)
        })}
     
    </div>
  )
}

export default Cart
