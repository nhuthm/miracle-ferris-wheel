// components/FerrisWheel.tsx
import React, { useState } from 'react';
import styles from '../styles/FerrisWheel.module.css'; // Import a CSS module

interface FerrisWheelProps {
  items: string[];
}

const FerrisWheel: React.FC<FerrisWheelProps> = ({ items }) => {
  const [result, setResult] = useState<string | null>(null);

  const spinWheel = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setResult(randomItem);
  };

  return (
    <div className={styles.ferrisWheel}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          style={{
            transform: `rotate(${(360 / items.length) * index}deg) translateY(100px) rotate(${-(
              (360 / items.length) *
              index
            )}deg)`,
          }}
        >
          {item}
        </div>
      ))}

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={spinWheel}
      >
        Spin the Wheel
      </button>

      {result && (
        <div className="text-center mt-4">
          <p className="text-xl">Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default FerrisWheel;
