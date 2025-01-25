import React from 'react';

function App() {
  return (
    <div style={{ margin: '10px' }}>
      <h1>Agenda</h1>
      <iframe
        src="https://typebot.co/lembra-piero"
        style={{ border: 'none', width: '100%', height: 'calc(100vh - 20px)' }}
      ></iframe>
    </div>
  );
}

export default App;
