import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';


function Layout() {
    return ( 
        <>
      <Header></Header>
      <Main>
        <Outlet></Outlet>
      </Main>
      <Footer></Footer>
    </>
     );
}

export default Layout;