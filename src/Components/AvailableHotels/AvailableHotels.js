import React from 'react';

function App() {
    const [isShowAvailable, showAvailable] = useState(false)
    
    return (
      <main>
        <button onClick={() => showAvailable(true)}>Включить</button>
        <div>{isShowAvailable && 'текст'}</div>
      </main>
    );
  }
  
  export default App;