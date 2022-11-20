import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container py-8 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
