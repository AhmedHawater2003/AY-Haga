import { useState, useEffect } from 'react';


const InsightsCard = ({title,value}) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(window.scrollY > 400) { 
        if (displayedValue < value) {
            setDisplayedValue(displayedValue + 2);
        } else {
            clearInterval(interval);
        }
    }
    else {
        setDisplayedValue(0);
    }
    }, 50); // Adjust speed of animation here

    return () => clearInterval(interval);
  }, [displayedValue, value]);

  return (
    <div className="card">
      <div className='card-title'>{title}</div>
      <div className='card-title'>{displayedValue}</div>
      <div className="card-description">Donations</div>
    </div>
  );
};

export default InsightsCard;
