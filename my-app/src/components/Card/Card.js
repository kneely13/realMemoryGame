import React from 'react';



// function changeImage(e) {
//   e.target.setAttribute('src', characters[random + charactersLis]);
//   console.log(random + "has just been changed")
// }


const Card = props => (
  <div className="card">
        <div className="card-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Image:</strong> {props.image} 
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
      </span>
  </div>
);

export default Card;