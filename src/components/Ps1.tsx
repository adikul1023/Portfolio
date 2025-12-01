import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span style={{ color: 'var(--yellow-color)' }}>
        {config.ps1_username}
      </span>
      <span style={{ color: 'var(--gray-color)' }}>@</span>
      <span style={{ color: 'var(--green-color)' }}>
        {config.ps1_hostname}
      </span>
      <span style={{ color: 'var(--gray-color)' }}>:$ ~ </span>
    </div>
  );
};

export default Ps1;
