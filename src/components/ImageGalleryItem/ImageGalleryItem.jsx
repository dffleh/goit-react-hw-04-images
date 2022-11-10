import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <ItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
