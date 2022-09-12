
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">

      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-4.png" 
        alt=""
        />

      </div>
      <h1>Hello</h1>
      <Post/>
   
    </div>
  );
}

export default App;
