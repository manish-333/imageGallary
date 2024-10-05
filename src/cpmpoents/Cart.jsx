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
{
  id:3,
  image:'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
},
{
  id:4,
  image:'https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg',
},
{
id:5,
image:'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600',
},
{
  id:6,
image:'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{
  id:7,
  image:'https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{
  id:8,
  image:'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600',
}

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
