import './styles/AdminPastryCrudForm-styles.scss';
import { checkFormValidity } from '../../utils/form.utils';
import { useDispatch } from 'react-redux';
import { addPastry } from '../../store/pastries';
import { useEffect, useState } from 'react';

const UpdatePastryForm = ({ selectedPastry, handleCloseModal }) => {
  /** TODO:
   * dispatch updatePastry dans le handleSubmit
   */

  const [newPastry, setNewPastry] = useState({
    name: '',
    quantity: '',
    image: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      checkFormValidity(newPastry.image, newPastry.name, newPastry.quantity)
    ) {
      // dispatch...
      //   dispatch(updatePastry(pastry));
      handleCloseModal();
    } else {
      console.log('FORM NON VALIDE');
    }
  };

  if (selectedPastry) console.log(selectedPastry);

  return (
    <>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="form-admin-pastry-crud"
      >
        <h2>Modifier une pâtisserie</h2>
        <input
          required
          type="text"
          placeholder={selectedPastry.name}
          onChange={(e) => setNewPastry({ ...newPastry, name: e.target.value })}
        />
        <input
          type="number"
          placeholder={`Quantité: ${selectedPastry.quantity}`}
          required
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
            required
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
