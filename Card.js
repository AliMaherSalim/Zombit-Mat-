import React from 'react';
import './Card.css';
import img1 from './img1.jpg';

const Card = () => {

    return (
        <div class="card">
        <img src={img1} alt="Avatar" style="width:100%"/>
        <div class="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
}

export default Card;