import './styles/CustomButton-styles.scss';

const CustomButton = ({ text, type, isDisabled, onClick }) => {
  return (
    <button
      className={
        isDisabled ? 'button button-disabled' : `button button-${type}`
      }
      aria-disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
