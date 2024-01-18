import './styles/PastryCard-styles.scss';

const PastryCard = ({ name, image, quantity, quantityWon, choice }) => {
  // TODO: display image when path is correct
  return (
    <div className="pastry-card">
      <div className="pastry-image">
        <img src={image} aria-label={`Image de ${name}`} />
      </div>
      <div className="pastry-text">
        <p className="pastry-name">{name}</p>
        <div className="separator" />
        <p>Quantité disponible: {quantity}</p>
      </div>
    </div>
  );
};

export default PastryCard;
