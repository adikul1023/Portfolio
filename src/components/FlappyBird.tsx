import React, { useState, useEffect, useCallback, useRef } from 'react';

interface FlappyBirdProps {
  onExit: () => void;
}

export const FlappyBird: React.FC<FlappyBirdProps> = ({ onExit }) => {
  const CANVAS_WIDTH = 400;
  const CANVAS_HEIGHT = 500;
  const BIRD_SIZE = 20;
  const PIPE_WIDTH = 50;
  const PIPE_GAP = 150;
  const GRAVITY = 0.3;
  const JUMP_STRENGTH = -6;
  const MAX_VELOCITY = 10;
  const GAME_SPEED = 3;

  const [birdY, setBirdY] = useState(CANVAS_HEIGHT / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState<{ x: number; topHeight: number }[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const velocityRef = useRef(birdVelocity);
  const birdYRef = useRef(birdY);
  const gameLoopRef = useRef<number | null>(null);
  const pipeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    velocityRef.current = birdVelocity;
    birdYRef.current = birdY;
  }, [birdVelocity, birdY]);

  const jump = useCallback(() => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (!gameOver) {
      setBirdVelocity(JUMP_STRENGTH);
    }
  }, [gameStarted, gameOver]);

  const resetGame = useCallback(() => {
    setBirdY(CANVAS_HEIGHT / 2);
    setBirdVelocity(0);
    setPipes([]);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  }, []);

  const addPipe = useCallback(() => {
    const minHeight = 50;
    const maxHeight = CANVAS_HEIGHT - PIPE_GAP - 50;
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    setPipes((prev) => [...prev, { x: CANVAS_WIDTH, topHeight }]);
  }, []);

  useEffect(() => {
    if (gameStarted && !gameOver && !isExiting) {
      pipeTimerRef.current = setInterval(addPipe, 2000);
    }
    return () => {
      if (pipeTimerRef.current) clearInterval(pipeTimerRef.current);
    };
  }, [gameStarted, gameOver, addPipe, isExiting]);

  const gameLoop = useCallback(() => {
    if (gameOver || !gameStarted || isExiting) return;

    // Update bird physics
    let newVelocity = velocityRef.current + GRAVITY;
    // Cap the falling speed
    if (newVelocity > MAX_VELOCITY) {
      newVelocity = MAX_VELOCITY;
    }
    const newY = birdYRef.current + newVelocity;

    setBirdVelocity(newVelocity);
    setBirdY(newY);

    // Check ground/ceiling collision
    if (newY <= 0 || newY >= CANVAS_HEIGHT - BIRD_SIZE) {
      setGameOver(true);
      return;
    }

    // Update pipes
    setPipes((prevPipes) => {
      const newPipes = prevPipes
        .map((pipe) => ({ ...pipe, x: pipe.x - GAME_SPEED }))
        .filter((pipe) => pipe.x > -PIPE_WIDTH);

      // Check collisions and score
      newPipes.forEach((pipe) => {
        const birdX = 50;
        const birdRight = birdX + BIRD_SIZE;
        const birdBottom = newY + BIRD_SIZE;

        // Check if bird is in pipe's x range
        if (birdRight > pipe.x && birdX < pipe.x + PIPE_WIDTH) {
          // Check collision with top or bottom pipe
          if (newY < pipe.topHeight || birdBottom > pipe.topHeight + PIPE_GAP) {
            setGameOver(true);
          }
        }

        // Check if bird passed the pipe (for scoring)
        if (pipe.x + PIPE_WIDTH === birdX) {
          setScore((prev) => prev + 1);
        }
      });

      return newPipes;
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameOver, gameStarted, isExiting]);

  useEffect(() => {
    if (gameStarted && !gameOver && !isExiting) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameLoop, gameStarted, gameOver, isExiting]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isExiting) return;

      const gameKeys = [' ', 'Escape', 'q', 'r', 'ArrowUp', 'w'];

      if (!gameKeys.includes(e.key)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      if (e.key === 'Escape' || e.key === 'q') {
        setIsExiting(true);
        setTimeout(() => {
          const input = document.querySelector('#prompt') as HTMLInputElement;
          if (input) input.focus();
          onExit();
        }, 50);
        return;
      }

      if (e.key === 'r' && gameOver) {
        resetGame();
        return;
      }

      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress, true);
    return () => {
      window.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [jump, gameOver, resetGame, onExit, isExiting]);

  return (
    <div className="my-4">
      <div className="mb-2" style={{ color: 'var(--yellow-color)' }}>
        🐦 FLAPPY BIRD
      </div>
      <div className="mb-2" style={{ color: 'var(--green-color)' }}>
        Score: {score} {score > 0 && '🎉'}
      </div>

      <div
        style={{
          display: 'inline-block',
          border: '2px solid var(--yellow-color)',
          backgroundColor: '#87CEEB',
          position: 'relative',
        }}
      >
        <svg
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{ display: 'block' }}
        >
          {/* Background */}
          <rect width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill="#87CEEB" />

          {/* Ground */}
          <rect
            y={CANVAS_HEIGHT - 50}
            width={CANVAS_WIDTH}
            height={50}
            fill="#8B4513"
          />
          <rect
            y={CANVAS_HEIGHT - 50}
            width={CANVAS_WIDTH}
            height={10}
            fill="#228B22"
          />

          {/* Pipes */}
          {pipes.map((pipe, index) => (
            <g key={index}>
              {/* Top pipe */}
              <rect
                x={pipe.x}
                y={0}
                width={PIPE_WIDTH}
                height={pipe.topHeight}
                fill="var(--green-color)"
                stroke="#000"
                strokeWidth="2"
              />
              <rect
                x={pipe.x - 5}
                y={pipe.topHeight - 30}
                width={PIPE_WIDTH + 10}
                height={30}
                fill="var(--green-color)"
                stroke="#000"
                strokeWidth="2"
              />

              {/* Bottom pipe */}
              <rect
                x={pipe.x}
                y={pipe.topHeight + PIPE_GAP}
                width={PIPE_WIDTH}
                height={CANVAS_HEIGHT - pipe.topHeight - PIPE_GAP - 50}
                fill="var(--green-color)"
                stroke="#000"
                strokeWidth="2"
              />
              <rect
                x={pipe.x - 5}
                y={pipe.topHeight + PIPE_GAP}
                width={PIPE_WIDTH + 10}
                height={30}
                fill="var(--green-color)"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          ))}

          {/* Bird */}
          <g>
            {/* Body */}
            <rect
              x={50}
              y={birdY}
              width={BIRD_SIZE}
              height={BIRD_SIZE}
              fill="#FFD700"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Eye */}
            <circle cx={50 + BIRD_SIZE - 6} cy={birdY + 8} r={3} fill="#000" />
            {/* Beak */}
            <polygon
              points={`${50 + BIRD_SIZE},${birdY + 10} ${50 + BIRD_SIZE + 6},${
                birdY + 10
              } ${50 + BIRD_SIZE + 3},${birdY + 13}`}
              fill="#FFA500"
              stroke="#000"
              strokeWidth="1"
            />
            {/* Wing */}
            <ellipse
              cx={50 + 5}
              cy={birdY + BIRD_SIZE - 5}
              rx={8}
              ry={4}
              fill="#FFA500"
              stroke="#000"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>

      <div className="mt-2" style={{ color: 'var(--gray-color)' }}>
        {!gameStarted && !gameOver && (
          <div style={{ color: 'var(--yellow-color)' }}>
            Press [SPACE], [W] or [↑] to start and flap!
          </div>
        )}
        {gameOver && (
          <div>
            <div style={{ color: 'var(--red-color)' }}>💥 GAME OVER!</div>
            <div>Final Score: {score}</div>
            <div>Press [R] to restart or [ESC] to exit</div>
          </div>
        )}
        {gameStarted && !gameOver && (
          <div>Controls: [SPACE]/[W]/[↑] Flap | [ESC]/[Q] Exit</div>
        )}
      </div>
    </div>
  );
};
