import React from 'react';
import './Dashboard.css';

import TabGallery from './components/tab-gallery/tab-gallery';
import hadilao from './images/hadilao.png';
import manwah from './images/manwah.jpeg';
import unatoto from './images/unatoto.jpeg';
import unatoto1 from './images/unatoto.jpeg';

const collection = [
  { src: hadilao, caption: "Caption eleven" },
  { src: manwah, caption: "Caption twelve" },
  { src: unatoto, caption: "Caption thirteen" },
  { src: unatoto1, caption: "Caption thirteen" },
  { src: hadilao, caption: "Caption eleven" },
  { src: manwah, caption: "Caption twelve" },
  { src: unatoto, caption: "Caption thirteen" },
  { src: unatoto1, caption: "Caption thirteen" }
];


function Dashboard() {
  return (
    <div className="Dashboard">
      <h2>Dinner Location Collection</h2>
      <p>Click on each image below to show the corresponding image.</p>

      <TabGallery input={collection} ratio={`10:10`} />
    </div>
  );
}

export default Dashboard;
