import React, { useState } from 'react';
import CustomModal from './Modal';
import './Dashboard.css';
import * as Components from './LoginComponent';

import TabGallery from './components/tab-gallery/tab-gallery';
import hadilao from './images/hadilao.png';
import manwah from './images/manwah.jpeg';
import unatoto from './images/unatoto.jpeg';
import dmaris from './images/dmaris.jpeg';
import hutong from './images/hutong.png';
import phodinh from './images/phodinh.jpeg';
import happylamb from './images/happylamd.jpeg';
import nguuphon from './images/nguuphon.jpeg';
import chang from './images/chang.jpeg';
import somthai from './images/somthai.png';

const collection = [
  { src: hadilao, caption: "Hadilao" },
  { src: manwah, caption: "Manwah" },
  { src: unatoto, caption: "Unatoto" },
  { src: dmaris, caption: "DMaris" },
  { src: hutong, caption: "Hutong" },
  { src: phodinh, caption: "Pho Dinh Uratei" },
  { src: happylamb, caption: "Happy Lamb" },
  { src: nguuphon, caption: "Nguu Phon" },
  { src: chang, caption: "Chang" },
  { src: somthai, caption: "Som Thai" },
];

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const pickRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * collection.length);
    const randomItem = collection[randomIndex];
    setSelectedItem(randomItem);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="Dashboard">
      <h2>Dinner Location Collection</h2>
      <p>Click on each image below to show the corresponding place.</p>

      <TabGallery input={collection} ratio={`10:10`}/>


      <Components.Button onClick={pickRandomItem}>Click Here</Components.Button>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        content={selectedItem}
      />
    </div>
  );
}

export default Dashboard;
