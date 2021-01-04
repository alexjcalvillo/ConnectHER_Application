import React from 'react';

const favoriteIconHandler = (bool) => {
  let hexColor;
  if (bool === false) {
    return (hexColor = '#f7fafc');
  } else {
    return (hexColor = '#ff3858');
  }
};

export default favoriteIconHandler;
