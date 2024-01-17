import { useEffect, useState } from 'react';
import CustomButton from '../CustomButton';
import Layout from '../Layout';
import './Forms-styles.scss';
import { checkFormValidity } from '../../utils/form.utils';
import { useDispatch } from 'react-redux';
import { addPastry } from '../../store/pastries';

const AddPastryForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [pastry, setPastry] = useState({
    name: '',
    quantity: '',
    image: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkFormValidity(pastry.image, pastry.name, pastry.quantity)) {
      // dispatch...
      dispatch(addPastry(pastry));
    } else {
      console.log('FORM NON VALIDE');
    }
  };

  return (
    <Layout className="add-pastry">
      <>
        <CustomButton
          text={formVisible ? 'Fermer le formulaire' : 'Ajouter une pâtisserie'}
          type={formVisible ? 'error' : 'success'}
          onClick={() => setFormVisible(!formVisible)}
        />
        {formVisible && (
          <form onSubmit={handleSubmit} className="form-add-pastry">
            <h2>Ajouter une pâtisserie</h2>
            <input
              required
              type="text"
              placeholder="Nom de la pâtisserie"
              onChange={(e) => setPastry({ ...pastry, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Quantité"
              required
              onChange={(e) =>
                setPastry({ ...pastry, quantity: e.target.value })
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
                  setPastry({ ...pastry, image: e.target.files[0].name })
                }
              />
              <label htmlFor="image" className="file-input-label">
                {pastry.image || 'Choisissez une image'}
              </label>
            </div>
            <input type="submit" value="Ajouter" />
          </form>
        )}
      </>
    </Layout>
  );
};

export default AddPastryForm;
