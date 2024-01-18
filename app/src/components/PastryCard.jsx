import CustomButton from './CustomButton';
import './styles/PastryCard-styles.scss';

const PastryCard = ({ id, name, image, quantity, quantityWon, isAdmin }) => {
  // TODO: display image when path is correct

  const handleUpdate = () => {
    console.log('Update');
  };

  const handleDelete = () => {
    console.log('Delete');
  };

  return (
    <div className="pastry-card">
      <div className="pastry-image">
        <img src={image} aria-label={`Image de ${name}`} />
      </div>
      <div className="pastry-text">
        <p className="pastry-name">{name}</p>
        <div className="separator" />
        <p>Quantité disponible: {quantity}</p>
        {isAdmin && <p>Quantité gagnée: {quantityWon ?? '0'}</p>}
      </div>
      {isAdmin && (
        <div className="pastry-card-footer">
          <div className="separator" />
          <CustomButton
            text="Modifier la pâtisserie"
            type="danger"
            onClick={handleUpdate}
          />
          <CustomButton
            text="Supprimer la pâtisserie"
            type="error"
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default PastryCard;
