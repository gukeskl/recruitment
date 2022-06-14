import { useState, useEffect } from 'react';

export const useLoadOnScroll = <T>(
  elements: T[] | null,
  initialAmount: number,
  incrementAmount: number,
  onUpdate?: (newElements: T[]) => void
) => {
  const [numberOfActiveElements, setNumberOfActiveElements] = useState<number>(initialAmount);
  const [activeElements, setActiveElements] = useState<T[] | null>(null);

  useEffect(() => {
    const scrollListener = () => {
      const isUserAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (isUserAtBottom) {
        setNumberOfActiveElements(prev => prev + incrementAmount);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [incrementAmount]);

  useEffect(() => {
    if (elements) {
      setActiveElements(prevValue => {
        if (onUpdate) onUpdate(elements.slice(prevValue?.length || 0, numberOfActiveElements));
        return elements.slice(0, numberOfActiveElements);
      });
    }
  }, [elements, numberOfActiveElements, onUpdate]);

  return activeElements;
};
