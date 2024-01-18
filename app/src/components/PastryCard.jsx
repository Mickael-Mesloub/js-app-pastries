import { useState } from 'react';
import UpdatePastryForm from './CrudForms/UpdatePastryForm';
import CustomButton from './CustomButton';
import CustomModal from './CustomModal';
import './styles/PastryCard-styles.scss';
import DeletePastry from './CrudForms/DeletePastry';

const PastryCard = ({ pastry, isAdmin }) => {
  // TODO: display image when path is correct
  const [updatePastryFormVisible, setUpdatePastryFormVisible] = useState(false);
  const [deletePastryModalVisible, setDeletePastryModalVisible] =
    useState(false);

  const handleUpdate = (pastry) => {
    // setUpdatePastryFormVisible(true);
    console.log(pastry.name);
  };

  const openUpdatePastryFormModal = () => {
    setUpdatePastryFormVisible(true);
  };

  const closeUpdatePastryFormModal = () => {
    setUpdatePastryFormVisible(false);
  };

  const openDeletePastryModal = () => {
    setDeletePastryModalVisible(true);
  };

  const closeDeletePastryModal = () => {
    setDeletePastryModalVisible(false);
  };

  return (
    <div className="pastry-card">
      <div className="pastry-image">
        <img src={pastry.image} aria-label={`Image de ${pastry.name}`} />
      </div>
      <div className="pastry-text">
        <p className="pastry-name">{pastry.name}</p>
        <div className="separator" />
        <p>Quantité disponible: {pastry.quantity}</p>
        {isAdmin && <p>Quantité gagnée: {pastry.quantityWon ?? '0'}</p>}
      </div>
      {isAdmin && (
        <div className="pastry-card-footer">
          <div className="separator" />
          <CustomButton
            text="Modifier la pâtisserie"
            type="danger"
            onClick={openUpdatePastryFormModal}
          />
          <CustomButton
            text="Supprimer la pâtisserie"
            type="error"
            onClick={openDeletePastryModal}
          />
        </div>
      )}
      {isAdmin && updatePastryFormVisible && (
        <CustomModal
          handleClose={closeUpdatePastryFormModal}
          show={updatePastryFormVisible}
        >
          <UpdatePastryForm
            selectedPastry={pastry}
            closeUpdatePastryFormModal={closeUpdatePastryFormModal}
            handleUpdate={handleUpdate}
          />
        </CustomModal>
      )}

      {isAdmin && deletePastryModalVisible && (
        <CustomModal
          handleClose={closeDeletePastryModal}
          show={deletePastryModalVisible}
        >
          <DeletePastry
            selectedPastry={pastry}
            cancel={closeDeletePastryModal}
          />
        </CustomModal>
      )}
    </div>
  );
};

export default PastryCard;
