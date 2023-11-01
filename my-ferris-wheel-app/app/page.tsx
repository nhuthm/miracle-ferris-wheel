// pages/index.tsx
'use client'

import React from 'react';
import FerrisWheel from '../components/FerrisWheel';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-4">Ferris Wheel App</h1>
        <FerrisWheel items={items} />
      </div>
    </div>
  );
};

export default Home;
