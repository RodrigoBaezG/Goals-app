import './App.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Goal from './components/lista/Goal.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal></Goal>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
