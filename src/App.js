import './App.css';
import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer'

function App() {
  return <>
    <div className="App-container">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className='itemListContainer'>
        
        <ItemListContainer/>
      </main>
    </div>
  </>;
}

export default App;

