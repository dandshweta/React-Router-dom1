import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="link-container">
        <Link to={"/homepage"}>HomePage</Link>
        <Link to={"/aboutus"}>AboutUs</Link>
        <Link to={"/contactus"}>ContactUs</Link>
      </div>
      <div>ContactUs</div>
    </>
  );
};
export default ContactUs;
