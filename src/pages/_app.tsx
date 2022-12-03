import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { listen } from '@tauri-apps/api/event';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/GlobalStyles';

import { dark } from '@/themes/dark';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/contexts/auth';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const unlisten = listen(`forgot-password`, (event) => {
      console.log(event);
      console.log(`forgot password`);
      router.push({
        pathname: `/forgot-password/reset`,
        query: {
          hmac: `Ht1eXT3kLBNedO4Y`,
        },
      });
    });

    return () => {
      (async () => {
        const [unlistenFn] = await Promise.all([unlisten]);
        unlistenFn();
      })();
    };
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>

      <ToastContainer
        theme="dark"
        position="bottom-right"
      />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
