import React from 'react';
import ReactDOM from 'react-dom';

const imagesArray =["stewie.jpg","stewie.jpg"]


        
// class Card extends React.Component() {
    
//     rand = Math.random({imagesArray}) >= 0.5;
//     render() {
//         return (
//             <img 
//             src = "stewie.jpg"
//             alt = 'alt'/>
//         );
//     }
// }

function Card(props) {
    return (
      <div className="card text-center">
        <div className="card-body">{props.children}</div>
      </div>
    );
  }

  

export default Card;