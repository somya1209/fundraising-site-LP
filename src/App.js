import './App.css';
import face from '../src/assets/face.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src={face} alt="image"></img></div>
        <div className="nav">
          <span className="links">About</span>
          <span className="links">Children</span>
          <span className="links" id="D">Donate</span>
          <span className="links">Contact</span>
          <span className="links" id="quote">Make them happy</span>
        </div>
        <div className="social-media">
       
       <a className="links" href="https://www.twitter.com/?lang=en"  target="_blank">Twitter</a>       
       <a className="links" href="https://www.facebook.com/" target="_blank" > Facebook</a>
       <a className="links" href="https://www.instagram.com/"  target="_blank" >Instagram</a>
       
        </div>
      <div className="details-box">       
     <div> <h3>The value of life is not in its duration,<br/>but in its donation</h3>    
      <p>You are not important becauseof how long you live,you are <br/>important because of how effective you live</p>      
      </div>
    </div>
        
      </header>
    </div>
  );
}

export default App;
