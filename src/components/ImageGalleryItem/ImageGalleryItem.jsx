import PropTypes from 'prop-types';

import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <ItemImage src={webformatURL} alt={tags} />
      </GalleryItem>
      {showModal && (
        <Modal largeImageURL={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
