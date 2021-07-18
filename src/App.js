
import './App.css';
import Dictionary from './Dictionary';

 function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"></header>
      <main>
        <h1> My Dictionary App </h1>
        <Dictionary defaultKeyword="Word" />
      </main>
      <footer className="text-center">
        Coded by Sabina Sigmundová
      </footer>
      </div>
    </div>
  );
}

export default App;
