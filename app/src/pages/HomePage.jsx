import { useDispatch, useSelector } from 'react-redux';
import { addPastries } from '../store/store';

const HomePage = () => {
  const { pastries } = useSelector((state) => state.pastries);
  const dispatch = useDispatch();

  pastries.forEach((pastry) => {
    console.log(pastry);
  });
  return (
    <div>
      <h1>Hello pastries!</h1>
      <button
        onClick={() => dispatch(addPastries({ name: 'Pain au chocolat' }))}
      >
        Click
      </button>
      {pastries && pastries.length > 0 && (
        <ul>
          {pastries.map((pastry, i) => (
            <li key={i}>{pastry.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
