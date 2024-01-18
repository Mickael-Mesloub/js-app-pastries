import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../components/CustomButton';
import './styles/BackOfficePage-styles.scss';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import AddPastryForm from '../components/CrudForms/AddPastryForm';
import CustomModal from '../components/CustomModal';
import { useState } from 'react';

const BackOfficePage = () => {
  const [formVisible, setFormVisible] = useState(false);

  const handleOpenModal = () => {
    setFormVisible(true);
  };

  const handleCloseModal = () => {
    setFormVisible(false);
  };
  return (
    <>
      <Layout className="admin">
        <>
          <h2>Back-office</h2>
          <a href="#back-office">
            <FontAwesomeIcon icon={faCircleDown} size="5x" color="white" />
          </a>
        </>
      </Layout>
      <section id="back-office" className="back-office">
        <div className="back-office-presentation">
          <h2 className="back-office-title">Back-office</h2>
          <p className="back-office-explanation">
            Sur cette page, vous pourrez ajouter, modifier, supprimer des
            pâtisseries.
          </p>
        </div>

        <CustomButton
          type="primary"
          text={'Ajouter une pâtisserie'}
          onClick={handleOpenModal}
        />
        {formVisible && (
          <CustomModal handleClose={handleCloseModal} show={formVisible}>
            <AddPastryForm />
          </CustomModal>
        )}
      </section>
    </>
  );
};

export default BackOfficePage;
