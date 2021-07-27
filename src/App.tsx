import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './Pages/SigIn';
import SigUp from './Pages/SigUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
