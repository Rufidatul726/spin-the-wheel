import React from 'react';
import {Wheel} from './components/Wheel';
import {ScoreBoard} from './components/ScoreBoard';
import {SpinButton} from './components/SpinButton';
import './App.css';
import { ResetButton } from './components/ResetButton';

const App = () => {
  const [scores, setScores] = React.useState([]);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [spinDegree, setSpinDegree]= React.useState(0);

  const handleSpin = () => {
    if (scores.length >= 5 || isSpinning) return;
    setIsSpinning(true);
    
    // Random degree between 720 and 1440 (2-4 full rotations) plus the specific slice
    const spinDegrees = 720 + Math.random() * 720;
    setSpinDegree(spinDegrees + 36);
    const finalDegree = spinDegrees % 360;
    
    const score = calculateScore(finalDegree);
    
    setTimeout(() => {
      setIsSpinning(false);
      setCurrentScore(score);
      setScores([...scores, score]);
    }, 8000);
  };

  const calculateScore = (degree) => {
    const slice = Math.floor((360 - degree) / 36);
    return (slice + 1 ) * 10;
  };

  const handleReset = () => {
    setScores([]);
    setCurrentScore(-1);
    setIsSpinning(false);
  };


  return (
    <div className="app">
      <h1>Spin the Wheel</h1>
      <div className='game-container'>
        <div className="game-subcontainer">
          <Wheel isSpinning={isSpinning} spinDegrees={isSpinning ? spinDegree : 0} currentScore={currentScore} />
          <SpinButton onClick={handleSpin} disabled={isSpinning || scores.length >= 5} scores={scores} />
          <ResetButton onClick={handleReset} disabled={isSpinning}/>
        </div>
        <ScoreBoard scores={scores} currentScore={currentScore} />
      </div>
    </div>
  );
};

export default App;
