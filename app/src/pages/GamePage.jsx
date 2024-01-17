import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { setRollsLeft, setWon, setLost, setDiceValues, setData } from '../store/gameSlice';
import Layout from '../components/Layout';

const GamePage = () => {
  const dispatch = useDispatch();
  const { rollsLeft, won, lost, diceValues, data } = useSelector((state) => state.game);

  const diceIcons = diceValues.map((value, index) => {
    let icon;

    switch (value) {
      case 1:
        icon = <FontAwesomeIcon key={index} icon={faDiceOne} size="3x" style={{ margin: '5px' }} />;
        break;
      case 2:
        icon = <FontAwesomeIcon key={index} icon={faDiceTwo} size="3x" style={{ margin: '5px' }} />;
        break;
      case 3:
        icon = <FontAwesomeIcon key={index} icon={faDiceThree} size="3x" style={{ margin: '5px' }} />;
        break;
      case 4:
        icon = <FontAwesomeIcon key={index} icon={faDiceFour} size="3x" style={{ margin: '5px' }} />;
        break;
      case 5:
        icon = <FontAwesomeIcon key={index} icon={faDiceFive} size="3x" style={{ margin: '5px' }} />;
        break;
      case 6:
        icon = <FontAwesomeIcon key={index} icon={faDiceSix} size="3x" style={{ margin: '5px' }} />;
        break;
      default:
        icon = null;
    }

    return icon;
  });

  const calculatePrizes = (countOccurrences) => {
    if (Object.values(countOccurrences).some((count) => count === 4)) {
      return 3; // Carré - 3 pâtisseries
    } else if (Object.values(countOccurrences).some((count) => count === 3)) {
      return 2; // Brelan - 2 pâtisseries
    } else if (Object.values(countOccurrences).some((count) => count === 2)) {
      return 1; // Paire - 1 pâtisserie
    } else {
      return 0; // Aucune combinaison gagnante
    }
  };

  const handleRollDice = async () => {
    if (rollsLeft > 0) {
      // Valeur de chaque dé
      const newDiceValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
      dispatch(setDiceValues(newDiceValues));

      // Count les occurrences de chaque valeur de dé et stocke dans un objet
      const countOccurrences = {};
      newDiceValues.forEach((value) => {
        countOccurrences[value] = (countOccurrences[value] || 0) + 1;
      });

      //  On vérifie si on a une pair, un brelan ou un carré contenue dans countOccurrences
      const hasPair = Object.values(countOccurrences).some((count) => count === 2);
      const hasThreeOfAKind = Object.values(countOccurrences).some((count) => count === 3);
      const hasFourOfAKind = Object.values(countOccurrences).some((count) => count === 4);

      // Check for winning conditions and update prizes
      if (hasFourOfAKind || hasThreeOfAKind || hasPair) {
        dispatch(setWon(true));
        dispatch(setRollsLeft(0));

        const prizeCount = calculatePrizes(countOccurrences);
        console.log(prizeCount);
        try {
          const response = await fetch('http://localhost:3001/game/win-pastries/' + prizeCount);
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
          const result = await response.json();
          console.log(result);

        
          dispatch(setData(result));
          
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(setLost(true));
        dispatch(setRollsLeft(rollsLeft - 1));
      }
    }
  };



  const selectRandomItems = (arr, n) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };


  return (
    <Layout>
      <p>Jeu du Yams</p>
      <p>Vous avez {rollsLeft} lancés</p>
      <p>Si vous obtenez une paire (2 dés identiques), vous gagnez une patisserie.</p>
      <p>Si vous obtenez un brelan (3 dés identiques), vous gagnez 2 pâtisseries.</p>
      <p>Si vous obtenez un carré (4 dés identiques), vous gagnez 3 pâtisseries.</p>
      <p>Bonne chance !!</p>

      <div>{diceIcons}</div>

    
      {won && data.length === 0 && (
        <div>
          <p>BRAVO, vous avez gagné ! Malheureusement il n'y a plus de patisseries disponibles...</p>
        </div>
      )}

      {won && data.length > 0 && (
        <div>
          <p>BRAVO, vous avez gagné :</p>
          {data.map((item) => (
            <div key={item.id}>
              <p>Nom: {item.name}</p>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      )}

      {lost && <p>PERDU</p>}

      {!won && rollsLeft > 0 && (
        <button onClick={handleRollDice} disabled={rollsLeft === 0}>
          Lancer les dés ({rollsLeft} essai{rollsLeft !== 1 ? 's' : ''} restant{rollsLeft !== 1 ? 's' : ''})
        </button>
      )}

    </Layout>
  );
};

export default GamePage;
