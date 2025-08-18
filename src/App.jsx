import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import List from './components/lista/List.jsx';
import Details from './components/nueva/Details.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
