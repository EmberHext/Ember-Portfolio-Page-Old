import React, { useEffect, useRef } from 'react';

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion)').matches || window.innerWidth <= 768) {
      return;
    }
  
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    if (!ctx) {
      return;
    }

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    
    handleResize();
    window.addEventListener('resize', handleResize);


    const binaryChars = '01';
    const columns = canvas.width / 10;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = -1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // Probability threshold for spawning a new column
        const spawnThreshold = 0.0035;
      
        for (let i = 0; i < drops.length; i++) {
          // Check if the current column is inactive and if a new column should spawn
          if (drops[i] === -1 && Math.random() < spawnThreshold) {
            drops[i] = 0;
          }
      
          // If the current column is active, draw the binary characters and update the position
          if (drops[i] !== -1) {
            const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      
            ctx.font = '20px monospace';
            // Draw red text behind the original text
            ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
            ctx.fillText(text, i * 10 - 1, drops[i] * 14 - 1);
            ctx.fillText(text, i * 10 + 1, drops[i] * 14 - 1);
            ctx.fillText(text, i * 10 - 1, drops[i] * 14 + 1);
            ctx.fillText(text, i * 10 + 1, drops[i] * 14 + 1);
      
            ctx.font = '14px monospace';
            // Draw the original white text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillText(text, i * 10, drops[i] * 14);
      
            // If the current column has reached the bottom, mark it as inactive
            if (drops[i] * 14 > canvas.height) {
              drops[i] = -1;
            } else {
              drops[i]++;
            }
          }
        }
      }
      
      const interval = setInterval(draw, 80);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize); // Clean up the event listener when the component is unmounted
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 z-0 pointer-events-none w-full h-full" style={{ mixBlendMode: 'screen' }} />
  );
};

export default BinaryRain;