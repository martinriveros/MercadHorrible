import './App.css';
import {NavBar} from './components/navBar/navBar'
import {Greetings} from './components/navBar/greetings'
import {ItemListContainer} from './components/navBar/itemListContainer'

const greeting = {text1:"SILENCE!", text2:"I kill you!"}

function App() {
  return <>
    <div className="App-container">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className='silence'>
        <Greetings {...greeting}/>
        <ItemListContainer />
      </main>
    </div>
  </>;
}

export default App;

