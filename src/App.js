
import './App.css';
import Button from '@material-ui/core/Button';
import ReactPlayer from "react-player"
function App() {
  return (
  <div className="App">
    <nav>
    <div className="foo">
        <div className="nav-bar">
          HOME
        </div>
        <div className="nav-bar">
          PORTFOLIO
        </div>
        <div className="nav-bar">
           ABOUT US
        </div>
        <div className="nav-bar">
            CONTACT
        </div>
    </div>
    </nav>
    <div className="video">
      <ReactPlayer url="https://youtu.be/JtVnOZ26XHA"/>
    </div>
    <div className="text">
      <h1>OUR STRONG</h1>
      <h1>ORGANAISATION</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Sequi asperiores ullam libero a quaerat voluptatum maxime <br/> quos dolorem incidunt quasi!</h3>
      <h4><Button variant="contained" color="secondary">
      Contact Us
      </Button></h4>
    </div>
  </div>
  );
}

export default App;
