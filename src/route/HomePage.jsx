import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="link-container">
        <Link to={"/homepage"}>HomePage</Link>
        <Link to={"/aboutus"}>About Us</Link>
        <Link to={"/contactus"}>Contact Us</Link>
      </div>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
