import './styles/PastriesList-styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { fetchAllPastriesAsync } from '../store/pastries';
import PastryCard from './PastryCard';

const PastriesList = () => {
  const authState = useSelector((state) => state.user);
  const { pastries } = useSelector((state) => state.pastries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState && authState.user.isConnected) {
      dispatch(fetchAllPastriesAsync());
    }
  }, []);

  // TODO: add image prop when image path is correct

  return (
    <div className="pastries-cards-container">
      {pastries.map((pastry, i) => (
        <Fragment key={i}>
          {!pastry.quantity || pastry.quantity === 0 ? null : (
            <PastryCard
              key={i}
              name={pastry.name}
              quantity={pastry.quantity}
              quantityWon={pastry.quantityWon}
              //   image={image}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default PastriesList;
