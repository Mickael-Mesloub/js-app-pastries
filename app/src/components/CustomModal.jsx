import React from 'react';
import './styles/CustomModal-styles.scss';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <span className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faCircleXmark} size="2x" />
        </span>
        {children}
      </section>
    </div>
  );
};

export default CustomModal;
