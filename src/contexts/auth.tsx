import { createContext, useContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {
  user: TUser | null;
}

export const AuthContext = createContext<AuthProps>(
  {} as AuthProps,
);

const AuthProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
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
