import './styles/PastriesList-styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { fetchAllPastriesAsync } from '../store/pastries';
import PastryCard from './PastryCard';
import Image from '../assets/images/pastries.jpg';
import CustomModal from './CustomModal';
import UpdatePastryForm from './CrudForms/UpdatePastryForm';

const PastriesList = ({ isAdmin }) => {
  const authState = useSelector((state) => state.user);
  const { pastries } = useSelector((state) => state.pastries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState && authState.user.isConnected) {
      dispatch(fetchAllPastriesAsync());
    }
  }, []);

  /** TODO:
   * add image prop when image path is correct
   * edit isAdmin condition
   */

  return (
    <div className="pastries-cards-container">
      {pastries.map((pastry, i) => (
        <Fragment key={i}>
          {!isAdmin && (!pastry.quantity || pastry.quantity === '0') ? null : (
            <PastryCard key={i} pastry={pastry} isAdmin={isAdmin} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default PastriesList;
