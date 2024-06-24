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
        </div>
      </div>
    </div>
  );
}

export default App;
