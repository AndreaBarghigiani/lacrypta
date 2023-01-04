import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col py-8 mx-6 space-y-10 md:container md:mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
