export const ScoreBoard = ({ scores, currentScore }) => {
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const remainingSpins = 5 - scores.length;
  
    return (
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        <div className="scores-history">
          <h3>Spin History:</h3>
          {scores.map((score, i) => (
            <div key={i} className="score-entry">
              Spin {i + 1}: {score}
            </div>
          ))}
        </div>
        <div className="total-score">
          Total Score: {totalScore}
        </div>
        <div className="remaining-spins">
          Remaining Spins: {remainingSpins}
        </div>
        {currentScore > 0 && (
          <div className="current-score">
            Last Spin: {currentScore}
          </div>
        )}
      </div>
    );
  };
  