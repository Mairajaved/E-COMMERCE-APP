import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

// Use proper naming conventions: use PascalCase for component names.
function Layout({ children, title, description, keywords, author }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Use "defaultProps" instead of "defaultPrps", and fix typos in the object.
Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description:
    "MERN Stack project in which I personally design APIs using Express.js and fetch data.",
  keywords: "React.js, Express.js, MongoDB, HTML, CSS, JavaScript",
  author: "Maira Javed",
};

export default Layout; // Export the component with PascalCase.
