import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../components/CustomButton';
import './styles/BackOfficePage-styles.scss';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import AddPastryForm from '../components/CrudForms/AddPastryForm';
import CustomModal from '../components/CustomModal';
import { useState } from 'react';
import PastriesList from '../components/PastriesList';
import UpdatePastryForm from '../components/CrudForms/UpdatePastryForm';

const BackOfficePage = () => {
  const [addPastryFormVisible, setAddPastryFormVisible] = useState(false);

  const openAddPastryFormModal = () => {
    setAddPastryFormVisible(true);
  };

  const closeAddPastryFormModal = () => {
    setAddPastryFormVisible(false);
  };

  return (
    <>
      <Layout className="admin">
        <>
          <h2>Back-office</h2>
          <a href="#back-office" className="admin-arrow-down-icon">
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
          onClick={openAddPastryFormModal}
        />
        {addPastryFormVisible && (
          <CustomModal
            handleClose={closeAddPastryFormModal}
            show={addPastryFormVisible}
          >
            <AddPastryForm closeAddPastryFormModal={closeAddPastryFormModal} />
          </CustomModal>
        )}

        <PastriesList isAdmin={true} />
      </section>
    </>
  );
};

export default BackOfficePage;
