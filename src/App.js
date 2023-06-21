import './App.css';

function App() {
  return (
    <>
      <div className="split left">
        <div className="fleur">
          <h1>Fl3ur_1nestimable</h1>
          <h2>Music | Sports | Socials</h2>
          <button className="btn_left">Let's go</button>
        </div>
        <img src="arrivalyellowfull.png" alt="arrivalyellow" className='imgbanner'/>
      </div>
      <div className= "split right">
        <div className="ayeb">
          <h1>Antoine Yebouet</h1>
          <h2>Portfolio | Resume | Projects</h2>
          <button className="btn_right">Enter</button>
        </div>
        <img src="arrivalrosefull.png" alt="arrivalrose" className='imgbanner' />
      </div>
    </>
  );
}

export default App;
