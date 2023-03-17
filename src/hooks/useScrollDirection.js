import { useState, useEffect } from 'react';

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const updateScrollDirection = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

      if (scrollTop < 250) {
        setScrollDirection('up');
        return;
      }

      const maxScroll = scrollHeight - clientHeight - scrollTop - 100;
      let direction = prevScrollpos > scrollTop ? 'up' : 'down';

      if (maxScroll <= 0) {
        direction = 'down';
      } else if (scrollTop <= 0) {
        direction = 'up';
      }

      setScrollDirection(direction);
      prevScrollpos = scrollTop;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
