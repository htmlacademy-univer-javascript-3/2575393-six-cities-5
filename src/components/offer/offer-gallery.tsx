/* eslint-disable react-refresh/only-export-components */
import {memo} from 'react';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images } : OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((imageLink) => (
          <div key={imageLink} className="offer__image-wrapper">
            <img className="offer__image" src={imageLink} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OfferGallery);
