import './styles/PastryCard-styles.scss';

const PastryCard = ({ name, image, quantity, quantityWon, choice }) => {
  // TODO: display image when path is correct
  return (
    <div className="pastry-card">
      {/* <div className="pastry-image">
        <img src={image} aria-label={`Image de ${name}`} />
      </div> */}
      <p>{name}</p>
      <p>quantity: {quantity}</p>
      <p>quantityWon: {quantityWon}</p>
    </div>
  );
};

export default PastryCard;
