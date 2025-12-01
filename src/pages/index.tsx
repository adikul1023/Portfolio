import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    // Load saved theme on mount
    const loadTheme = () => {
      const savedTheme = localStorage.getItem('terminal-theme') || 'gruvbox';
      const themes = require('../../themes.json');
      const theme = themes[savedTheme];
      if (!theme) return;

      const root = document.documentElement;
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const colors = isDark ? theme.dark : theme.light;

      root.style.setProperty('--bg-color', colors.background);
      root.style.setProperty('--fg-color', colors.foreground);
      root.style.setProperty('--yellow-color', colors.yellow);
      root.style.setProperty('--green-color', colors.green);
      root.style.setProperty('--gray-color', colors.gray);
      root.style.setProperty('--blue-color', colors.blue);
      root.style.setProperty('--red-color', colors.red);
    };

    loadTheme();

    const handleThemeChange = (e: CustomEvent) => {
      const themeName = e.detail;
      const themes = require('../../themes.json');
      const theme = themes[themeName];
      if (!theme) return;

      const root = document.documentElement;
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const colors = isDark ? theme.dark : theme.light;

      root.style.setProperty('--bg-color', colors.background);
      root.style.setProperty('--fg-color', colors.foreground);
      root.style.setProperty('--yellow-color', colors.yellow);
      root.style.setProperty('--green-color', colors.green);
      root.style.setProperty('--gray-color', colors.gray);
      root.style.setProperty('--blue-color', colors.blue);
      root.style.setProperty('--red-color', colors.red);

      localStorage.setItem('terminal-theme', themeName);
    };

    window.addEventListener('changeTheme', handleThemeChange as EventListener);
    return () => window.removeEventListener('changeTheme', handleThemeChange as EventListener);
  }, []);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded" style={{ borderColor: 'var(--yellow-color)' }}>
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
