import appStore from "../images/en.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="text">
        <h1>
          Safe.
          <br />
          Affordable.
          <br />
          Eco-friendly.
        </h1>
        <p>
          Use Kolt scooters for your daily commute and to explore cities around
          the world.
        </p>
        <a className="appStore" href="https://example.com/">
          <img src={appStore} alt="appStore"></img>
        </a>
      </div>
    </div>
  );
};

export default Main;
