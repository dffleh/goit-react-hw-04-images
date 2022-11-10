import Modal from 'components/Modal/Modal';
import { Component } from 'react';

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
        <li onClick={this.toggleModal}>
          <img src={webformatURL} alt={tags} />
        </li>
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
