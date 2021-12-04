import './styles/App.css'
import img from './img/logo_small.png'

function App() {
  return (
    <div className="banner">
      <div className="navbar">
        <img src={img} alt="" className="logo"/>
        <ul>
          <li><a href="https://www.instagram.com/martin_gauna23/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://www.facebook.com/tino.gauna.10" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
          <li><a href="https://twitter.com/Martngauna5" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/martin-gauna-009a68208/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>

      <div className="content">
        <h1>Lorem lorem</h1>
        <p>bbsabpdbwasbyvdyuusvhjvhvhhhjvdsagojygeybh mhnbhbyisgdgasjbd</p>
        <div>
        <button type="button"><span></span>Lorem</button>
        <button type="button"><span></span>Insup</button>
      </div>
      </div>   
    </div>
  );
}

export default App;
