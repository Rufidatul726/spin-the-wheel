export const SpinButton = ({ onClick, disabled, scores }) => {
    return (
      <button 
        className={`spin-button ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? (scores.length >= 5 ? 'Game Over' : 'Spinning...') : 'SPIN!'}
      </button>
    );
  };