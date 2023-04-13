import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { getClient } from '@tauri-apps/api/http';

import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {
  user: TUser | null;
  accessToken: string;
  isLoaded: boolean;
  signIn: (user: {
    email: string;
    password: string;
  }) => Promise<void>;
}

export const AuthContext = createContext<AuthProps>(
  {} as AuthProps,
);

const AuthProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [accessToken, setAccessToken] = useState(``);
  const [isLoaded, setIsLoaded] = useState(false);

  const signIn: AuthProps['signIn'] = async ({
    email,
    password,
  }) => {
    try {
      if (!email || !password)
        throw new Error(
          `E-mail e senha devem ser enviadas.`,
        );
      const client = await getClient();

      const response = await client.post<any>(
        `https://localhost:4000/api/session`,
        {
          type: `Json`,
          payload: {
            email,
            password,
          },
        },
      );

      if (!response.ok)
        throw new Error(response.data.message);

      setAccessToken(response.data.access_token);
      localStorage.setItem(
        `access_token`,
        response.data.access_token,
      );
    } catch (error) {
      toast((error as any).message, {
        type: `error`,
      });
    }
  };

  const updateUser = useCallback(async () => {
    try {
      console.log(`update user`);
      const client = await getClient();
      const response = await client.get<TUser>(
        `https://localhost:4000/api/me`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {}
  }, [accessToken]);

  useEffect(() => {
    setAccessToken(
      localStorage.getItem(`access_token`) || ``,
    );
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    updateUser();
  }, [accessToken, updateUser]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoaded,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthProps {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;
