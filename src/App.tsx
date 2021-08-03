import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './Pages/SigIn';

import AuthProvider from './hooks';

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
