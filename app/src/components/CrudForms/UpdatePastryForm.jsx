import './styles/AdminPastryCrudForm-styles.scss';
import { checkUpdatePastryFormValidity } from '../../utils/form.utils';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updatePastry } from '../../store/pastries';
import { toastError } from '../Toast';

const UpdatePastryForm = ({ selectedPastry, handleCloseModal }) => {
  /** TODO:
   * dispatch updatePastry dans le handleSubmit
   * add image preview and modification
   */

  const [newPastry, setNewPastry] = useState({
    name: selectedPastry.name,
    quantity: selectedPastry.quantity,
    image: selectedPastry.image,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      checkUpdatePastryFormValidity(
        newPastry.image,
        newPastry.name,
        newPastry.quantity
      )
    ) {
      // dispatch...
      dispatch(updatePastry([selectedPastry.id, newPastry]));
      handleCloseModal();
    } else {
      console.log('FORM NON VALIDE');
      toastError(
        'Vous devez remplir au moins un des champs du formulaire pour le valider ⚠️'
      );
    }
  };

  return (
    <>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="form-admin-pastry-crud"
      >
        <h2>Modifier une pâtisserie</h2>
        <input
          type="text"
          value={newPastry.name}
          onChange={(e) => setNewPastry({ ...newPastry, name: e.target.value })}
        />
        <input
          type="number"
          value={newPastry.quantity}
          onChange={(e) =>
            setNewPastry({ ...newPastry, quantity: e.target.value })
          }
        />
        <div className="file-input-wrapper">
          <input
            type="file"
            id="image"
            name="image"
            accept="image/jpeg, image/png"
            aria-required="true"
            onChange={(e) =>
              setNewPastry({ ...newPastry, image: e.target.files[0].name })
            }
          />
          <label htmlFor="image" className="file-input-label">
            {newPastry.image || 'Choisissez une image'}
          </label>
        </div>
        <input type="submit" value="Modifier" />
      </form>
    </>
  );
};

export default UpdatePastryForm;
