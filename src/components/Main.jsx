import './Main.css';

function Main({children}) {
  return (
    <div className="main">
    <aside>
        <a href="/list">List</a>
        <a href="/create">Create</a>
    </aside>
    <main>
        {children}
    </main>
      
    </div>
  );
}

export default Main;