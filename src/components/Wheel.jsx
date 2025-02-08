import React from "react";

export const Wheel = ({ isSpinning, spinDegrees, currentScore}) => {
  const [winningIndex, setWinningIndex] = React.useState(null);

  React.useEffect(() => {
    if (!isSpinning && currentScore!=-1) {
      setWinningIndex(currentScore/10 - 1);
    } else {
      setWinningIndex(null);
    }
  }, [isSpinning, spinDegrees, currentScore]);

  const colors = [
    'hsl(100, 0%, 80%)',
    'hsl(100, 100%, 80%)'
  ];
  
  const gradientStops = [];
  for (let i = 0; i < 10; i++) {
    const startAngle = i * 36;
    const endAngle = startAngle + 36;
    
    
    const color = winningIndex -1  === i
      ? `hsl(${i * 36}, 20%, 50%)`  
      : colors[i % 2]; 

    gradientStops.push(`${color} ${startAngle}deg ${endAngle}deg`);
  }
  
  const conicGradient = `conic-gradient(${gradientStops.join(', ')})`;

  return (
    <div className="wheel-container">
      <div 
        className={`wheel ${isSpinning ? 'spinning' : ''}`}
        style={{
          transform: `rotate(${spinDegrees}deg)`,
          transition: isSpinning ? 'transform 8s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
          background: conicGradient,
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="slice"
            style={{
              transform: `rotate(${i * 36}deg)`,
            }}
          >
            <span 
              className="score"
              style={{ transform: `rotate(${-i * 36}deg)` }}
            >
              {(i + 1) * 10}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer"></div>
    </div>
  );
};
