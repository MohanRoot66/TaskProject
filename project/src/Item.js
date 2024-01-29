import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ icon, title, desc }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 2 }}>
  <FontAwesomeIcon icon={icon} size="2x" />

  <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
    <span className='title' style={{ marginTop: '2px', marginBottom: '4px' }}>{title}</span>
    <p style={{ marginTop: 1 }}>{desc}</p>
  </div>
</div>

  );
}

export default Item;
