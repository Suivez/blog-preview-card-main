import './App.css';
import illustrationArticle from "./images/illustration-article.svg";

function App() {
  return (
    <div className="App">
      <div className='card-main'>
        <div className='card-image'>
          <img src={illustrationArticle} alt='illustration article'></img>
        </div>
        <div className='card-content'>
          <div className='learning-box'>
            Learning
          </div>
          <p>Published 21 Dec 2023</p>
          <h2>HTML & CSS foundations</h2>
          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
