import CustomButton from '../CustomButton';
import './styles/DeletePastry-styles.scss';

const DeletePastry = ({ selectedPastry, cancel }) => {
  /** TODO:
   * handleDelete: dispatch pour supprimer la selectedPastry
   * cancel: closeModal
   */

  const handleDelete = (pastry) => {
    console.log(`Delete ${pastry.name}`);
  };

  return (
    <div className="delete-modal">
      <h2 className="delete-modal-title">
        Voulez-vous vraiment supprimer cette pâtisserie ?
      </h2>
      <div className="buttons">
        <CustomButton text="Annuler" type="error" onClick={cancel} />
        <CustomButton
          text="Confirmer"
          type="success"
          onClick={() => handleDelete(selectedPastry)}
        />
      </div>
    </div>
  );
};

export default DeletePastry;
