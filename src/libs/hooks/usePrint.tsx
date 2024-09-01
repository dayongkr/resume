import { useEffect, useState } from 'react';

export function usePrint(): boolean {
  const [isPrint, setIsPrint] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrint(true);
    const handleAfterPrint = () => setIsPrint(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  return isPrint;
}
