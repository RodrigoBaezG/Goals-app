import './Main.css';

function Main({children}) {
  return (
    <div className="main-container">
    <aside className='aside'>
        <a href="/list">List</a>
        <a href="/create">Create</a>
    </aside>
    <main className='main'>
        {children}
    </main>
      
    </div>
  );
}

export default Main;