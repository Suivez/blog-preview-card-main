import './App.css';
import illustrationArticle from "./images/illustration-article.svg";
import imageAvatar from './images/image-avatar.webp';

function App() {
  return (
    <div className="App">
      <div className='card-main'>
        <div className='card-image'>
          <img src={illustrationArticle} alt='illustration article'/>
        </div>
        <div className='card-content'>
          <div className='learning-box'>
            Learning
          </div>
          <p>Published 21 Dec 2023</p>
          <a href=""><h2>HTML & CSS foundations</h2></a>
          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className='author-box'>
            <img src={imageAvatar} alt='authors avatar'/>
            <div className='author-name'>Greg Hooper</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
