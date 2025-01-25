import React from 'react';

function App() {
  return (
    <div>
      <h1>Embedded Webpage</h1>
      <iframe
        src="https://typebot.co/lembra-piero"
        style={{ border: 'none', width: '100%', height: '600px' }}
      ></iframe>
    </div>
  );
}

export default App;
