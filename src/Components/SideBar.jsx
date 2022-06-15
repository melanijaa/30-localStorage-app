import { FaLeaf } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <FaLeaf className="FaLeaf"></FaLeaf>
      <h2>Kolt scooters are climate positive</h2>
      <a className="sidebarA" href="https://example.com/">
        READ MORE &rarr;
      </a>
    </div>
  );
};

export default SideBar;
