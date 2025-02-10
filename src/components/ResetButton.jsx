export const ResetButton = ({ onClick, disabled }) => {
    return (
      <button 
        className={`reset-button ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        Reset Game
      </button>
    );
  };