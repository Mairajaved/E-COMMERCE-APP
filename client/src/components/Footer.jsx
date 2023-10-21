import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {" "}
      <div className="footer">
        <h1 className="text-center">All Right Reserved &copy; Ecommerce App</h1>
        <p className="text-center mt-3">
          <span>MADE BY MAIRA JAVED</span> <br />
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </>
  );
}

export default Footer;
