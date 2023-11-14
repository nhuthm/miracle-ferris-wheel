// Modal.js
import React from 'react';
import Modal from 'react-modal';
import * as Components from './LoginComponent';

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  if (!content) {
    return null; // Render nothing if content is not provided
  }

  const { src, caption } = content;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '400px', // Set a fixed width
          height: '500px', // Set a fixed height
          margin: 'auto',
          padding: '20px',
          alignContent: 'center',
          borderRadius: '10px',
        },
      }}
    >
      <h2>Here is the place we go for dinner</h2>
      <h3>Take the screenshot and sent it to me NhiNhi</h3>
      <img src={src} alt={caption} style={{ maxWidth: '100%', maxHeight: '80%', objectFit: 'contain', alignContent: 'center', borderRadius: '10px'}} />
      <p>{caption}</p>

      <Components.Button onClick={onRequestClose}>Close</Components.Button>
    </Modal>
  );
};

export default CustomModal;
