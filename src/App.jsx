import logo from './assets/movie.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a>
          <img src={logo} className="logo"/>
        </a>
        <h2>My Movies</h2>
      </div>
      <div className="card">
        <button onClick={() => null}>
          Pesquisar
        </button>
      </div>
      <footer>My Movies &copy; 2023</footer>
    </>
  )
}

export default App
