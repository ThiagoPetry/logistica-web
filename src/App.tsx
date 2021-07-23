import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './Pages/SigIn';
import SigUp from './Pages/SigUp';

const App: React.FC = () => {
  return (
    <>
      <SigUp />
      <GlobalStyle />
    </>
  );
};

export default App;
