import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="link-container">
        <Link to={"/homepage"}>HomePage</Link>
        <Link to={"/aboutus"}>AboutUs</Link>
        <Link to={"/contactus"}>ContactUs</Link>
      </div>

      <div>AboutUs</div>
    </>
  );
};
export default AboutUs;
