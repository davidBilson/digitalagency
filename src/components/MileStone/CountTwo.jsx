import React, { useEffect, useRef, useState } from 'react';

const CountTwo = () => {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const countRef = useRef(null);
  
    useEffect(() => {
      const countElement = countRef.current;
  
      const handleScroll = () => {
        if (countElement && !isCounting && window.scrollY + window.innerHeight >= countElement.offsetTop) {
          setIsCounting(true);
          const countInterval = setInterval(() => {
            setCount(prevCount => {
              if (prevCount < 29) {
                return prevCount + 1;
              }
              clearInterval(countInterval);
              return prevCount;
            });
          }, 100);
        }
      };
  
      handleScroll(); // Start the count up animation on load
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isCounting]);
  return (
    <div className="count-up" ref={countRef}>
        <span className="count-up-number">{count < 10 ? `00${count}` : count < 100 ? `0${count}` : count}<span className='count-plus-two'>+</span></span>
    </div>
  )
}

export default CountTwo