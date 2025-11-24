import { useEffect } from 'react';

const useDynamicTitle = () => {
  useEffect(() => {
    const originalTitle = "Sizzle - flavor that blazzes";
    const awayTitle = "🍕 Come back! We miss you! 🍔";
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = awayTitle;
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

export default useDynamicTitle;
