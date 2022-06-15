import kolt from "../images/kolt.png";

const Main = () => {
    return (
      <div className="main">
        <div className="text">
        <h1>Safe.<br/>Affordable.<br/>Eco-friendly.</h1>
        <p>Use Kolt scooters for your daily commute and to explore cities around the world.</p>
        </div>
        <img className="kolt" src={kolt} alt="kolt"></img>
      </div>
    );
  };
  
  export default Main;