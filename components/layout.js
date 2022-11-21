import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container flex flex-col py-8 mx-auto space-y-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
