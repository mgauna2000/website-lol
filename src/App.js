import './styles/App.css'
import img from './img/logo_small.png'

function App() {
  return (
    <div className="banner">
      <div className="navbar">
        <img src={img} alt="" className="logo"/>
        <ul>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
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
