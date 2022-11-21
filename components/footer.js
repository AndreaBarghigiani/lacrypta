import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <Image
          className="mr-2 rounded-full"
          src="/images/logo.png"
          width="64"
          height="64"
          alt="La Crypta logo"
        />
        <p>
          <span className="text-lg font-semibold">La Crypta</span>
          <br />
          Consigli cripto da 197 giorni
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
