'use client';
import React from 'react';
import styled from 'styled-components';
import SparkleInstance from './SparklesInstance';

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

const generateSparkle = (color = DEFAULT_COLOR): Sparkle => {
  return {
    id: String(Math.random() * (99999 - 10000) + 10000),
    createdAt: Date.now(),
    color,
    size: Math.floor(Math.random() * (20 - 10) + 10),
    style: {
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      zIndex: 2,
    },
  };
};

function useRandomInterval(
  callback: () => void,
  minDelay: number,
  maxDelay: number
) {
  const timeoutId = React.useRef<number>();

  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    const handleTick = () => {
      const nextTickAt = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();

    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
}

interface SparklesProps {
  children: React.ReactNode;
}

const Sparkles: React.FC<SparklesProps> = ({ children }) => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);

  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle();
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    500
  );

  return (
    <Wrapper className='w-full'>
      {sparkles.map((sparkle, i) => (
        <SparkleInstance
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
          key={i}
        />
      ))}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export default Sparkles;
