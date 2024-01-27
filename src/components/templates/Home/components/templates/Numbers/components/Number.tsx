import { formatNumber } from "@/utils/formatNumber";
import { FC, useEffect, useRef, useState } from "react";

interface NumberProps {
  targetNumber: number;
  active?: boolean;
}

export const Number: FC<NumberProps> = ({
  targetNumber,
  active = false,
}) => {
  const startedRef = useRef(false);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let startTimestamp: any;
    const duration = 3000; // Duration of the animation in milliseconds

    const animate = (timestamp: any) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(
        1,
        (timestamp - startTimestamp) / duration
      );
      const nextNumber = Math.floor(progress * targetNumber);

      setCurrentNumber(nextNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (active && !startedRef.current) {
      startedRef.current = true;
      requestAnimationFrame(animate);
    }
  }, [targetNumber, active]);

  return formatNumber(currentNumber);
};
