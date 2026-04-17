import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center">KeenKeeper</h2>
        <p className="text-sm text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

        <p className="text-center mt-5">Social Links</p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <FaFacebookF className="text-lg" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="#"
            aria-label="X"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <FaXTwitter className="text-lg" />
          </a>
        </div>

        <div className=" mt-8 pt-4 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <p>Copyright &copy; {year} KeenKeeper. All rights reserved.</p>
          <div className="flex gap-5">
            <p className="hover:underline">
              Privacy Policy
            </p>
            <p className="hover:underline">
              Terms of Service
            </p>
            <p className="hover:underline">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
