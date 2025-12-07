import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { ThemeProvider } from '../utils/themeContext';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <ThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div
        className="min-w-max text-xs md:min-w-full md:text-base"
        style={{ color: 'var(--fg-color)' }}
        onClick={onClickAnywhere}
      >
        <main
          className="w-full h-full p-2"
          style={{ backgroundColor: 'var(--bg-color)' }}
        >
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
