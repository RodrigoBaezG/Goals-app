import './App.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import List from './components/lista/List.jsx';
import Details from './components/nueva/Details.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        {/* <List></List> */}
        <Details></Details>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
