import { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"

const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          setCount(Math.floor(start + (end - start) * progress));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <div ref={ref}>
      {inView ? (
        <h3 className="counterstats seasons leading-normal lg:leading-[1.3] text-[28px] text-[#5E2A29] lg:text-[3.542vw]">{count}{suffix}</h3>
      ) : (
        <h3 className="counterstats seasons leading-normal lg:leading-[1.3] text-[28px] text-[#5E2A29] lg:text-[3.542vw]">0</h3>
      )}
    </div>
  );
};

export default Counter;