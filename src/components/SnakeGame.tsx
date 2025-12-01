import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SnakeGameProps {
  onExit: () => void;
}

export const SnakeGame: React.FC<SnakeGameProps> = ({ onExit }) => {
  const GRID_SIZE = 20;
  const CELL_SIZE = 20;
  const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
  const INITIAL_DIRECTION = { x: 1, y: 0 };
  const GAME_SPEED = 150;

  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  const directionRef = useRef(direction);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead: Position = {
        x: head.x + directionRef.current.x,
        y: head.y + directionRef.current.y,
      };

      // Check collision with walls
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check collision with self
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check if food is eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [gameOver, isPaused, food, generateFood]);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't handle any keys if exiting
      if (isExiting) return;
      
      // Only handle game-related keys
      const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', ' ', 'r', 'Escape', 'q'];
      
      if (!gameKeys.includes(e.key)) {
        return; // Let other keys pass through
      }
      
      e.preventDefault();
      e.stopPropagation();
      
      if (e.key === 'Escape' || e.key === 'q') {
        setIsExiting(true);
        // Re-focus the input after exiting
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

      if (e.key === ' ') {
        setIsPaused(prev => !prev);
        return;
      }

      const currentDir = directionRef.current;
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (currentDir.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
          if (currentDir.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
          if (currentDir.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
          if (currentDir.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress, true);
    return () => {
      window.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [gameOver, onExit, isExiting]);

  useEffect(() => {
    if (!gameOver && !isPaused && !isExiting) {
      gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [moveSnake, gameOver, isPaused, isExiting]);

  return (
    <div className="my-4">
      <div className="mb-2" style={{ color: 'var(--yellow-color)' }}>
        🐍 SNAKE GAME
      </div>
      <div className="mb-2" style={{ color: 'var(--green-color)' }}>
        Score: {score} | Length: {snake.length}
      </div>
      
      <div
        style={{
          display: 'inline-block',
          border: '2px solid var(--yellow-color)',
          backgroundColor: 'var(--bg-color)',
        }}
      >
        <svg
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          style={{ display: 'block' }}
        >
          {/* Grid */}
          {Array.from({ length: GRID_SIZE }).map((_, y) =>
            Array.from({ length: GRID_SIZE }).map((_, x) => (
              <rect
                key={`${x}-${y}`}
                x={x * CELL_SIZE}
                y={y * CELL_SIZE}
                width={CELL_SIZE}
                height={CELL_SIZE}
                fill="none"
                stroke="var(--gray-color)"
                strokeOpacity="0.2"
              />
            ))
          )}
          
          {/* Snake */}
          {snake.map((segment, index) => (
            <rect
              key={index}
              x={segment.x * CELL_SIZE + 1}
              y={segment.y * CELL_SIZE + 1}
              width={CELL_SIZE - 2}
              height={CELL_SIZE - 2}
              fill={index === 0 ? 'var(--green-color)' : 'var(--blue-color)'}
              rx={2}
            />
          ))}
          
          {/* Food */}
          <circle
            cx={food.x * CELL_SIZE + CELL_SIZE / 2}
            cy={food.y * CELL_SIZE + CELL_SIZE / 2}
            r={CELL_SIZE / 2 - 2}
            fill="var(--red-color)"
          />
        </svg>
      </div>

      <div className="mt-2" style={{ color: 'var(--gray-color)' }}>
        {gameOver && (
          <div>
            <div style={{ color: 'var(--red-color)' }}>GAME OVER!</div>
            <div>Press [R] to restart or [ESC] to exit</div>
          </div>
        )}
        {isPaused && !gameOver && (
          <div style={{ color: 'var(--yellow-color)' }}>PAUSED - Press [SPACE] to continue</div>
        )}
        {!gameOver && !isPaused && (
          <div>
            Controls: [↑/W] [↓/S] [←/A] [→/D] | [SPACE] Pause | [ESC] Exit
          </div>
        )}
      </div>
    </div>
  );
};
