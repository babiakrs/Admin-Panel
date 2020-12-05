import React from 'react';
import { string } from 'prop-types';


function Picture({ webpURL, fallbackURL, fallbackText, className }) {
  return (
    <picture>
      <source type='image/webp' srcSet={webpURL}/>
      <img className={className} src={fallbackURL} alt={fallbackText}/>
    </picture>
  );
}

Picture.propTypes = {
  className: string,
  webpURL: string,
  fallbackURL: string.isRequired,
  fallbackText: string.isRequired
};

export { Picture };