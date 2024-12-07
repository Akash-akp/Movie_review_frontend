import React from 'react'

const Group_Card = ({name,reg,imgsrc}) => {
    const cardStyles = {
        card: {
          backgroundColor: '#222', // Dark card background
          color: '#fff', // White text
          borderRadius: '10px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
          width: '300px',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',
          display: 'inline-block',
          margin: '5px',
          padding: '20px 5px'
        },
        cardHover: {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.7)',
        },
      };
  return (
    <div className='group-card' style={cardStyles.card}>
      <div>
        <img src={imgsrc} height="300px"/>
      </div>
      <h3>
        {name}
      </h3>
      <div>
        {reg}
      </div>
    </div>
  );
}

export default Group_Card;