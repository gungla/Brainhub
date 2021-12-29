import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      size='sm'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        marginTop: '45%',
        display: 'block',
      }}>
    </Spinner>
  )
}

export default Loader;
