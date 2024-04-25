import React, { useEffect, useRef, useState } from "react";
import "./TextAnimator.css"; // Import the CSS for styling

interface TextAnimatorProps {
  texts: string[];
}

const TextAnimator: React.FC<TextAnimatorProps> = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const [fraction, setFraction] = useState(0); // To trigger updates for morphing effect

  const morphTime = 1; // Increased time for text to fully morph
  const cooldownTime = 2; // Added pause time between morphs

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (cooldownRef.current > 0) {
        cooldownRef.current = Math.max(cooldownRef.current - dt, 0);
        setFraction(0); // Reset fraction during cooldown
      } else {
        morphRef.current += dt;
        if (morphRef.current >= morphTime) {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          cooldownRef.current = cooldownTime;
          morphRef.current = 0;
          setFraction(0); // Reset fraction after full morph
        } else {
          setFraction(morphRef.current / morphTime);
        }
      }
      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [texts.length]);

  const opacity1 = Math.pow(1 - fraction, 0.4) * 100;
  const opacity2 = Math.pow(fraction, 0.4) * 100;
  const blurAmount1 = Math.min(8 / (1 - fraction) - 8, 100);
  const blurAmount2 = Math.min(8 / fraction - 8, 100);

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div id="container">
        <span
          id="text1"
          style={{
            filter: `blur(${blurAmount1}px)`,
            opacity: `${opacity1}%`,
          }}
        >
          {texts[textIndex % texts.length]}
        </span>
        <span
          id="text2"
          style={{
            filter: `blur(${blurAmount2}px)`,
            opacity: `${opacity2}%`,
          }}
        >
          {texts[(textIndex + 1) % texts.length]}
        </span>
      </div>
    </div>
  );
};

export default TextAnimator;
