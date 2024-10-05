import React from "react";
import { MdDescription } from "react-icons/md";

const datanext = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      descriptions: [
        "This is a beautiful mountain landscape.",
        "It is located in the Alps.",
        "Perfect for hiking and photography."
      ],
  },
  {
    id: 2,
    image:
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80',
      descriptions: [
        "This is a beautiful mountain landscape.",
        "It is located in the Alps.",
        "Perfect for hiking and photography."
      ],
  },
  
  {
    id: 3,
    image:
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80',
      descriptions: [
        "This is a beautiful mountain landscape.",
        "It is located in the Alps.",
        "Perfect for hiking and photography."
      ],
  },
  {
    id: 2,
    image:
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80',
      descriptions: [
        "This is a beautiful mountain landscape.",
        "It is located in the Alps.",
        "Perfect for hiking and photography."
      ],
  }
];

const Cartnext = () => {
  return (
    <div className="cartnext">
      {datanext.map((item, index) => {
        return (
          <div className="inside">
            {/* <img src="{item.image}"></img> */}
            <div key={index} className="top">
              <img src={item.image}></img>
            </div>
            <div className="bottom">
                <p>{item.descriptions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cartnext;
