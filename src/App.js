import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video className="App-video" src="./space.mp4" autoPlay loop muted />
        <div className="overlay">
          <h1>Welcome to Space</h1>
        </div>
        <div className="overlay2">
          <h1>Enjoy the stars</h1>
        </div>
        <div className="overlay3">
          <h1>And try not to get too cold...</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
