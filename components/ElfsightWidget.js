'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function ElfsightWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <>
          <div className="elfsight-app-e444ff06-51dc-4d36-8419-14d41f485659"></div>
          <Script src="https://apps.elfsight.com/p/platform.js" />
        </>
      )}
    </div>
  );
}