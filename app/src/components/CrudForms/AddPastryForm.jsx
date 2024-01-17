import { useState } from 'react';
import CustomButton from '../CustomButton';
import Layout from '../Layout';
import './Forms-styles.scss';

const AddPastryForm = () => {
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddPastryForm');
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
              type="text"
              placeholder="Nom de la pâtisserie"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantité"
              onChange={(e) => console.log(e.target.value)}
            />
            <div className="file-input-wrapper">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/jpeg, image/png"
                onChange={(e) => console.log(e.target.files[0].name)}
              />
              <label htmlFor="image" className="file-input-label">
                Choisissez une image
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
