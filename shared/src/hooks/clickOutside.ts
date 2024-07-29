import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const current: Node = ref.current as unknown as Node;

      if (current && !current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);

  return ref;
};
