import React from 'react';
import User from './User';
import ErrorBoundary from './ErrorBoundary'

function App() {

  const user = {
    id: 1,
    username: '김캐르'
  };
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
