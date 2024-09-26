// src/components/FavoriteIcon.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const FavoriteIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer', fontSize: '24px', color: isFavorited ? 'red' : 'gray' }}>
      <FontAwesomeIcon icon={isFavorited ? solidHeart : regularHeart} />
    </div>
  );
};

export default FavoriteIcon;
