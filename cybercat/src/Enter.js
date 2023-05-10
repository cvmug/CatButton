import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Enter.css';

export default function Enter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`wrapper ${hovered ? 'hovered' : ''}`}>
      <Link to="/home">
        <button
          className="cyber-button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          ENTER
        </button>
      </Link>
    </div>
  );
}
