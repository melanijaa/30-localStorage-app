import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="header">
      <a className="logo" href="https://example.com/">
        <img src={logo} alt="logo"></img>
      </a>
      <div className="navbar">
        <a href="https://example.com/">Ride</a>
        <a href="https://example.com/">Become a driver</a>
        <a href="https://example.com/">Fleet</a>
        <a href="https://example.com/">Business</a>
        <a href="https://example.com/">Scooters</a>
        <a href="https://example.com/">Drive</a>
        <a href="https://example.com/">Food</a>
        <a href="https://example.com/">Cities</a>
      </div>
    </div>
  );
};

export default NavBar;
