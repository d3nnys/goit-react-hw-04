import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ modalIsOpen, image, onClick }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClick}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
          },
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#000000cf',
          },
        }}
      >
        <img className={css.image} src={image} />
      </Modal>
    </div>
  );
}
