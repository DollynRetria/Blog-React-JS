import React from 'react';
import baniere from '../baniere.jpg';

const divStyle = {
  backgroundColor: '#232325',
  //height:'250px',

};

const Baniere = () => {
  return (
    <div className="baniere-wrapper" style={divStyle}>
    	<img src={baniere} alt="" />
    </div>
  )
}

export default Baniere;