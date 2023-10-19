import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import { Example } from './ui/components/Example';

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
