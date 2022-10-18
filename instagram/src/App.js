import React, { useState } from 'react'; 
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"cleverland",
      caption:"AMAZING!",
      imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fprofil_3135715&psig=AOvVaw07xTGoGKtLzwvObcLOCSkU&ust=1666184971269000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMji_-zs6foCFQAAAAAdAAAAABAE"
    },
    {
      username:"cleverland",
      caption:"AMAZING!",
      imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fprofil_3135715&psig=AOvVaw07xTGoGKtLzwvObcLOCSkU&ust=1666184971269000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMji_-zs6foCFQAAAAAdAAAAABAE"
    }
  ]); 


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

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
     
      <Post username="feazfjqsj" caption="hey" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fprofil_3135715&psig=AOvVaw07xTGoGKtLzwvObcLOCSkU&ust=1666184971269000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMji_-zs6foCFQAAAAAdAAAAABAE"/>
      <Post username="fdbgkdb," caption="how" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fprofil_3135715&psig=AOvVaw07xTGoGKtLzwvObcLOCSkU&ust=1666184971269000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMji_-zs6foCFQAAAAAdAAAAABAE"/>
      <Post username="daddadadaa" caption="okay" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fprofil_3135715&psig=AOvVaw07xTGoGKtLzwvObcLOCSkU&ust=1666184971269000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMji_-zs6foCFQAAAAAdAAAAABAE"/>
   
    </div>
  );
}

export default App;
