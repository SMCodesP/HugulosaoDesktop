import { createContext, useContext, useState } from 'react';

import { getClient } from '@tauri-apps/api/http';

import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {
  user: TUser | null;
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
  const [user, setUser] = useState(null);

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

      const response = await client.post<{
        name?: string;
      }>(`https://localhost:4000/api/session`, {
        type: `Json`,
        payload: {
          email,
          password,
        },
      });

      if (!response.ok)
        throw new Error(response.data.message);
      console.log(response);
    } catch (error) {
      console.log(`error`);
      console.log();
      toast((error as any).message, {
        type: `error`,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
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
