
import './App.css';
import Dictionary from './Dictionary';

 function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"></header>
      <main>
        <h1 className="name"> My Dictionary App </h1>
        <Dictionary defaultKeyword="Dictionary" />
      </main>
      <footer className="text-center">
        <a href="https://github.com/SabinaSig/dictionary-project" target="_blank" rel="noreferrer"> Open-source </a> code by 
        <a href="https://www.linkedin.com/in/sabina-sigmundov%C3%A1-431324194/?originalSubdomain=dk" target="_blank" rel="noreferrer"> Sabina Sigmundová </a> 
      </footer>
      </div>
    </div>
  );
}

export default App;
