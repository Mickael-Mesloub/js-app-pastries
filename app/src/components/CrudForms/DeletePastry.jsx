import { useDispatch } from 'react-redux';
import CustomButton from '../CustomButton';
import './styles/DeletePastry-styles.scss';
import { deletePastry } from '../../store/pastries';

const DeletePastry = ({ selectedPastry, cancel }) => {
  const dispatch = useDispatch();

  const handleDelete = (pastry) => {
    dispatch(deletePastry(pastry.id));
    cancel();
  };

  return (
    <div className="delete-modal">
      <h2 className="delete-modal-title">
        Voulez-vous vraiment supprimer cette pâtisserie :
      </h2>
      <p className="delete-modal-pastry-name">{`"${selectedPastry.name}" ?`}</p>
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
